import './portfolio.css'
import HOPPERS from '../../assets/hoppersbooks-capture.png'
import SPATS from '../../assets/spats-capture.png'
import ETT from '../../assets/ett-capture.png'

const data = [
    {
        id: 1,
        image: HOPPERS,
        title: 'Hopper\'s Books',
        github: 'https://github.com/murphy-mi/hoppers-books',
        live: 'http://hoppersbooks.maxmmurphy.com/'
    },
    {
        id: 2,
        image: SPATS,
        title: 'Spats',
        github: 'https://github.com/murphy-mi/phase-4-project-frontend',
        live: 'http://spats.maxmmurphy.com/'
    },
    {
        id: 3,
        image: ETT,
        title: 'Extraterrestrial Twinning',
        github: 'https://github.com/murphy-mi/phase-2-project',
        live: 'https://ettwinning.netlify.app/'
    }
]


function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, live }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className="btn">Github</a>
                                    <a href={live} className="btn btn-primary" target="_blank">Live</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;