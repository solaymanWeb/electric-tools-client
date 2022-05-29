import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const ManageProducts = () => {
    const [user, loading, error] = useAuthState(auth);
    const [services, setServices] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/alltools')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handleDelete = (id) => {
        const proced = window.confirm('are you sure DELETE')
        if (proced) {
            const url = `http://localhost:5000/alltools/${id}`
            fetch(url, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
               const remainder = services.filter(a => a._id !== id)
               setServices(remainder)
              
            })

        }

    }


    if (loading) {
        return <button className='btn btn-loading'>Loading...</button>
    }

    return (
        <section className='px-5'>
            {/* DIVIDER */}
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider pb-8 text-green-500 font-bold text-3xl">Manage products</div>
            </div>

            {/* Manage Products */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service =>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className='p-10  h-4/5'>
                                <img w-full src={service.picture} alt="Shoes" />
                            </figure>
                            <div className="card-body pt-0 text-left text-sm ">
                                <ul>
                                    <li><span className='font-bold'>Name:</span> {service.name}</li>
                                    <li><span className='font-bold'>Description</span> {service.discription}</li>
                                    <li><span className='font-bold'>Available:</span> {service.stock}</li>
                                    <li><span className='font-bold'>Minimum order:</span> {service.minimumOrder}</li>
                                    <li><span className='font-bold'>Per unit Price: $</span>{service.price}</li>
                                </ul>
                                <div className="card-actions justify-start">
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default ManageProducts;