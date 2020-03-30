import React from 'react';
import './infobar.css';
// import closeIcon from '../../icons/closeIcon.webp';
// import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                {/* <img
                    className="onlineIcon"
                    src={onlineIcon}
                    alt="online image"
                /> */}
                <p>*</p>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">
                    {/* <img src={closeIcon} alt="close image" /> */}
                    <p>close</p>
                </a>
            </div>
        </div>
    );
};
export default InfoBar;
