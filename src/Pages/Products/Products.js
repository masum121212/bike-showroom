import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css';
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <>
            <div className="products-banner">
                <div className="row d-flex justify-content-center align-items-center pt-5 ">
                    <div className="col-md-6 mt-5 pt-5">
                        <Zoom left cascade>
                            <h1 className="text-primary mt-5 pt-5">An automotive vehicle with two in-line wheels </h1>
                        </Zoom>
                        <p className="text-white mt-3 text-center mb-5">A motorcycle (or motorbike) is a vehicle used to transport people from one place to another. <br /> It does not have 4 wheels like a car. It has 2 wheels like a bicycle. But it has a motor like a car.</p>
                        <NavLink to="/home" className="p-2 w-50 btn btn-outline-primary">Explore Now</NavLink>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <div className="container g-5 my-5">
                <Zoom right cascade>
                    <h1 className="fw-bold mt-5 pb-5 text-primary">Our Products <i class="fas fa-motorcycle"></i></h1>
                </Zoom>

                <div className="products-container">
                    {
                        products.map(product => <Product
                        key={product._id}
                        product={product}
                        ></Product>)
                    }
                </div>
            </div>
            
        </>
    );
};

export default Products;