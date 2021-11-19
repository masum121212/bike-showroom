import React from 'react';
import './About.css';
import about from '../../../images/about.jpg';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div className="container my-5 pt-5 about-container">
            <div className="row mx-auto">

                <div className="col-md-6 col-sm-12 py-5">
                    <div className="about-img">
                        <img className="img-fluid w-75" src={about} alt="" />
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 py-5 align-self-center">
                    <div className="about-info">
                        <Zoom right cascade>
                            <h1 className="fw-bold text-primary">About Our Company</h1>
                        </Zoom>

                        <p>Hero Moto Corp is the largest Bike manufacturing company in the world and also in India. It was founded in the year 1984 with joint ventures with hero cycles. Hero collaborated with the Japanese brand Honda to develop two-wheelers for the Indian market</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;