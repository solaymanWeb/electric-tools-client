import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [tools, setTools] = useState([])
    const { register, reset, watch, handleSubmit } = useForm();

    // React hook form---->
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTools(data)
            })

    }, [])

    // console.log(tools)
    const quantity = watch('quantity')
    console.log(quantity)

    const onSubmit = data => {
        const url = `http://localhost:5000/purchase`
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
                    toast.success('Order succesfully')
                }
            })
        reset()
    };

    if (loading) {
        return <button className='btn btn-loading'>Loading...</button>
    }



    return (
        <section className='mt-8 grid grid-cols-2 gap-5 '>
            <div className="  bg-gray-100 shadow-xl">
                <figure className="px-3 pt-5 w-72 mx-auto">
                    <img src={tools.picture} alt="card" className="rounded-xl" />
                </figure>
                <div className="card-body text-left text-sm ">
                    <ul>
                        <li><span className='font-bold'>Name:</span> {tools.name}</li>
                        <li><span className='font-bold'>Description</span> {tools.discription}</li>
                        <li><span className='font-bold'>Available:</span> {tools.stock}</li>
                        <li><span className='font-bold'>Minimum order:</span> {tools.minimumOrder}</li>
                        <li><span className='font-bold'>Per unit Price: $</span>{tools.price}</li>
                    </ul>
                </div>
            </div>

            {/* Delivery Information */}

            <div className="  mx-auto w-full bg-gray-100 shadow-xl">
                <div className="card-body  ">
                    <h2 className=" text-center text-2xl font-bold">Purchase information</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full mx-auto   max-w-xs">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text"
                                value={user?.displayName || ''}
                                placeholder="Your full name"
                                className="input input-bordered w-full h-8"  {...register("name")}
                            />
                        </div>
                        <div className="form-control w-full mx-auto  max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input type="number"
                                placeholder="Your phone number"
                                className="input input-bordered w-full h-8"  {...register("phone")}
                            />
                        </div>
                        <div className="form-control w-full mx-auto  max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                value={user?.email || ''}
                                placeholder="Your full email"
                                className="input input-bordered w-full h-8"  {...register("email")}
                            />
                        </div>
                        <div className="form-control w-full mx-auto  max-w-xs">
                            <label className="label">
                                <span className="label-text">Full Address</span>
                            </label>

                            <textarea type="text" name="" id="" cols="10" rows="3" className='textarea-bordered'
                                {...register("address")}
                            ></textarea>
                        </div>
                        <div className="form-control w-full  mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>

                            <input type="text"
                                value={tools?.name}
                                readOnly
                                placeholder="Your product name" name=''
                                className="input input-bordered w-full h-8"  {...register("productName")}
                            />

                        </div>
                        <div className="form-control w-full  mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>

                            <input type="number"
                                placeholder="Your product quantity" name='quantity'
                                className="input input-bordered w-full h-8"  {...register("quantity")}
                            />
                        </div>

                        {
                            quantity > parseInt(tools?.stock )|| quantity < parseInt(tools?.minimumOrder) ? <button type='submit' className="btn w-full mt-5 max-w-xs" disabled>  buy now </button> : <button type='submit' className="btn w-full mt-5 max-w-xs"> buy now </button>}

                    </form>
                </div>
            </div>


        </section>
    );
};

export default Purchase;