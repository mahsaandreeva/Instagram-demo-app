// import React, { useEffect, useState } from 'react';


// const CLIENT_ID = '380557359779853'

// export default function Header() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const instagramCode = urlParams.get('code');
//     const [me, setMe] = useState(null);
//     const [isError, setIsError] = useState(false);

//     useEffect(() => {
//         if (!instagramCode) {
//             window.location = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=https://da5caa8f6ad9.ngrok.io/&scope=user_profile,user_media&response_type=code`
//         }

//         fetch(`http://localhost:8080/${instagramCode}`, {
//             method: 'POST'
//         }).then(r => r.json())
//             .then(r => {
//                 if (r.error) {
//                     setIsError(true)
//                 } else {
//                     setMe(r);
//                 }
//             }).catch(() => {
//                 setIsError(true);
//             })

//     }, [instagramCode]);

//     if (isError) {
//         return 'Something went wrong, please try to reload the page...'
//     }
//     if (!me) {
//         return 'loading...'
//     }

//     return (

//     )
// }