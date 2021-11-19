import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-body bg-info">
                        <h3>Greate Trip for Travelerz</h3>
                        <p>we structured to provide maximum flexibility for servicing different needs, & having many years experience in incentives, special group and FIT’s.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-body bg-info">
                        <h3>Kashmir Tour</h3>
                        <p> we render the best information on the must-visit places, things to do, where to stay, the best time to visit, affordable Kashmir tour packages, and other aspects of Kashmir Tourism. With us, your days in Kashmir will be a memorable one.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-body bg-info">
                        <h3>Bali Tour</h3>
                        <p>Bali is one of the most popular travel destinations in the world, and with good reason, as this island which is known as the ‘Island of the Gods’ is one of the most beautiful places on earth. We are one of the leader and experienced in bound Travel Companies in Bali will serve you to explore the island of Bali with our special Bali Tour Indonesia Package</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;