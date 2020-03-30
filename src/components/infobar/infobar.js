import React from 'react';

import './infobar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/">
                <p>close</p>
            </a>
        </div>
    </div>
);

export default InfoBar;
