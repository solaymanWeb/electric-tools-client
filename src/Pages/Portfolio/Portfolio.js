import React from 'react';
import myImage from '../Assest/solayman2021.jpg'

const Portfolio = () => {
    return (
        <div className='mt-8'>
            <div className="hero shadow-xl">
            <div className="hero-content flex-col gap-5 lg:flex-row">
                <img src={myImage} className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" alt='my_image' />
                <div className='text-left lg:pl-16'>
                <h1 className="text-2xl text-center py-5 font-bold">About us</h1>
                <h5>Name: Md Solayman islam</h5>
                <h5>Email: solaymanweb27@gmail.com</h5>
                <h3 className='pt-4 font-bold text-xl'>Education & Qualification</h3>
                <p className="">Diploma in computer science & Engineering. seven semester running student </p>
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
                
                <button className="btn btn-outline btn-primary">Project-1</button>
                <button className="btn btn-outline btn-primary mx-2">Project-2</button>
                <button className="btn btn-outline btn-primary">Project-3</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;