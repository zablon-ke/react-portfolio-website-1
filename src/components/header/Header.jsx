import React from 'react'
import './header.css'
import CTA from './CTA'
import myImg from '../../assets/Zablon-Muthoka-img.jpeg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Zablon Muthoka</h1>
        <h5 className='text-light'> A Software Engineer and A project Manager</h5>
        <CTA />

        {/*Render HeaderSocials*/}
        <HeaderSocials />

        {/*Create img div with image*/}
        <div className='my__img'>
          <img src={myImg} alt='Zablon Muthoka Image' />
        </div>

        {/*Create scroll down link*/}
        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>

    </header>
  )
}

export default Header