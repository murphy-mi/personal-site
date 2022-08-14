import React from 'react'
import './about.css'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'

function About() {
    return (
        <section id="about">
            <h5>Get To Know Me</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className='about__me-image'>
                        <img src="" alt="About" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <SiJavascript className="about__icon" />
                            <h5>Experience</h5>
                            <small> Less than 1 Year</small>
                        </article>
                        <article className="about__card">
                            <FaReact className="about__icon" />
                            <h5>Experience</h5>
                            <small> Less than 1 Year</small>
                        </article>
                        <article className="about__card">
                            <DiRuby className="about__icon" />
                            <h5>Experience</h5>
                            <small> Less than 1 Year</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About