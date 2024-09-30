import './navbar.css';
import { useState } from 'react';
import { MdDehaze } from "react-icons/md";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className='navbar'>
                <div className='nav-header' onClick={toggleMenu}><MdDehaze size={20} /></div>
                <div className='nav-item' data-text="News">News</div>
                <div className='nav-item' data-text="Pitch">Pitch</div>
                <div className='nav-item' data-text="Jobs">Jobs</div>
                <div className='nav-item' data-text="Studios">Studios</div>
                <div className='nav-item' data-text="Games">Games</div>
            </div>
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className='side-menu-header'>
                <div className='top'>
                    <div className='side-menu-item-main'>Startify Games</div>
                </div>
                <div className="bottom">
                    <div className='side-menu-item' data-text="Games"></div>
                    <div className='side-menu-item' data-text="News"></div>
                    <div className='side-menu-item' data-text="About"></div>
                    <div className='side-menu-item' data-text="Studios"></div>
                    <div className='side-menu-item' data-text="Pitch a Game"></div>
                    <div className='side-menu-item' data-text="Jobs"></div>
                    <div className='side-menu-item' data-text="Press"></div>
                    <div className='side-menu-item' data-text="IR"></div>
                    <div className='side-menu-item' data-text="Contact"></div>

                </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;