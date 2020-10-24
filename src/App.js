import React, { useEffect, useState } from 'react';
import './App.css';
import Post from "./post";

const CLIENT_ID = '380557359779853'

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const instagramCode = urlParams.get('code');
  const [me, setMe] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false);

  useEffect(() => {
    if (!instagramCode) {
      window.location = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=https://2d4bdbb61cad.ngrok.io/&scope=user_profile,user_media&response_type=code`
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
      {
        isPostOpen ? <Post /> : null
      }
      <div onClick={closeHandler} className="App">
        <nav>
          <div className="topPanel">
            <div className="instagram"><h2>Instagram</h2></div>
            <input className="searchInput" type="text" placeholder="Search" autocapitalize="none" />
            <div className="icons">
              <div><img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg" alt="" /></div>
              <div><img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/786/786205.svg" alt="" /></div>
              <div><img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/2948/2948031.svg" alt="" /></div>
              <div><img className="icon" src="https://www.flaticon.com/premium-icon/icons/svg/2961/2961957.svg" alt="" /></div>
              <div><img className="icon profile" src="https://sun9-26.userapi.com/impf/c854320/v854320585/18e145/m72bUXPpXpE.jpg?size=1280x962&quality=90&sign=7008879cf7b76d5b1cdbfb858e224778" alt="" /></div>
            </div>
          </div>
        </nav>
        <header>
          <div></div>
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
        <div className="stories">
          <div>
            <img className="storiesImg" src="https://sun9-26.userapi.com/impf/c854320/v854320585/18e145/m72bUXPpXpE.jpg?size=1280x962&quality=90&sign=7008879cf7b76d5b1cdbfb858e224778" alt="" />
            <div className="storiesCaption"><p><strong>my stories</strong></p></div>
          </div>
          <div>
            <img className="storiesImg" src="https://sun9-26.userapi.com/impf/c854320/v854320585/18e145/m72bUXPpXpE.jpg?size=1280x962&quality=90&sign=7008879cf7b76d5b1cdbfb858e224778" alt="" />
            <div className="storiesCaption"><p><strong>my stories</strong></p></div>
          </div>
          <div>
            <img className="storiesImg" src="https://sun9-26.userapi.com/impf/c854320/v854320585/18e145/m72bUXPpXpE.jpg?size=1280x962&quality=90&sign=7008879cf7b76d5b1cdbfb858e224778" alt="" />
            <div className="storiesCaption"><p><strong>my stories</strong></p></div>
          </div>
        </div>
        {/* <div>{me.mediaCount}</div> */}
        <div className="navigation">
          <div className="list">
            <div>POSTS</div>
            <div>IGTV</div>
            <div>SAVED</div>
            <div>TAGGED</div>
          </div>
        </div>
        <div className="grid">
          {me.media.map(mediaItem => {
            if (mediaItem.media_type !== "VIDEO") {
              if (mediaItem.media_type === "IMAGE") {
                return <>
                  <a onClick={openPostHandler}><img className="img" src={mediaItem.media_url} alt='' /></a>
                  {/* <div className="caption"><p>{mediaItem.caption}</p></div> */}
                  {/* <div>{mediaItem.timestamp.slice(0, mediaItem.timestamp.length - 14)}</div>
              <div>{mediaItem.timestamp.slice(mediaItem.timestamp.length - 13, mediaItem.timestamp.length - 8)}</div> */}
                </>
              } else {
                return <div className="album">
                  <a onClick={openPostHandler}><img className="img image1" src={mediaItem.media_url} alt='' /></a>
                  <i class="fas fa-download image2"></i>
                  {/* <div className="caption"><p>{mediaItem.caption}</p></div> */}
                  {/* <div>{mediaItem.timestamp.slice(0, mediaItem.timestamp.length - 14)}</div>
              <div>{mediaItem.timestamp.slice(mediaItem.timestamp.length - 13, mediaItem.timestamp.length - 8)}</div> */}
                </div>
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}


export default App;
