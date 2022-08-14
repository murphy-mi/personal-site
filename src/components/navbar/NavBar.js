import './navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { FaBookOpen } from 'react-icons/fa'
import { AiFillFolder } from 'react-icons/ai'
import { RiMessage2Fill } from 'react-icons/ri'
import { useState } from 'react'

function NavBar() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}
            ><AiFillHome /></a>
            <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            >< FaUser /></a>
            <a href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
            ><FaBookOpen /></a>
            <a href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''}
            ><AiFillFolder /></a>
            <a href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
            ><RiMessage2Fill /></a>
        </nav>
    );
}

export default NavBar;