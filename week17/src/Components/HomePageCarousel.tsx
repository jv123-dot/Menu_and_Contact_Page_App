import { Carousel } from 'react-bootstrap'
import dock1 from '../assets/dock.png'
import dock2 from '../assets/dock2.png'
import lake from '../assets/foggylake.png'

export default function HomePageCarousel() {
    return (
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100' style={{height: '750px'}} src={dock1}/>
                    <Carousel.Caption>
                        <h3>First Slide</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' style={{height: '750px'}} src={dock2}/>
                    <Carousel.Caption>
                        <h3>Second Slide</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' style={{height: '750px'}} src={lake}/>
                    <Carousel.Caption>
                        <h3>Third Slide</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}