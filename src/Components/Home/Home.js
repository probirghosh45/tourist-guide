import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import KeepGrowing from '../KeepGrowing/KeepGrowing';
import NewsLatter from '../NewsLatter/NewsLatter';
import OurMenus from '../OurMenus/OurMenus';
import OurServices from '../OurServices/OurServices';
import Review from '../Review/Review';
import WhyBookingUs from '../WhyBookingUs/WhyBookingUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <OurServices></OurServices>
            <OurMenus></OurMenus>
            <Destination></Destination>
            <WhyBookingUs></WhyBookingUs>
            <KeepGrowing></KeepGrowing>
            <NewsLatter></NewsLatter>
            <Review></Review>
        </div>
    );
};

export default Home;