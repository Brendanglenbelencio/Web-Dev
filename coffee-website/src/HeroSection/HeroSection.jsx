import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
import heroPicture from '../assets/hero-picture.png'
import styles from './HeroSection.module.css'


const HeroSection = () => {
  return (
    <>
        <Container>
            <Row>
                <Col xs={8} className="d-flex justify-content-center align-items-center">
                    <p className={styles.header}>EXPERIENCE THE TASTE OF HIGH QUALITY AND INEXPENSIVE COFFEE</p>
                    <Button variant='warning' size='lg'>Order Now</Button>
                </Col>
                <Col xs={4}><Image src={heroPicture} fluid/></Col>
            </Row>

        </Container>
    </>
  );
}

export default HeroSection