import React from 'react';
import offer from '../Assest/offer.webp'

const Offer = () => {
    return (
        <section className='pt-20'>
            <h4 class="text-green-500 font-bold text-2xl pb-10">Best Offer <span className='text-orange-500'>For This Month</span></h4>
         <div>
            <img src={offer} alt="" />
        </div>
        </section>
    );
};

export default Offer;