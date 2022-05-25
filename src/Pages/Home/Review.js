import React from 'react';

const Review = () => {
    const reviewsText =[
        {
            name:'solayman',
            star: 5,
            reviews: "this is a good produc"
        },
        {
            name:'saiful',
            star: 5,
            reviews: "this is a good produc"
        },
        {
            name:'kalam',
            star: 5,
            reviews: "this is a good produc"
        },
    ]
    return (
        <section>
             <h4 class="text-green-500 font-bold text-2xl">Buyer <span className='text-orange-500'>Review</span></h4>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-left'>
            {
                reviewsText.map(review => <>
                <div class="card bg-base-100 shadow-xl">
                <div class="card-body text-start" >
                    <h2 class="card-title">Name: {review.name}</h2>
                    <p>Start: {review.star}</p>
                    <p>Review: {review.reviews}</p>
                </div>
                </div>
                </>)
            }
        </div>
        </section>
    );
};

export default Review;