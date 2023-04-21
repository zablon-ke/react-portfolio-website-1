import React from 'react'
import './about.css'
import myImg from '../../assets/Zablon-Muthoka-img.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={myImg} alt='About Photo'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years in Tech</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8:Completed | 6:Current</small>
            </article>

          </div>

          <p>

          I am a software engineer with proficiency in web technologies including HTML,
          CSS, JavaScript, NodeJs, Python and React and also an IT project manager  
          responsible for developing and managing information technology projects,
          their cost, time and scope.Responsibilities include creating a project plans,
          implementing the projects and monitoring and evaluating the projects to completion.
            <br />
            <br />
            More than web technologies, I am an AWS Certified Cloud Practitioner with 
            knowledge of hosting and migrating applications to the cloud.

            <br />
            
            I have also recently developed an interest in native applications and I am 
            currently working on my kotlin android skills.

          </p>

          <a href='#contact' className='btn btn-primary'>Contacts</a>

        </div>

      </div>
    
    </section>
  )
}

export default About