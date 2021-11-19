import React from 'react';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="row d-flex justify-content-center align-items-center banner">
                <div className="col-md-6">
                    <Slide left>
                        <h1 className="text-primary">Experience New Ride </h1>

                        <p className="text-white mt-3 text-center mb-5">Motorcycle design varies greatly to suit a range of different purposes: <strong> long-distance travel, commuting, cruising, sport (including racing), and off-road riding.</strong></p>
                        <NavLink to="/products" className="p-2 w-50 btn btn-outline-primary">Explore Now</NavLink>
                    </Slide>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Banner;