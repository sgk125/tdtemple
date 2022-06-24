import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'react-bootstrap';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const Home = () => {

    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <div>
                <Carousel fade className='shadow'>
                    <Carousel.Item  className='carousel-height'>
                        <img
                            className="d-block carousel-image-height"
                            src={'assets/images/pallak.jpg'}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  className='carousel-height'>
                        <img
                            className="d-block carousel-image-height"
                            src={"assets/images/front-gopur.jpg"}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  className='carousel-height'>
                        <img
                            className="d-block carousel-image-height"
                            src={"assets/images/bird-sight.jpg"}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container className='pt-5'>
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
                                <Link className="button button--primary" to='/about-temple' >Read more</Link>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1">
                                <div className="info-box">
                                    
                                        <img className="img--bg image" src="assets/images/diety-kolam.jpg" alt="img" />
                                            
                                        </div>
                                </div>
                            </div>
                    </Col>
                    <Col></Col>
                </Row>
                {/* <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row> */}
            </Container>
            <section className="section text-section">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary heading--center">
                                <h2 className="heading__title"><span>Today's</span> <span>Events</span></h2>
                                <p className="no-margin-bottom">Malayalam Date and related details</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center pb-2">
                            <div className="alert alert--warning alert--filled">
                                <div className="alert__icon">
                                    <i className="fas fa-om" style={{fontSize: 'xx-large !important'}}></i>
                                </div>
                                <p className="alert__text"><strong>05:00 AM</strong> Event 0    </p>
                            </div>
                        </div>
                        <div className="col-12 text-center pb-2">
                            <div className="alert alert--warning alert--filled">
                                <div className="alert__icon">
                                    <i className="fas fa-om" style={{fontSize: 'xx-large !important'}}></i>
                                </div>
                                <p className="alert__text"><strong>08:00 AM</strong> Event 1</p>
                            </div>
                        </div>
                        <div className="col-12 text-center pb-2">
                            <div className="alert alert--warning alert--filled">
                                <div className="alert__icon">
                                    <i className="fas fa-om" style={{fontSize: 'xx-large !important'}}></i>
                                </div>
                                <p className="alert__text"><strong>00:00 AM</strong> Event 2</p>
                            </div>
                        </div>
                        <div className="col-12 text-center pb-2">
                            <div className="alert alert--warning alert--filled">
                                <div className="alert__icon">
                                    <i className="fas fa-om" style={{fontSize: 'xx-large !important'}}></i>
                                </div>
                                <p className="alert__text"><strong>00:00 AM</strong> Event 3</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </ motion.div>
    )
}

export default Home

