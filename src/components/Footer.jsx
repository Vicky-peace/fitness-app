
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import {  FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'


const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                <Link to='/' className='logo'>
                <img src={Logo} alt="Footer logo" style={{ backgroundColor: 'yellow' }} />


</Link>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla magni nihil sapiente deserunt odit odio.
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
                        <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
                    </div>
                </article>
            
                <article>
                 <h4>Permalinks</h4>
                 <Link to= '/about'>About</Link>
                 <Link to= '/plans'>Plans</Link>
                 <Link to= '/trainers'>Trainers</Link>
                 <Link to= '/gallery'>Gallery</Link>
                 <Link to= '/contacts'>Contact</Link>
                 <Link to= '/signin'>Sign In</Link>
                 <Link to= '/signup'>Sign Up</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2023 Fitness Club &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer