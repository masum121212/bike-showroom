import React from 'react';
import { Button } from 'react-bootstrap';
import news1 from '../../../images/news/news-1.jpg'
import news2 from '../../../images/news/news-2.jpg'
import news3 from '../../../images/news/news-3.jpg'
import './News.css';
import Zoom from 'react-reveal/Zoom';

const News = () => {
    return (
        <div className="container my-5 pt-5">
            <Zoom top cascade>
                <h1 style={{ color: '#163336' }} className="fw-bold mt-5 py-5 text-primary">Our Latest News</h1>
            </Zoom>

            <div className="row">

                <div className="col-md-4 col-sm-12 shadow g-5">
                    <div className="news-img">
                        <img className="img-fluid" src={news1} alt="" />
                    </div>
                    <div className="pt-3">
                        <h6  className="text-start">23 Aug 2021</h6>

                        <h4 className="fw-bold pt-2 text-start">Joan Mir becomes 2020 MotoGP World Champion</h4>

                        <p className="text-start text-muted">Team SUZUKI ECSTAR’s Joan Mir aboard the GSX-RR finished 7th in the MotoGP class of the FIM* Road Racing Grand Prix (MotoGP) 14th round held on 15 November 2020 at the Circuit Ricardo Tormo in Spain.</p>

                        <div className="text-start mb-3">
                            <Button className="text-white btn-primary"> Read More</Button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 shadow g-5 ">
                    <div className="news-img">
                        <img className="img-fluid" src={news2} alt="" />
                    </div>
                    <div className="pt-3">
                        <h6 className="text-start">18 Nov 2021</h6>

                        <h4 className="fw-bold pt-2 text-start">Suzuki’ New Addition Bandit 150 – The Street King</h4>

                        <p className="text-start text-muted">Another addition to the glorious journey of Bangladesh Motor Bike market. In 21 August, 2020 on Friday Suzuki digitally launched their new model Bandit 150. The speed pioneer GSX series adds another</p>

                        <div className="text-start mb-3">
                            <Button className="text-white btn-primary"> Read More</Button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 shadow g-5 ">
                    <div className="news-img">
                        <img className="img-fluid" src={news3} alt="" />
                    </div>
                    <div className="pt-3">
                        <h6 className="text-start">13 April 2021</h6>

                        <h4 className="fw-bold pt-2 text-start">Launching of SUZUKI GSX 125 - The All Rounder Bike</h4>

                        <p className="text-start text-muted">On July 26, 2020 – Rancon Motorbikes Limited has officially launched their new product GSX 125 under the Suzuki brand. GSX 125 has been derived from the legendary bike series GSX family where Gixxer also </p>

                        <div className="text-start mb-3">
                            <Button className="text-white btn-primary"> Read More</Button>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default News;