import React from 'react'
import Resume from '../../assets/ZablonM-Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'> 
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='https://www.linkedin.com/in/zablonmuthoka/' target='_blank' className='btn btn-primary'> LinkedIn Profile</a>

    </div>
  )
}

export default CTA