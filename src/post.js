import React from "react";
import './post.css';

export default function Post() {
    return (
        <div className="postDiv">
            <div className="post">
                <img className="postImg" src="https://images.otstatic.com/prod1/31836656/1/large.jpg" />
                <div className="captionDiv">
                    <div className="captionSection firstSec">
                        <div>
                            <img src="https://sun9-26.userapi.com/impf/c854320/v854320585/18e145/m72bUXPpXpE.jpg?size=1280x962&quality=90&sign=7008879cf7b76d5b1cdbfb858e224778" alt="" />
                            <p><strong>iwishihadnoname</strong></p>
                        </div>
                    </div>
                    <div className="captionSection secondSec">
                        <div>
                            <img src="https://sun9-26.userapi.com/impf/c854320/v854320585/18e145/m72bUXPpXpE.jpg?size=1280x962&quality=90&sign=7008879cf7b76d5b1cdbfb858e224778" alt="" />
                            <p><strong>iwishihadnoname</strong> caption is gonna be here hhhhhhhhhh hhhhhhhh hhhhh hhhh hhhhhhhhhh hhhhhhhh</p>
                        </div>
                    </div>
                    <div className="comments captionSection">
                        <div className="comment">
                            <img src="https://l-userpic.livejournal.com/81589670/11899723" alt="" />
                            <p><strong>ivan.ivanovich</strong> hello, im commenting this post</p>
                        </div>
                        <div className="comment">
                            <img src="https://l-userpic.livejournal.com/81589670/11899723" alt="" />
                            <p><strong>ivan.ivanovich</strong> Please note that export before a class or a function.</p>
                        </div>
                        <div className="comment">
                            <img src="https://l-userpic.livejournal.com/81589670/11899723" alt="" />
                            <p><strong>ivan.ivanovich</strong> hello, whats up?</p>
                        </div>
                    </div>
                    <div className="captionSection thirdSec">
                        <div className="thirdSecIcons">
                            <div className="likeCommentShare">
                                <img className="icon" src="https://www.flaticon.com/premium-icon/icons/svg/2961/2961957.svg" alt="" />
                                <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/2462/2462719.svg" alt="" />
                                <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/786/786205.svg" alt="" />
                            </div>
                            <div className="save">
                                <img className="icon" src="https://www.flaticon.com/premium-icon/icons/svg/3082/3082331.svg" alt="" />
                            </div>
                        </div>
                        <div className="likedBy">
                            <img src="https://l-userpic.livejournal.com/81589670/11899723" alt="" />
                            <p>Liked by <strong>ivan.ivanovich</strong> and <strong>736 others</strong></p>
                        </div>
                        <div className="data">
                            <p>5 days ago</p>
                        </div>
                    </div>
                    <div className="captionSection fourthSec">
                        <input placeholder="Add comment..." />
                        <button className="btn"><strong>Post</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
