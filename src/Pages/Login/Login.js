import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type='email' {...register("email")} />
      <input type='password' {...register("password")} />

      <input type="submit" />
    </form>
        </div>
    );
};

export default Login;