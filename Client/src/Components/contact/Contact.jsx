import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
  return (
    <Container>

    <Row>
        <Col xs={12} sm={12} md={6} lg={6} className='mb-5'>
            <Row className=''>
                <Col xs={12} sm={12} md={6} lg={6} className='mb-3'><input type='text' placeholder='Name' className='name-contact' style={{ width: '100%' }}></input></Col>
                <Col xs={12} sm={12} md={6} lg={6} className='mb-3'><input type='email' placeholder='email' className='email-contact' style={{ width: '100%' }}></input></Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={12} sm={12} md={12} lg={12}><input type='text' placeholder='Subject' className='subject-contact' style={{ width: '100%' }} ></input></Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={12} sm={12} md={12} lg={12}><input type='textarea' placeholder='Message' className='message-contact' style={{ width: '100%' }}></input></Col>
            </Row>
            <Row className='mb-5'>
                <Col><Button className='submit-contact'>Submit</Button></Col>
            </Row>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className='mb-5'>
            <img src="" alt="I will be an Image" />
        </Col>
    </Row>
    
</Container>
  )
}

export default Contact
