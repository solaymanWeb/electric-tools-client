import React from 'react';
import banner2 from '../Assest/banner2.png'


const Banner = () => {
    return (
        <section>
            <div class="hero-content ">
                <div class=" h-48  w-100 ">
                 <img w-full  src={banner2} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;