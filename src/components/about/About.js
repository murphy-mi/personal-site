import React from 'react'
import './about.css'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__content">
                    {/* <div className="about__cards">
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
                    </div> */}

                    <p>
                        I'm a graduate of Flatiron School's Software Engineering program, and a professional learner. I hold a degree in Media and Information from Michigan State University, and have transitioned to software engineering after a brief yet fruitful career in audio engineering and sound design. The desire to understand and improve the systems around me brought me here, and the endless opportunity for creative expression and growth keeps me here.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About