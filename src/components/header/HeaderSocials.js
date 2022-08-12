import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/maxmmurphy/" target="_blank" className><BsLinkedin /></a>
            <a href="https://github.com/murphy-mi" target="_blank" className><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials