import React from 'react';
import myImage from '../Assest/solayman2021.jpg';

const Portfolio = () => {
    return (
        <div className='my-8'>
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


                <a href="https://fridge-store-house.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="btn btn-outline btn-primary mx-2">Project-1</button></a>

                <a href="https://good-health-good-life.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="btn btn-outline btn-primary mx-2">Project-2</button></a>

                <a href="https://fashion-store-9.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="btn btn-outline btn-primary mx-2">Project-3</button></a>
               
               
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;