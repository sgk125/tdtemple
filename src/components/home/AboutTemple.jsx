import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutTemple = () => {

    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className='container'
        >
            <div className="section ">
                <div className="row  pt-5 pb-3 mt-5">
                    <div className="col-12">
                        <div className="heading heading--primary heading--center">
                            <h2 className="heading__title"><span>Sri Lakshmi Narasimha Temple</span></h2>
                            <p className="no-margin-bottom"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container dflex row">
                <div className=''>
                    <img src="assets/images/cover.png" alt="temple" className='card-img-top'/>
                </div>
                <Row>
                    <Col></Col>
                    <Col xs={10}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="heading heading--primary">
                                    <span className="heading__pre-title">About</span>
                                    <h2 className="heading__title"><span>Sree Lakshmi Narasimha</span> <span>Temple</span></h2>
                                </div>
                                <p><strong>Location: About 1.1 Km- East from Thuravoor Junction (NH-A1)</strong></p>
                                <p>Sree Lakshmi Narasimha temple is one of the famous GSB temples in Kerala located in Thuravoor, in Alappuzha district</p>
                                <p>Diety Sree Lakshmi Narasimha is the aaradhana moorthi here and Sree venkatachalapathy is the prathishta moorthi. The temple and the institutions is managed by Alappuzha Ananthanarayanapuram Thuravoor Thirumala Devaswom (AATTD) and ... </p>
                                
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1">
                                <div className="info-box">
                                    
                                        <img className="img--bg image" src="assets/images/diety-kolam.jpg" alt="img" />
                                            
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-12 mb-5">
                                <div className="heading heading--primary">
                                    <span className="heading__pre-title">About</span>
                                </div>
                                <p><strong>Location: About 1.1 Km- East from Thuravoor Junction (NH-A1)</strong></p>
                                <p>Sree Lakshmi Narasimha temple is one of the famous GSB temples in Kerala located in Thuravoor, in Alappuzha district</p>
                                <p>Diety Sree Lakshmi Narasimha is the aaradhana moorthi here and Sree venkatachalapathy is the prathishta moorthi. The temple and the institutions is managed by Alappuzha Ananthanarayanapuram Thuravoor Thirumala Devaswom (AATTD) and ... </p>
                                
                            </div>
                    </Col>
                    <Col></Col>
                </Row>
                

            </div>
        </motion.div>
    );


}

export default AboutTemple