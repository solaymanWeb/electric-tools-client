import React from 'react';
import { useForm } from 'react-hook-form';

const MyReview = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url =`http://localhost:5000/review`
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
                alert('data send success')
            }
            console.log(data)
        })

    };
    return (
        <div>

            <div class="  mx-auto w-full ">
            <div class="card-body  ">
            <h2 class=" text-center text-2xl text-orange-500 font-bold">Give a review</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full mx-auto   max-w-xs">
           <label class="label">
               <span class="label-text">Full name</span>
           </label>
           <input type="text"
           placeholder="Your full name" 
           class="input input-bordered w-full h-8"  {...register("name")}
           />
           </div>

            <div class="form-control w-full mx-auto  max-w-xs">
           <label class="label">
               <span class="label-text">Rating</span>
           </label>
           <input type="number"
           placeholder="Type your rating 1 to 5" 
           class="input input-bordered w-full h-8"  {...register("rating")}
           />
           </div>

            <div class="form-control w-full mx-auto  max-w-xs">
           <label class="label">
               <span class="label-text"> Add a review</span>
           </label>

           <textarea type="text" placeholder='Type a review'   name="" id="" cols="10"  rows="3" className='textarea-bordered p-2'
           {...register("review")}
           ></textarea>
           </div>

           <button type='submit' class="btn w-full mt-5 max-w-xs"> submit </button>
            </form>   
           </div>
            </div>
        </div>
    );
};

export default MyReview;