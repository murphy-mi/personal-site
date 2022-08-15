import './header.css'
import HeaderSocials from './HeaderSocials'
import Resume from './Resume'
import MEBW from '../../assets/me-transparent-bw.png'
// import ME from '../../assets/me-transparent.png'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>
                    Hello I'm
                </h5>
                <h1>Max Murphy</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <Resume />
                <HeaderSocials />

                <div className="me">
                    <img src={MEBW} alt="Max Murphy headshot" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;