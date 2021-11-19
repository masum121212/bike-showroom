import React from 'react';
import './Award.css';
import award7 from '../../../images/awards/award-7.png';
import award8 from '../../../images/awards/award-8.png';
import award9 from '../../../images/awards/award-9.png';
import award10 from '../../../images/awards/award-10.png';
import award11 from '../../../images/awards/award-11.png';
import award12 from '../../../images/awards/award-12.png';
import Zoom from 'react-reveal/Zoom';

const Award = () => {
    return (
        <>
        <Zoom top cascade>
                <h1 className="fw-bold text-primary mt-5 p-5">Awards  <i class="fas fa-medal"></i></h1>
            </Zoom>
        <div className="container my-5 pt-5">
            

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 mx-auto gy-5 pb-5 bg-primary">
                <div className="">
                    <img className="award-item" src={award7} alt="" />
                </div>

                <div className="col">
                    <img className="award-item" src={award8} alt="" />
                </div>

                <div className="col">
                    <img className="award-item" src={award9} alt="" />
                </div>

                <div className="col">
                    <img className="award-item" src={award10} alt="" />
                </div>

                <div className="col">
                    <img className="award-item" src={award11} alt="" />
                </div>

                <div className="col">
                    <img className="award-item" src={award12} alt="" />
                </div>

            </div>
        </div>
        </>
    );
};

export default Award;