import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://tour-planner.herokuapp.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="m-5">
            <Row xs={1} md={3} className="g-3">
                {products.map((pd, index) => (

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={pd?.img} />
                            <Card.Body>
                                <Card.Title>{pd?.name}</Card.Title>
                                <Card.Text>Offer Price: {pd?.price}</Card.Text>
                                <Card.Text>
                                    {pd?.description}
                                </Card.Text>
                                <Link to={`/placeorder/product${pd._id}`}>
                                    <button className="btn btn-warning m-2">BOOK NOW</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </div>
    );
};

export default Product;

