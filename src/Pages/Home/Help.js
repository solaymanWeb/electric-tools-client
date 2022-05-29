import React from 'react';

const Help = () => {
    return (
<section className='py-16'>
    <h4 className='font-bold text-2xl pb-12'>How can we help you ?</h4>
<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 '>
     <div className="card bg-gray-50 py-5  text-black">
       <figure className=''>
       <img className='w-16 h-16' src="https://cdn.makitatools.com/apps/wms/home/images/help/contact-us.png" alt="" />
       </figure>
        <div className="card-body items-center text-xl text-center">
            <h2 className="card-title">CONTACT US</h2>
            <p>Have a question? Need help?
            Click here to contact us.</p>
        </div>
        </div>
     <div className="card bg-gray-50 py-5 border-x-4">
       <figure className=''>
       <img className='w-16 h-16' src="https://cdn.makitatools.com/apps/wms/home//images/help/warranty.png" alt="" />
       </figure>
        <div className="card-body items-center text-xl text-center">
            <h2 className="card-title">WARRANTY</h2>
            <p>Questions about the warranty of your product?
Learn more on our Warranty page.</p>
        </div>
        </div>
     <div className="card bg-gray-50 py-5 ">
       <figure className=''>
       <img className='w-16 h-16' src="https://cdn.makitatools.com/apps/wms/home//images/help/service.png" alt="" />
       </figure>
        <div className="card-body items-center text-xl text-center">
            <h2 className="card-title">SERVICE</h2>
            <p>Have a tool that needs to be serviced?
Weill help you get back to work.</p>
        </div>
        </div>
     </div>
</section>
    );
};

export default Help;