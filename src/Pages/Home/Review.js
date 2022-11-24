import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
const [reviews, setReviews]=useState([]);
useEffect(()=>{
    fetch('https://gentle-hamlet-86123.herokuapp.com/review')
    .then(res => res.json())
    .then(data => setReviews(data))
},[])
    return (
        <section className='bg-gray-50 container mx-auto '>
             <h4 className="text-green-500  font-bold text-2xl">Buyer <span className='text-orange-500'>Review</span></h4>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-left py-8'>
            {
                reviews.map((review, index) => <>
                
                <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body text-start" >
                    <h2 className="card-title">Name: {review.name}</h2>
                    <p>Rating: {review.rating}</p>
                    <p>Review: {review.review}</p>
                </div>
                </div>
                </>)
            }    
        </div>
        <div className=' flex justify-end pt-5'>
        <Link to='/allreview'><button className="btn  btn-primary ">See more review</button></Link>
         </div>
        </section>
    );
};

export default Review;

