import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './OrderPlaced.css';

const OrderPlaced = () => {
    const { user } = useAuth();
    const { orderId } = useParams();
    const [packagedata, setPackageData] = useState([]);

    console.log(orderId);

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${orderId}`)
            .then(res => res.json())
            .then(data => setPackageData(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/placeorder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed Succesfully');
                    reset();
                }
            })
    }
    return (
        <div className="place-order">
            <h2>Please Place Your Order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("personname")} value={user?.displayName} />
                <input {...register("email")} value={user?.email} />
                <input {...register("packagename")} value={packagedata?.name} />
                <input type="number" {...register("packageprice")} value={packagedata?.price} />
                <input type="number" {...register("phonenumber")} placeholder="Enter Your Phone Number" />
                <textarea {...register("address")} placeholder="Enter Address Here" />

                <input type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default OrderPlaced;