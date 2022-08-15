import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdEmail } from 'react-icons/md'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oseucvj', 'template_x0un4ze', form.current, '560myslJHnl8MDnM4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>maxmurphymi@gmail.com</h5>
                        <a href="mailto:maxmurphymi@gmail.com" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your email address" required />
                    <textarea name="message" rows="7" placeholder="Your message" required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact