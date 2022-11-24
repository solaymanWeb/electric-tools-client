import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Allproduct.css'



const Services = () => {
    const [services, setServices]=useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('https://gentle-hamlet-86123.herokuapp.com/tools')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])


    const handlePurchase =(id)=>{
        console.log(id)
        if(id){
            navigate(`/purchase/${id}`)
        }
       
    } 
    return (
        <section className=' container mx-auto md:mt-8 lg:mt-12 text-2xl'>
            {/* DIVIDER */}
            <div className="flex py-10 flex-col w-full border-opacity-50">
                 <div className="divider text-green-500 font-bold text-3xl">Inventory</div>
             </div>

             {/* SERVICES  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>  
       {
           services.map((service, index )=>    
              
              <div className="card  bg-base-100 shadow-xl" key={index}  >
            <figure className='p-5 w-50 card-img text-center h-4/5'>
            <img w-50 src={service.picture} alt="pictur" />
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
             <button onClick={()=>handlePurchase(service._id)} className="btn btn-primary">purchase</button>
             </div>
           </div>
           </div>
           )
       }
        </div>

        <div className="card-actions pt-8 justify-end">
             <Link to='/allproduct'><button className="btn btn-primary">see more product</button></Link>
             </div>
        </section>
    );
};

export default Services;