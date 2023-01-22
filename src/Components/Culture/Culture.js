import React from 'react';
import { Container } from 'react-bootstrap';
import Contact from '../ContactUs/Contact';
import './Culture.css';

const Culture = () => {
    return ( 
        <>
            <Container>
            <h1 className='text-center hotel1'>Culture of Bangaladesh</h1>
            <hr />
            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        Bangladeshi men wear lungi as casual wear (in rural areas). Due to the British influence during colonization, shirt-pant and suits are also very common. Bangladeshi women traditionally wear shari and young females are also often seen in shalwar kameez. It is worn during festive occasions, celebrations and weddings.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src="https://www.shutterstock.com/shutterstock/photos/2188528733/display_1500/stock-vector-crowd-of-people-from-different-states-parts-or-region-of-india-indian-people-2188528733.jpg" alt="" />
                </div>
            </div>
            <hr />

            <div className="mainSection">


                <div className="imageContainer">
                    <img src="https://media.npr.org/assets/img/2018/02/16/chinese-newyear_custom-d962d5699444165c9b708d2eb7b13a197d945a6b-s1100-c50.jpg" alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        The turning of the calendar in Bangladesh from the old year to the new is as much a purification ritual as it is an artistic one and an opportunity for usto experience a New Year's celebration like none other. The tradition of the old year is a custom of symbolically ending the old year through many traditional celebration events. I would like to say in the words of Anton K. Kressnig, "Let our New Year's resolution be this: we will be there for one another as fellow members of humanity, in the finest sense of the word."And navigating the streets of country on the Bengali New Year's celebrations also becomes a festive exercise.
                    </p>
                </div>
            </div>
            <hr />

            <div className="mainSection">

                <div className="contentBox">
                    <p>
                        Bangladesh is a predominantly Muslim country, and Islam’s adherents in Bangladesh celebrate the joyous festival of the two Eids, Eid-ul-Fitr, and Eid-ul-Azha, the month of Ramadan, Shab-e-Qadr, Shab-e-Barat etc. Hindus in Bangladesh celebrate Durga Puja,  Kali Puja and Janmastami. The Buddhists celebrate Buddho Purnima and the Christians Christmas. These are just a few of the religious festivals and feasts that Bangladeshis celebrate in their day to day life. National occasions also mark Bangladeshi life, and these include Independence Day, Victory Day, and the historic Language Martyr’s Day.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src="https://c8.alamy.com/comp/2G4GYT8/ahmedabad-tribal-museum-rabari-tribe-traditional-mud-house-display-showing-their-tribal-lifestyle-gujarat-india-2G4GYT8.jpg" alt="" />
                </div>
            </div>
            <hr />

            <div className="mainSection">

                <div className="imageContainer">
                    <img src="https://media.istockphoto.com/id/1298145923/photo/african-food-on-the-ground-in-african-village-house-people-put-food-on-the-plate-visible.jpg?s=612x612&w=0&k=20&c=Go9issmK-BTRfHS0hlEi42ClAU88ModT8tZVO0-H5R8=" alt="" />
                </div>
                <div className="contentBox">
                    <p>
                        Traditional fast food is available at stalls in different spots of the area. From noon to evening, different music bands come to sing in the concert stage of the area. Youth with their friends come to the concert and celebrate with singing and dancing along with the famous singers of the nation.
                    </p>
                </div>
            </div>
            <hr />

            </Container>

        </>
    );
};

export default Culture;