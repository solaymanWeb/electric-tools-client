import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCreateEmailPassToken from '../../hooks/useCreateEmailPassToken';



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
      const [createUser]= useCreateEmailPassToken(gUser)
      
    let signInError;

    const onSubmit = data => {
        // console.log(data.email, data.password)
        signInWithEmailAndPassword(data.email, data.password)
        
    };
    
    if( loading || gLoading){
        return <button className='btn loading'>Loading...</button>
    }
    if(gError || error){
         signInError = <p className='text-red-500'>{gError?.message || error?.message}</p>
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
         <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
             <h2 className=" text-center text-2xl font-bold">Login</h2>
             <form onSubmit={handleSubmit(onSubmit)}>

             <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" 
            placeholder="Your email" 
            className="input input-bordered w-full max-w-xs" 
            {...register("email", { 
                required: {
                    value: true,
                    message:'Email is requird'
                }
             })}
            />
            <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}  
            </label>
            </div>

             <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="Password" 
            placeholder="Your password" 
            className="input input-bordered w-full max-w-xs" 
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
            <label className="label">
            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}  

            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}  
            </label>
            {signInError}
            </div>

            <button type='submit' className="btn w-full max-w-xs">Login</button>
             </form>   
                    
             <div className="divider">OR</div>
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