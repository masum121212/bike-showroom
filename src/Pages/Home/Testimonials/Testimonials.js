import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial/Testimonial';
import './Testimonials.css';
import Zoom from 'react-reveal/Zoom';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://whispering-mesa-69203.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="container my-5 pt-5">
            <Zoom top cascade>
                <h1 className="fw-bold text-primary">Our Clint Says</h1>
            </Zoom>

            <div className="testimonials-container py-5">
                {
                    testimonials.map(testimonial =>
                        <Testimonial
                            key={testimonial._id}
                            testimonial={testimonial}
                        ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;