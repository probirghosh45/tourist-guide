import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import Culture from '../Culture/Culture';
import Destination from '../Destination/Destination';
import Hotel from '../Hotel/Hotel';
import KeepGrowing from '../KeepGrowing/KeepGrowing';
import NewsLatter from '../NewsLatter/NewsLatter';
import OurMenus from '../OurMenus/OurMenus';
import OurServices from '../OurServices/OurServices';
import Review from '../Review/Review';
import WhyBookingUs from '../WhyBookingUs/WhyBookingUs';
import RequestQoute from '../RequestQoute/RequestQoute';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <OurMenus></OurMenus>
            <Hotel></Hotel>
            <Destination></Destination>
            <WhyBookingUs></WhyBookingUs>
            <Culture></Culture>
            <RequestQoute></RequestQoute>
            <KeepGrowing></KeepGrowing>
            <Review></Review>
            <NewsLatter></NewsLatter>
            <About></About>
        </div>
    );
};

export default Home;