import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>Max Murphy</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/maxmmurphy/"><BsLinkedin /></a>
                <a href="https://github.com/murphy-mi"><BsGithub /></a>
            </div>

        </footer>
    )

}

export default Footer