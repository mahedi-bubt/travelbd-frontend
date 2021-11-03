import React from 'react';
import { Table } from 'react-bootstrap';
import usePlaceOrders from '../../hooks/usePlaceOrders';

const AllOrders = () => {
    const [allOrders] = usePlaceOrders();
    return (
        <div>
            <h2>All Orders</h2>
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
                    <tr>
                        {
                            allOrders.map(orders =>
                                <tr>
                                    <td>{orders.personname} ''</td>
                                    <td>{orders.email} ''</td>
                                    <td>{orders.packagename} ''</td>
                                    <td>{orders.packageprice} ''</td>
                                    <td>{orders.phonenumber} ''</td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )
                        }
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default AllOrders;