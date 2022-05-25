import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;