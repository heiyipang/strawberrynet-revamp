import React from "react";
import { useForm } from "react-hook-form";


function Login() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  


    return (
        <>
            <header style={{ textAlign: 'center', backgroundColor: '#f8e4e4' }}>
                <small style={{ fontWeight: 'bold', backgroundColor: '#f8e4e4' }}>Don’t miss Free Shipping + 4% Point Rewards on your first order! </small>
                <small style={{ fontWeight: 'bold', backgroundColor: '#f8e4e4' }} > Sign up now{">"}{">"} </small>
            </header>
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>Strawberrynet - Logo 
            <div>EN </div>
            </div>
            <div>LOGIN IN OR CREATE ACCOUNT</div>
            {/* <div styles={{float:'right'}}>Sign up and get your coupon</div> */}
            <small>{"<"}Back to shopping</small>

            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
            
        </>
    );
}

export default Login1;

