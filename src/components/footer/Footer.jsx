import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      
      <a href="#" className='footer_logo'>ZablonMuthoka.com</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/zablonmuthoka/"><BsLinkedin/></a>
        <a href="https://github.com/zablon-ke/"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved by the owner, Zablon Muthoka </small>
      </div>

       {/*Create scroll up link*/}
       <a href='#' className='scroll__up'>Scroll Up</a>


    </footer>
  )
}

export default Footer