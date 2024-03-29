import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Dashboard.css'

const MyReview = () => {


    const { register, watch, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        const url =`https://gentle-hamlet-86123.herokuapp.com/review`
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                toast.success("successfully!! review added")
            }
        })
        reset()

    };
    const rating= watch('rating');

    return (
        <div>

            <div className="  mx-auto  ">
            <div className="card-body card-manage ">
            <h2 className=" text-center text-2xl text-orange-500 font-bold">Give a review</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mx-auto   max-w-xs">
           <label className="label">
               <span className="label-text text-lg">Full name</span>
           </label>
           <input type="text"
           placeholder="Your full name" 
           className="input input-bordered w-full"  {...register("name")}
           />
           </div>

            <div className="form-control w-full mx-auto  max-w-xs">
           <label className="label">
               <span className="label-text text-lg">Rating</span>
           </label>
           <input type="number"
           placeholder="Type your rating 1 to 5" 
           className="input input-bordered w-full"  {...register("rating")}
           />
           </div>

            <div className="form-control w-full mx-auto  max-w-xs">
           <label className="label">
               <span className="label-text text-lg"> Add a review</span>
           </label>

           <textarea type="text" placeholder='Type a review'    name="" id="" cols="10"  rows="3" className='textarea-bordered p-2'
           {...register("review")}
           ></textarea>
           </div>
            {rating <= 0 || rating>=6 ? <button type='submit' className="btn w-full mt-5 max-w-xs" disabled> submit </button> : <button type='submit' className="btn w-full mt-5 max-w-xs"> submit </button>}
           
            </form>   
           </div>
            </div>
        </div>
    );
};

export default MyReview;