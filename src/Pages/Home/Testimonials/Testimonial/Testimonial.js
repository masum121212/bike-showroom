import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar,faUserEdit, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Rating from 'react-rating';
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {
    const { name, city, ratting, comment } = testimonial;
    return (
        <div className="row mx-auto">
            <div className="col-md-4 col-sm-12 py-3">
                <div className="card testimonial-card" style={{ width: '18rem' }}>
                    <div className="card-header">
                    <p style={{ fontSize: "14px", textAlign: "left" }}
                                className="text-muted">
                                <FontAwesomeIcon style={{ fontSize: '24px' , color: '#0d6efd'}} icon={faUserEdit} /> - {name}
                                <br />
                                <br />
                                <br />
                                <cite title="Source Title">
                                <FontAwesomeIcon style={{ fontSize: '24px', color: '#0d6efd'}} icon={faLocationArrow} /> - {city}</cite>
                                </p>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        {comment}
                        <br />
                        <hr />
                        <br />
                        <footer  style={{ fontSize: "16px", color: '#163336' }}>
                            <Rating readonly
                            style={{ color: 'orange' }}
                            initialRating={ratting}
                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                            />
                        {' '}
                        <span className="text-muted">{ratting}</span></footer>

                        </blockquote>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;