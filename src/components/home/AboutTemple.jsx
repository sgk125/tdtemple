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
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle', desc: 'this is description',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table', desc: 'this is description',
    },
];

export default AboutTemple