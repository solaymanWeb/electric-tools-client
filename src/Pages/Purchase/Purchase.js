import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const {id} = useParams();
    const [tools, setTools]=useState([])
    // React hook form---->
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    useEffect(()=>{
        fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json())
        .then(data => setTools(data))
        
    },[])
    if(loading){
        return <button className='btn btn-loading'>Loading...</button>
    }

    // handle quantity
    const handelChange=event=>{
       
        console.log(event.target.value)
        console.log('hello')
    }
   

    return (
        <section className='mt-8 grid grid-cols-2 gap-5 '> 
            <div class="  bg-gray-100 shadow-xl">
            <figure class="px-3 pt-5 w-72 mx-auto">
                <img src={tools.picture} alt="card" class="rounded-xl" />
            </figure>
            <div class="card-body text-left text-sm ">
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

            <div class="  mx-auto w-full bg-gray-100 shadow-xl">
            <div class="card-body  ">
            <h2 class=" text-center text-2xl font-bold">Purchase information</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full mx-auto   max-w-xs">
           <label class="label">
               <span class="label-text">Full name</span>
           </label>
           <input type="text"
           value={user?.displayName || ''}
           placeholder="Your full name" 
           class="input input-bordered w-full h-8"  {...register("name")}
           />
           </div>
            <div class="form-control w-full mx-auto  max-w-xs">
           <label class="label">
               <span class="label-text">Phone number</span>
           </label>
           <input type="number"
           placeholder="Your phone number" 
           class="input input-bordered w-full h-8"  {...register("phone")}
           />
           </div>
            <div class="form-control w-full mx-auto  max-w-xs">
           <label class="label">
               <span class="label-text">Email</span>
           </label>
           <input type="email"
           value={user?.email || ''}
           placeholder="Your full email" 
           class="input input-bordered w-full h-8"  {...register("email")}
           />
           </div>
            <div class="form-control w-full mx-auto  max-w-xs">
           <label class="label">
               <span class="label-text">Full Address</span>
           </label>

           <textarea type="text"  name="" id="" cols="10"  rows="3" className='textarea-bordered'
           {...register("address")}
           ></textarea>
           </div>
            <div class="form-control w-full  mx-auto max-w-xs">
           <label class="label">
               <span class="label-text">Product Quantity</span>
           </label>

           <input type="number" onChange={handelChange}
           placeholder="Your product quantity" name='quantity'
           class="input input-bordered w-full h-8"  {...register("quantity")}
           />

           </div>

           <button type='submit' class="btn w-full mt-5 max-w-xs"> buy now </button>
            </form>   
           </div>
            </div>
        
        
        </section>
    );
};

export default Purchase;