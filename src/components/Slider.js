import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel style={{maxWidth: '1400px',margin: '0 auto', marginBottom:'20px'}} activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item >
                <img
                    style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
                    className="d-block  "
                    src="/sliderImages/fs1.jpg"
                    alt={"first-slide"}
                />
                <Carousel.Caption >
                    <h3 >First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="/sliderImages/ss2.jpg"
                    alt={"second-slide"}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
                    className="d-block w-100 "
                    src="/sliderImages/ts3.jpg"
                    alt={"third-slide"}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;