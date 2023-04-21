import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.PNG'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio Website',
    github: 'https://github.com/Gitthuma/george-githuma-portfolio-website',
    demo: 'zablonmuthoka.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'School Management System',
    github: 'https://github.com/Gitthuma/cup-of-uji-kenya-website',
    demo: 'https://www.cupofujikenya.org/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'AI Based Attendance System',
    github: 'https://github.com/Gitthuma/cup-of-uji-kenya-website',
    demo: 'https://www.cupofujikenya.org/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
       {
         data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
           )
         })
       }

      </div>

    </section>
  )
}

export default Portfolio