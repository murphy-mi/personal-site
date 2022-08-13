import './navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { FaBookOpen } from 'react-icons/fa'
import { AiFillFolder } from 'react-icons/ai'
import { RiMessage2Fill } from 'react-icons/ri'

function NavBar() {
    return (
        <nav>
            <a href="#"><AiFillHome /></a>
            <a href="#about">< FaUser /></a>
            <a href="#experience"><FaBookOpen /></a>
            <a href="#portfolio"><AiFillFolder /></a>
            <a href="#contact"><RiMessage2Fill /></a>
        </nav>
    );
}

export default NavBar;