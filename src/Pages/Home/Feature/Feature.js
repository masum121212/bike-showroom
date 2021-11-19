import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Feature.css';



const Feature = ({ feature }) => {
    const { _id, title, brand, rating, price, img, description } = feature;

    return (
        <div className="row mx-auto">
            <div className="col-md-4 col-sm-12">

                <Card className="mx-auto my-3 featured-item rounded-3 border" style={{ width: '16rem' }} >
                    <div className="img-container feature-img">
                        <Card.Img variant="top" src={img} />
                        <div className="img-text">
                            <h5>10% off</h5>
                        </div>
                    </div>

                    <div className="item-detail">
                        <Card.Body>
                            <Card.Title className="text-start fs-5 fw-bold">{title}</Card.Title>
                            <Card.Text className="text-start text-muted">
                                <code><i>{brand}</i></code>
                            </Card.Text>
                            <Card.Text className="text-start text-muted">
                                <small>{description}</small>
                            </Card.Text>

                            <div className="text-start">
                                <Rating readonly
                                    style={{ color: 'orange' }}
                                    initialRating={rating}
                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                />{' '}
                                <span className="text-muted">{rating}</span>
                                
                            </div>

                            <Card.Text style={{ color: 'red' }} className="text-start fs-5 fw-bold pt-2">
                                <sup>$</sup>{price}
                            </Card.Text>

                            <div>
                                <Link to={`/purchase/${_id}`}>
                                    <Button variant="" className="btn btn-outline-primary" >Buy Now</Button>{' '}
                                </Link>
                            </div>
                        </Card.Body>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Feature;