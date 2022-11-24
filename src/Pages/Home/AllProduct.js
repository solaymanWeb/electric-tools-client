import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Allproduct.css'


const AllProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    const [services, setServices] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://gentle-hamlet-86123.herokuapp.com/alltools')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handlePurchase = (id) => {
        console.log(id)
        if (id) {
            navigate(`/purchase/${id}`)
        }

    }

    if (loading) {
        return <button className='btn btn-loading'>Loading...</button>
    }
    return (
        <section className='container mx-auto md:mt-8 lg:mt-12 text-xl'>
            {/* DIVIDER */}
            <div className=" border-opacity-50">
                <div className="divider py-16 text-green-500 font-bold text-3xl">Our all product</div>
            </div>

            {/* All product  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xl '>
                {
                    services.map(service =>
                        <div className=" p-4 services-card">
                            <div className="card bg-base-500 container mx-auto shadow-xl">
                                <figure className='p-5 all-card-img'>
                                    <img w-full src={service.picture} alt="Shoes" />
                                </figure>
                                <div className="card-body pt-0 text-left text-xl ">
                                    <ul>
                                        <li><span className='font-bold'>Name:</span> {service.name}</li>
                                        <li><span className='font-bold'>Description</span> {service.discription}</li>
                                        <li><span className='font-bold'>Available:</span> {service.stock}</li>
                                        <li><span className='font-bold'>Minimum order:</span> {service.minimumOrder}</li>
                                        <li><span className='font-bold'>Per unit Price: $</span>{service.price}</li>
                                    </ul>
                                    <div className="card-actions justify-start">
                                        <button onClick={() => handlePurchase(service._id)} className="btn btn-primary">purchase</button>
                                    </div>
                                </div>
                            </div>
                        </div>)}
            </div>
        </section>
    );
};

export default AllProduct;