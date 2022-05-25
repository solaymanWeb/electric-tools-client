import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Help from './Help';
import Offer from './Offer';
import Review from './Review';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Offer></Offer>
            <Help></Help>
        </div>
    );
};

export default Home;