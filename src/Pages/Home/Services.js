import React, { useEffect, useState } from 'react';


const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className=' mt-72'>
            {/* DIVIDER */}
            <div class="flex flex-col w-full border-opacity-50">
                 <div class="divider text-green-500 font-bold text-3xl">Inventory</div>
             </div>

             {/* SERVICES  */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>  
       {
           services.map(service=>        
              <div class="card  bg-base-100 shadow-xl">
            <figure className='p-10 w-4/5 h-4/5'>
            <img w-full src={service.picture} alt="Shoes" />
            </figure>
           <div class="card-body text-left ">
               <ul>
                   <li><span className='font-bold'>Name:</span> {service.name}</li>
                   <li><span className='font-bold'>Description</span> {service.discription}</li>
                   <li><span className='font-bold'>Available:</span> {service.stock}</li>
                   <li><span className='font-bold'>Minimum order:</span> {service.minimumOrder}</li>
                   <li><span className='font-bold'>Per unit Price: $</span>{service.price}</li>
               </ul>
             {/* <h6>Name: </h6>
             <p>Description: </p>
             <p>Available: </p>
             <p>Minimum order: </p>
             <p>Per unit Price: </p> */}
             <div class="card-actions justify-start">
             <button class="btn btn-primary">purchase</button>
             </div>
           </div>
           </div>
           )
       }
        </div>
        </section>
    );
};

export default Services;