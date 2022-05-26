import React from 'react';
import myImage from '../Assest/solayman2021.jpg'

const Portfolio = () => {
    return (
        <div className='mt-8'>
            <div class="hero shadow-xl">
            <div class="hero-content flex-col gap-5 lg:flex-row">
                <img src={myImage} class="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" alt='my_image' />
                <div className='text-left lg:pl-16'>
                <h1 class="text-2xl text-center py-5 font-bold">About us</h1>
                <h5>Name: Md Solayman islam</h5>
                <h5>Email: solaymanweb27@gmail.com</h5>
                <h3 className='pt-4 font-bold text-xl'>Education & Qualification</h3>
                <p class="">Diploma in computer science & Engineering. seven semester running student </p>
                <h3 className='pt-4 font-bold text-xl'> My skill </h3>
                <ol type='i'>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Mongodb</li>
                </ol>
                <h3 className='pt-4 font-bold text-xl'> Live project </h3>
                <div className='pt-2'>
                
                <button class="btn btn-outline btn-primary">Project-1</button>
                <button class="btn btn-outline btn-primary mx-2">Project-2</button>
                <button class="btn btn-outline btn-primary">Project-3</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;