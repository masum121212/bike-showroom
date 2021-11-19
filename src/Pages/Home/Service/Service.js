import React from 'react';
import './Service.css';
import service1 from '../../../images/service/service-icon-1.png';
import service2 from '../../../images/service/service-icon-2.png';
import service4 from '../../../images/service/service-icon-4.png';
import service5 from '../../../images/service/service-icon-5.png';


const Service = () => {
    return (
        <div className="container service-container">
            <div className="row mx-auto bg-primary">

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service1} alt="" />
                    </div>

                    <div className="service-info mb-5 pt-3">

                        <h4 className="text-white fw-bold">Spokes</h4>
                        <span className="text-white">What are spokes used for?
                            Spokes are the connecting rods between the bicycle hub and the rim. Their main purpose is to transfer </span>


                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service2} alt="" />
                    </div>
                    <div className="service-info mb-5 pt-3">

                        <h4 className="text-white fw-bold">Rim</h4>
                        <span className="text-white"> the outer often curved or circular edge or border of something. 2a : the outer part of a wheel joined to the hub usually by spokes</span>

                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service4} alt="" />
                    </div>
                    <div className="service-info mb-5 pt-3">

                        <h4 className="text-white fw-bold">Hub</h4>
                        <span className="text-white">The hub is the central part of your bike's wheels (front and rear), which connects to the wheel's rim via the spokes and through </span>

                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service5} alt="" />
                    </div>
                    <div className="service-info mb-5 pt-3">

                        <h4 className="text-white fw-bold">Engine</h4>
                        <span className="text-white">Under Irish law, the Garda Press Office says the addition of an engine makes the bike a “mechanically propelled vehicle”</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;