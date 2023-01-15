import React from 'react';
import './NewsLatter.css';

const NewsLatter = () => {
    return (
        <div>
            <section className="mt-5 news-latter">
            <h1 className="text-center pt-5 pb-3" style={{color:"crimson"}} >OUR TOURS LETTER</h1>

            <div className="text-center pb-3">
                <h5 className="text-secondary">Enter Your Email Address To Join Our Mailing List And <br /> Keep Yourself Update.</h5>
            </div>

            <form action="" className="w-100 subscribe-form">
                <input type="email" className="form-control text-center w-50 py-3 m-auto" placeholder="Enter your E-mail" />
                <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-custom px-5 py-3">SUBSCRIBE</button>
                </div>
            </form>
        </section>
        </div>
    );
};

export default NewsLatter;