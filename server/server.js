const http = require('http');
const fetch = require('node-fetch');
const FormData = require('form-data');

let accessToken = null;

const getToken = (code) => {
    if (accessToken) {
        return new Promise(function (resolve) {
            resolve(accessToken)
        });
    }

    const formData = new FormData();
    formData.append('client_id', '380557359779853');
    formData.append('client_secret', '9bb69ea54c9259e84317a555e9a507d9');
    formData.append('grant_type', 'authorization_code');
    formData.append('redirect_uri', 'https://b0a7e7d0f4e3.ngrok.io/');
    formData.append('code', code);

    return fetch('https://api.instagram.com/oauth/access_token', {
        method: 'POST',
        body: formData
    }).then(r => r.json()).then(r => {
        accessToken = r.access_token
        return accessToken;
    })
};

const requestListener = function (req, res) {
    getToken(req.url.slice(1)).then(accessToken => {
        fetch(`https://graph.instagram.com/me?fields=media,media_count,username&access_token=${accessToken}`)
            .then(r => r.json())
            .then(me => {
                if (!me.media) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                    res.writeHead(500);
                    res.end(JSON.stringify(me));
                    return;
                }


                Promise.all(me.media.data.map(mediaItem => {
                    return fetch(`https://graph.instagram.com/${mediaItem.id}?fields=media_url,caption,media_type,timestamp&access_token=${accessToken}`).then(r => r.json());
                })).then(media => {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                    res.end(JSON.stringify({
                        media: media,
                        mediaCount: me.media_count,
                        username: me.username
                    }));
                    res.writeHead(200);
                })
            })
    })
};

const server = http.createServer(requestListener);
server.listen(8080);