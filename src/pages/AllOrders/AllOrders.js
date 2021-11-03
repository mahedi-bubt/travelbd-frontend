import React from 'react';
import { Container, Table } from 'react-bootstrap';
import usePlaceOrders from '../../hooks/usePlaceOrders';

const AllOrders = () => {
    const [allOrders] = usePlaceOrders();

    const handleDelete = id => {
        const url = `https://aqueous-reaches-58304.herokuapp.com/placeorder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('are you sure, Delete this data')
                }
            })
    }
    return (
        <Container>
            <div>
                <h2 style={{ margin: "50px" }}>All Orders</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Package Name</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(orders =>
                                <tr>
                                    <td>{orders.personname} ''</td>
                                    <td>{orders.email} ''</td>
                                    <td>{orders.packagename} ''</td>
                                    <td>{orders.packageprice} ''</td>
                                    <td>{orders.phonenumber} ''</td>
                                    <td><button onClick={() => handleDelete(orders._id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </div>
        </Container>
    );
};

export default AllOrders;