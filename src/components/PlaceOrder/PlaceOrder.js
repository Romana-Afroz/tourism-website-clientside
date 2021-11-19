import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://tour-planner.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        data.productimg = product.img
        data.product = product.name
        data.productprice = product.price
        data.email = user?.email;
        data.status = "Pending"
        axios.post('https://tour-planner.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking successfully');
                    reset();
                }
            })
    }

    return (
        <div className="m-5">
            <h1 className="text-center">Product Details and Place Order</h1>
            <Row xs={1} md={2} className="g-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>Offer Price: {product.price}</Card.Text>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <h2 className="text-center">Please Add Information</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control {...register("address")} type="text" placeholder="Address" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control {...register("Phone")} type="number" placeholder="Phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>City</Form.Label>
                            <Form.Control {...register("city")} placeholder="City" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrder;






