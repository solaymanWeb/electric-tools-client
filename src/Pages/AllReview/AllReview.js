import React, { useEffect, useState } from 'react';

const AllReview = () => {

    const [reviews, setReviews]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/allreview')
    .then(res => res.json())
    .then(data => setReviews(data))
},[])
    return (
        <div>
        <section className='bg-gray-50 '>
         <h4 className="text-green-500  font-bold text-2xl">Buyer all <span className='text-orange-500'>Review</span></h4>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-left py-8'>
            {
                reviews.map(review => <>
                <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-start" >
                    <h2 className="card-title">Name: {review.name}</h2>
                    <p>Start: {review.rating}</p>
                    <p>Review: {review.review}</p>
                </div>
                </div>
                </>)}    
        </div>
        </section>
        </div>
    );
};

export default AllReview;