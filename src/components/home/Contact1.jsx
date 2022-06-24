import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'yup-phone';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string('Enter your Name')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  phone: yup
    .string('Enter your Phone').phone()
    // .min(8, 'Invalid number!')
    // .max(11, 'Invalid Number!')
    .required('Phone is required'),
  subject: yup
    .string('Enter your subject')
    .required('subject is required'),
  message: yup
    .string('Enter your message')
    .required('message is required'),
  // password: yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
});

const Contact1 = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      subject:'',
      message:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (

    <Container>
      <section className=" text-section">
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-12">
              <div className="heading heading--primary heading--center">
                <h2 className="heading__title"><span>Contact - us</span></h2>
                <p className="no-margin-bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='row'>
        <div className=" col-md-6 pb-5">
          <div className="card shadow p-3 mb-5" style={{ maxWidth: '25rem', }}>
            <div className="card-body">
              <h5 className="card-title">Contact details</h5>
              <ul class="list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action"><FontAwesomeIcon icon={faLocationDot} />&nbsp;Sri Lakshmi Narasimha temple, Thirumala Bhagom PO, Thuravoor, Alappuzha PIN: 688540</a>
                <a href="#" class="list-group-item list-group-item-action"><FontAwesomeIcon icon={faEnvelope} />&nbsp;slntvr@email.com</a>
                {/* <a href="#" class="list-group-item list-group-item-action"><FontAwesomeIcon icon={['fa', 'google']} />&nbsp;Whatsapp</a> */}
                <a href="#" class="list-group-item list-group-item-action"><FontAwesomeIcon icon={faPhone} />&nbsp;Phone</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={formik.handleSubmit} className='row g-3 shadow p-3 mb-5'>
            <div className='container-sm'>

              {/* <label for="" className="form-label">Name</label> */}
              <TextField
                fullWidth
                id="nameField"
                name="name"
                label="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className="col-md-6">
              {/* <label for="" className="form-label">Email</label> */}
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="col-md-6">
              {/* <label for="" className="form-label">Subject</label> */}
              <TextField
                fullWidth
                id="subject"
                name="subject"
                label="subject"
                type="text"
                value={formik.values.subject}
                onChange={formik.handleChange}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />
            </div>
            <div className="col-md-6">
              {/* <label for="inputPassword4" className="form-label">Phone</label> */}
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="phone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </div>
            <div className="col-12">
              {/* <label for="message" className="form-label">Message</label> */}
              <TextField
                fullWidth
                id="message"
                name="message"
                label="message"
                type="textarea"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Form.Group>
          </form>
        </div>
      </section>
    </Container >
  );
};

export default Contact1
