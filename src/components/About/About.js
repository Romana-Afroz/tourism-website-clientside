import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="m-5">
            <Container>
                <Row>
                    <Col>
                        <h2>About Travelerz</h2>
                        <p>Travelerz is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the Travelerz provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.</p>
                        <p>Accommodation makes or breaks a trip! You have access to a hotel pool or a beach nearby most days on tour. Most nights, you share a room with just one other group member. The select dorm-style options included are ultra-comfy, extra clean, and uber-unique.</p>
                    </Col>
                    <Col><img width="600" src="https://www.teahub.io/photos/full/281-2815748_nice-niagara-falls-wallpaper-niagara-falls-hd-1080p.jpg" alt="" /></Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h4>Who we are</h4>
                        <p>Columbus Travel Media (CTM) is one of the most respected and successful names in the global travel industry, with a long and rich company heritage spanning 30 years. The definitive resource for global travel content, its reputation has been built on journalistic credibility. CTM is dedicated to the provision of objective, accurate, informative and reliable travel content in various formats, including the World Travel Guide for consumers, Columbus Travel Professional for travel industry professionals and extensive licensed and bespoke content for commercial partners through its specialist division, Columbus Content Solutions. A fast-growing, pioneering and diverse global travel content business, contact us to find out more about us.</p>
                    </Col>
                    <Col>
                        <h4>Our team</h4>
                        <p>We’ve been travelling the world for over 30 years, building a reputation for providing quality travel content that’s inspiring, engaging and informative. With all of our guides and features written and updated by a global network of expert travel writers that includes some of the best names in the business, we pride ourselves on producing content that stands out from the crowd. Regrettably, we aren’t able to accept guest posts and won’t be able to reply to guest post requests.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;