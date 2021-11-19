import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="m-5 p-3">
            <h3>Contact</h3>
            <Container className="mt-3">
                <Row>
                    <Col sm={8}>
                        <div className="google-map-code">
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58373.58061634781!2d90.2263512982592!3d23.87724758877729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3d6df9569%3A0x277b3819d4da3e91!2sSavar%20Union!5e0!3m2!1sen!2sbd!4
                             v1636991008832!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""
                             aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Form>
                            <h2>Stay in Touch!</h2>
                            <p>Sign up to receive emails on deals, news and more.</p>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="your country" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Query</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;