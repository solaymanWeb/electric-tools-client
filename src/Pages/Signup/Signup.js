import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate=useNavigate()


      if(loading || updating){
          return <button className='btn loading'>Loading...</button>
      }
      let createError ;
      if(error || updateError){
        createError = <p className='text-red-500'>{error.message || updateError.message}</p>
      }

    const onSubmit =async (data) => {
        
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/')
        
    };
    return (
        <div className='flex justify-center'>
        <div class="card w-96 bg-base-100 shadow-xl">
       <div class="card-body">
            <h2 class=" text-center text-2xl font-bold">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
           <label class="label">
               <span class="label-text">Full name</span>
           </label>
           <input type="text" 
           placeholder="Your full name" 
           class="input input-bordered w-full max-w-xs" 
           {...register("name", { 
               required: {
                   value: true,
                   message:'Name is requird'
               }
            })}
           />
           <label class="label">
           {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}  
           </label>
           </div>

            <div class="form-control w-full max-w-xs">
           <label class="label">
               <span class="label-text">Email</span>
           </label>
           <input type="email" 
           placeholder="Your email" 
           class="input input-bordered w-full max-w-xs" 
           {...register("email", { 
               required: {
                   value: true,
                   message:'Email is requird'
               }
            })}
           />
           <label class="label">
           {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}  
           </label>
           </div>

            <div class="form-control w-full max-w-xs">
           <label class="label">
               <span class="label-text">Password</span>
           </label>
           <input type="Password" 
           placeholder="Your password" 
           class="input input-bordered w-full max-w-xs" 
           {...register("password", { 
               required: {
                   value: true,
                   message:'Email is password'
               },
               minLength:{
                   value:6,
                   message:'must be 6 charecter to longer'

               }
            })}
           />
           <label class="label">
           {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}  

           {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}  
           </label>
           {createError}
           </div>

           <button type='submit' class="btn w-full max-w-xs"> Resister </button>
            </form>   
                   
            <div class="divider">OR</div>
            <div>
                <p>Alredy have an account? <Link  className='text-green-500' to='/login'>Please login</Link> </p>
            </div>

           </div>
       </div>
    </div>
    );
};

export default Signup;