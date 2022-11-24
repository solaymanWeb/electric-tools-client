import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const onSubmit = data => {
        const url = `https://gentle-hamlet-86123.herokuapp.com/tools`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Item added Successfully !!')
                }
            })
        reset()
    };

    if (loading) {
        return <button className='btn btn-loading'>Loading...</button>
    }

    return (
        <div className='container mx-auto'>
            <h2 className=" text-center text-2xl pt-3 text-orange-500 font-bold">Add a  Item</h2>
            <div className="  mx-auto w-full bg-gray-100 shadow-xl">
                <div className="card-body   ">
                    <h2 className=" text-center text-2xl font-bold">Add a New Item</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full mx-auto   max-w-xs">
                            <label className="label ">
                                <span className="label-text text-lg">Product Name</span>
                            </label>
                            <input type="text"
                                placeholder="Type product name"
                                className="input input-bordered w-full h-8"  {...register("name")}
                            />
                        </div>
                        <div className="form-control w-full mx-auto  max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Available Product Quantity</span>
                            </label>
                            <input type="number"
                                placeholder="Type Available Product"
                                className="input input-bordered w-full h-8"  {...register("stock")}
                            />
                        </div>
                        <div className="form-control w-full mx-auto  max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Minimum Order Quantity</span>
                            </label>
                            <input type="number"
                                placeholder="Type minimum order quantity"
                                className="input input-bordered w-full h-8"  {...register("minimumOrder")}
                            />
                        </div>

                        <div className="form-control w-full mx-auto  max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Description</span>
                            </label>

                            <textarea type="text" name="" id="" cols="10" rows="3" className='textarea-bordered'
                                placeholder='Type product description'
                                {...register("discription")}
                            ></textarea>
                        </div>
                        <div className="form-control w-full  mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Per unit price</span>
                            </label>

                            <input type="number"
                                placeholder="Type per unit price" name=''
                                className="input input-bordered w-full h-8"  {...register("price")}
                            />

                        </div>
                        <div className="form-control w-full  mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg">Product image URL</span>
                            </label>

                            <input type="text"
                                placeholder="Type image URL" name='picture'
                                className="input input-bordered w-full h-8"  {...register("picture")}
                            />
                        </div>

                        <button type='submit' className="btn w-full mt-5 max-w-xs"> Add Product </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;