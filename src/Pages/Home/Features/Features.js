import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import './Features.css';
import Zoom from 'react-reveal/Zoom';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [])

    return (
        <div className="container g-5 my-5">
            <Zoom left cascade>
                <h1 className="fw-bold text-primary">Featured Products <i class="fas fa-fire-alt"></i></h1>
            </Zoom>

            <div className="features-container py-5">
                {
                    features.slice(0, 6).map(feature => <Feature
                        key={feature._id}
                        feature={feature}
                    ></Feature>)
                }
            </div>

        </div>
    );
};

export default Features;