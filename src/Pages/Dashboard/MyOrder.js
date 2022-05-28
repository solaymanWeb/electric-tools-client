import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const MyOrder = () => {
    const [user, loading, error] = useAuthState(auth);
    const [order, setOrder]= useState([]);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
            .then('res => res.json()')
            .then(data => console.log(data.email))
        }
    },[user])
    return (
        <div>
            <h2 class=" text-center text-2xl pt-3 text-orange-500 font-bold">My Order</h2>
            <div class="overflow-x-auto">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrder;