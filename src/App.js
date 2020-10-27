import React, { useEffect, useState } from 'react';
import './App.css';
import TopPanel from "./topPanel";
import Stories from "./stories";
import Navigation from "./nav";

const CLIENT_ID = '380557359779853'

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const instagramCode = urlParams.get('code');
  const [me, setMe] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false);

  useEffect(() => {
    if (!instagramCode) {
      window.location = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=https://da5caa8f6ad9.ngrok.io/&scope=user_profile,user_media&response_type=code`
    }

    fetch(`http://localhost:8080/${instagramCode}`, {
      method: 'POST'
    }).then(r => r.json())
      .then(r => {
        if (r.error) {
          setIsError(true)
        } else {
          setMe(r);
        }
      }).catch(() => {
        setIsError(true);
      })

  }, [instagramCode]);

  if (isError) {
    return 'Something went wrong, please try to reload the page...'
  }
  if (!me) {
    return 'loading...'
  }

  function openPostHandler() {
    setIsPostOpen(true);
  }
  function closeHandler() {
    if (isPostOpen) {
      setIsPostOpen(false);
    }
  }

  return (
    <div>
      <div onClick={closeHandler} className="App">
        <nav>
          <TopPanel />
        </nav>
        <header>
          <section className="section">
            <div><img className="profileImg" src="https://sun9-26.userapi.com/impf/c854320/v854320585/18e145/m72bUXPpXpE.jpg?size=1280x962&quality=90&sign=7008879cf7b76d5b1cdbfb858e224778" alt="" /></div>
            <div className="rightSide">
              <div className="nameEditSettings">
                <h2 className="nickname">{me.username}</h2>
                <div className="edit"><button className="btn btnEdit"><strong>Edit Profile</strong></button></div>
                <button className="btn settings"><img className="icon" src="https://www.flaticon.com/premium-icon/icons/svg/2956/2956788.svg" alt="" /></button>
              </div>
              <div className="secondString">
                <div><strong>{me.mediaCount}</strong> posts</div>
                <div className="followers"><strong>190</strong> followers</div>
                <div className="followers"><strong>245</strong> following</div>
              </div>
              <div className="thirdString">
                <p className="name"><strong>Masha Andreeva</strong></p>
              </div>
            </div>
          </section>
        </header>
        <Stories />
        <Navigation />
        <div className="grid">
          {me.media.map(mediaItem => {
            if (mediaItem.media_type !== "VIDEO") {
              if (mediaItem.media_type === "IMAGE") {
                return <div>
                  <div>
                    <a onClick={openPostHandler}><img className="img" src={mediaItem.media_url} alt='' /></a>
                  </div>
                </div>
              } else {
                return <div>
                  <div>
                    <a onClick={openPostHandler}><img className="img image1" src={mediaItem.media_url} alt='' /></a>
                  </div>
                </div>
              }
            }
          })}
        </div>
        {me.media.filter()}
      </div>
    </div>
  );
}


export default App;