import React from 'react'
import CV from '../../assets/CV.pdf'

function Resume() {
    return (
        <div classname="resume">
            <a href={CV} target='_blank' rel='noopener noreferrer' className='btn'>View Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default Resume