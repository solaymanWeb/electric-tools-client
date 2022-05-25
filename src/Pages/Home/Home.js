import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;