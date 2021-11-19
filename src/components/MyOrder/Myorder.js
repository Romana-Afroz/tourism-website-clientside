import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Myorder = () => {
    const [services, setServices] = useState([])
    const { user } = useAuth();
    const email = user?.email;
    useEffect(() => {
        fetch(`https://tour-planner.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [email]);

    // DELETE
    const handelDeleteTravelPlace = id => {
        const url = `https://tour-planner.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <Container>
            <div className="m-5">
                <h2 className="text-center">Manage My Orders</h2>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Place Img</th>
                            <th>Place</th>
                            <th>Travel Cost</th>
                            <th>Coustomer Name and Email</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services?.map((service, index) => (
                                <tr key={service._id}>
                                    <td>{index}</td>
                                    <td><img width="50" height="30" src={service?.productimg} alt="" /></td>
                                    <td>{service?.product}</td>
                                    <td>{service?.productprice}</td>
                                    <td>{service?.name} <br /> {service?.email}</td>
                                    <td>{service?.address}</td>
                                    <td>{service?.status}</td>

                                    <button onClick={() => { if (window.confirm('Are you sure to Cancel this tour?')) { handelDeleteTravelPlace(service._id) }; }} className="btn btn-danger bg-primary">Cancel</button> <br />
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div >
        </Container>
    );
};

export default Myorder;