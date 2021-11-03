import React from 'react';
import './AddPackages.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddPackages = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Added Succesfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-packages">
            <h2>Add Your Packages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Enter Package Name" />
                <input {...register("duration")} placeholder="Enter Tour Duration" />
                <input type="number" {...register("price")} placeholder="Enter Price" />
                <textarea {...register("description")} placeholder="Enter Details Here" />
                <input {...register("imageurl")} placeholder="Enter Image Url" />

                <input type="submit" value="Add Package" />
            </form>
        </div>
    );
};

export default AddPackages;