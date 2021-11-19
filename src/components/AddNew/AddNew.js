import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNew.css'

const AddNew = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://tour-planner.herokuapp.com/products', data)
            .then(res => {
                if (res.data) {
                    alert('added successfully');
                    reset();
                }
            })

    }

    return (
        <div className="add-service m-5">
            <h2 className="text-center">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Place Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input  type="submit" />
            </form>
        </div>
    );
};

export default AddNew;