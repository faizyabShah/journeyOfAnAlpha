import './mainpage.css';
import { FaPlay } from "react-icons/fa6";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import { useState } from 'react';
import sm from '../content/VID-20240909-WA0005.mp4'

function Mainpage() {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayButtonClick = () => {
        setShowVideo(true);
    };

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    const handleCloseButtonClick = () => {
        setShowVideo(false);
    };

    return (
        <div className='mainpage'>
            {showVideo ? (
                <div className='video-container'>
                    <button className='close-button' onClick={handleCloseButtonClick}><FaTimes size={30} /></button>
                    <video width="100%" height="100%" controls autoPlay onEnded={handleVideoEnd}>
                        <source src={sm} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div className='gradient'>
                    <div className='path'>Games / Journey of an Alpha</div>
                    <div className='maincontent'>
                        <h1>Journey of an Alpha</h1>
                        <div className="playbutton" onClick={handlePlayButtonClick}><FaPlay size={80} /></div>
                    </div>

                    <div className='category'>
                        <div>Adventure, Fantasy, Exploration / Coming soon</div>
                    </div>
                    <div className='description'>
                        Embark on a mystical adventure as a young wolf navigating through enchanted landscapes filled with mysterious creatures, towering fortresses, and ancient ruins. With a beautiful blend of nature and magic, "Journey of an Alpha" lets players explore a world of vivid colors and captivating environments, overcoming challenges to uncover the secrets of an ancient prophecy.
                    </div>
                    <div className="iconArea">
                        <button className="pressKit"><div>Press Kit</div> <FaBoxOpen size={25} /></button>
                        <button className="buy">Buy</button>
                        <div className="icons">
                            <div className="icon"><FaXbox size={30} /></div>
                            <div className="icon"><FaSteam size={30} /></div>
                            <div className="icon"><FaPlaystation size={30} /></div>
                            <div className="icon"><BsNintendoSwitch size={30} /></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mainpage;