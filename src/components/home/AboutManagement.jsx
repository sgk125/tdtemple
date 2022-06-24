import React from 'react';
import { useState } from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import { motion } from 'framer-motion';


const AboutManagement = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className='container'
        >
            <div className="section">
                <div className="row margin-bottom pt-5 pb-3">
                    <div className="col-12">
                        <div className="heading heading--primary heading--center">
                            <h2 className="heading__title"><span>AATTD Management</span></h2>
                            <p className="no-margin-bottom"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container dflex row mt-5 mb-5">
                {itemData.map((item) => (

                    <div className="card " style={{ width: '18rem', height: '22rem', margin: '10px' }} >
                        <div className="row g-0 justify-content-center  ">
                            <div className="" style={{ width: '16rem', height: '14rem' }}>
                                <img src={`${item.img}`}
                                    srcSet={`${item.img}`}
                                    alt={item.title}
                                    loading="lazy"
                                    className="card-img-top " style={{ height: '100%', width: '100%' }} />
                            </div>
                            <div className="">
                                <div className="card-body">
                                    <motion.h5 className="card-title" id={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)}>{item.title}</motion.h5>
                                    <p className="card-text">{item.desc}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedId && (
                <div >
                    {itemData.filter(person => person.id === selectedId).map(selectedPerson => (
                        <Modal show animation={true} keyboard centered>
                            {/* <motion.h5>{selectedPerson.title}</motion.h5> */}
                            <Modal.Header >
                                <Modal.Title>{selectedPerson.title}</Modal.Title>
                                <CloseButton onClick={() => setSelectedId(null)} />
                            </Modal.Header>
                            <Modal.Body>{selectedPerson.desc}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setSelectedId(null)}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    ))}
                </div>
            )}
        </motion.div>
    );


}
const itemData = [
    {
        img: 'assets/images/sln.jpg',
        title: 'President', desc: 'this is description', id: '1',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Vice-President', desc: 'this is description', id: '13',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 1', desc: 'this is description', id: '2',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 2', desc: 'this is description', id: '3',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 3', desc: 'this is description', id: '4',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 4', desc: 'this is description', id: '5',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 5', desc: 'this is description', id: '6',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 6', desc: 'this is description', id: '7',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 7', desc: 'this is description', id: '8',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Member 8', desc: 'this is description', id: '9',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Adhikari', desc: 'this is description', id: '10',
    },
    {
        img: 'assets/images/sln.jpg',
        title: 'Other', desc: 'this is description', id: '11',
    },
];

export default AboutManagement