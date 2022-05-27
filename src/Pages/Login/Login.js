import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    let signInError;

    const onSubmit = data => {
        // console.log(data.email, data.password)
        signInWithEmailAndPassword(data.email, data.password)
        
    };
    
    if( loading || gLoading){
        return <button className='btn loading'>Loading...</button>
    }
    if(gError || error){
         signInError = <p className='text-red-500'>{gError.message || error.message}</p>
    }
    let from = location.state?.from?.pathname || "/";
    if(user || gUser){
        navigate(from)
    }
    // if(user || gUser){
    //     console.log(user)
    // }
    
  
    return (
         <div className='flex justify-center'>
         <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
             <h2 class=" text-center text-2xl font-bold">Login</h2>
             <form onSubmit={handleSubmit(onSubmit)}>

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
            {signInError}
            </div>

            <button type='submit' class="btn w-full max-w-xs">Login</button>
             </form>   
                    
             <div class="divider">OR</div>
             <div>
                 <p> New user ? <Link className='text-green-500' to='/signup'>Create New Account</Link> </p>
             </div>
             <button onClick={() => signInWithGoogle()} className='btn btn-outline'> Continue with google </button>
                   
            </div>
        </div>
     </div>

    );
};

export default Login;