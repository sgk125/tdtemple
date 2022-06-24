import React from 'react';
import { Col, Row,Table, Container } from 'react-bootstrap';
import { motion} from 'framer-motion';

const Seva = () => {
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
        <div className='section pt-5 mt-5'>
            <Container >
            <section className=" text-section">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary heading--center">
                                <h2 className="heading__title"><span>Seva or Vazhipadu</span></h2>
                                <p className="no-margin-bottom">The setails are in the table</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section'>
                
                <Row>
                    <Col></Col>
                    <Col xs={10}>
                        <Table responsive striped bordered hover size="sm" variant="light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <th key={index}>Table heading</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>2</td>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>3</td>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col></Col>
                </Row>
            </section>
            <section className=''>
                <div className="heading__title text-center">title</div>
                
                <Row>
                    <Col></Col>
                    <Col xs={10}>
                        <Table responsive striped bordered hover size="sm" variant="light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <th key={index}>Table heading</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>2</td>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>3</td>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col></Col>
                </Row>
            </section>
                {/* <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row> */}
            </Container>
        </div>
        </motion.div>
    )
}

export default Seva