import React from 'react';
import { Table } from 'react-bootstrap';
import usePlaceOrders from '../../hooks/usePlaceOrders';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {

    const [myorders] = usePlaceOrders();
    console.log(myorders);
    return (
        <div>
            <h2>My Orders</h2>
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
                            myorders.map(orders => <MyOrder
                                key={orders._id}
                                order={orders}
                            ></MyOrder>)
                        }
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;