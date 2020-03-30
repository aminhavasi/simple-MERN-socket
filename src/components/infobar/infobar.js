import React from 'react';
import './infobar.css';
import closeIcon from '../../icons/closeIcon';
import onlineIcon from '../../icons/onlineIcon';

const InfoBar = () => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img
                    className="onlineIcon"
                    src={onlineIcon}
                    alt="online image"
                />
                <h3>roomName</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">
                    <img src={closeIcon} alt="close image" />
                </a>
            </div>
        </div>
    );
};
export default InfoBar;
