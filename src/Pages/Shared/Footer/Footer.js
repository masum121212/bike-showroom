import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsappSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-primary text-light">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-start">Useful links</h3>
                        <p className="text-start footer-menu"> <FontAwesomeIcon icon={faChevronRight} /> About us</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Our community</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Local events</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Privacy policy</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Service plus</p>
                    </div>

                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-start">Our shop</h3>
                        <p className="text-start footer-menu"> <FontAwesomeIcon icon={faChevronRight} /> Bikes and parts</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Clothing</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Bikes for rent</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Booking form</p>
                    </div>

                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-start">Support</h3>
                        <p className="text-start footer-menu"> <FontAwesomeIcon icon={faChevronRight} /> Customer Support</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Delivery Supports</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Terms and Conditions</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Contact Channels</p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> FAQs</p>
                    </div>
                    
                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-start">Connect Us</h3>
                        <p className="text-start footer-menu"> <FontAwesomeIcon icon={faChevronRight} /> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer'}} icon={faTwitterSquare} /></p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer'}} icon={faInstagramSquare} /></p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer'}} icon={faWhatsappSquare} /></p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer'}} icon={faFacebookSquare} /></p>

                        <p className="text-start footer-menu"><FontAwesomeIcon icon={faChevronRight} /> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer' }} icon={faYoutubeSquare} /></p>
                    </div>

                    <hr className="m-5 mx-auto" />
                    <div className="mx-auto mb-5">
                        <small>© 2021 evanmasum188@gmail.com</small>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;