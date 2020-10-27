import React from "react";
import './topPanel.css';

export default function TopPanel() {
    return (
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
    )
}