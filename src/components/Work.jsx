import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../assets/data.json'
const Work = () => {
  return (
    <div id="work">
        <h2>WORK</h2>
        <section>
            <article>
                <Carousel
                showArrows={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={1000}
                infiniteLoop={true}
                autoPlay={true}>



                 {
                    data.projects.map(i=>(
                        <div className='workItem' key={i.title}>
                            <img src={i.imgSrc} alt={i.title} />
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <a href={i.url} target={"blank"}>
                                    View demo
                                </a>
                            </aside>
                        </div>
                    ))
                 }
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work
