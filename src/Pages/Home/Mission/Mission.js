import React from 'react';
import './Mission.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Mission = () => {
    return (
        <div className="">
            <div className="container-fluid mission-section mt-5">
                <div className="row d-flex justify-content-center align-items-center py-5 my-5">
                    <div className="col-md-6 my-5 py-5">
                        <h1 className="text-light fw-bold ">Our mission
                            and vision</h1>
                        <span className="text-white mt-3 text-center mb-5">The Biker Marathon initiative materialized through the support of marathoners <br /> and biking enthusiasts, international race directors and volunteers who are <br /> determined to bring peace and goodwill to the world through our favorite activity. <br /> Stay fit and healthy with our programs. If you feel that you are ready to change <br /> your lifestyle, <span style={{ fontSize: "46px" }}
                            className="fw-bold text-light"> join us! <FontAwesomeIcon style={{ fontSize: '24px'}} icon={faNetworkWired} /></span>  </span>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Mission;