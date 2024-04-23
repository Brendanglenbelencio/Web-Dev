import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import styles from './HeroSection.module.css'


const HeroSection = () => {
  return (
    <>
      <div className={`d-flex flex-column justify-content-center align-items-center text-center ${styles.containerBackground}`}>
          <Container>
            <div>
              <h1 className={styles.headerFont}>EXPERIENCE THE TASTE OF HIGH QUALITY AND INEXPENSIVE COFFEE</h1>
              <p className={styles.heroContent}>UP & Up Coffee is a Community-focused coffee shop that offers affordable, premium, freshly made to-go coffee drinks.
                 Start your Monday with a cup of ambition and a dash of determination. Embrace the warmth of possibility and aroma of opportunity.</p>
              <Button className={styles.heroButton} variant="light" size='md'>Order Now</Button>
            </div>
          </Container>
      </div>
    </>
    
  );
}

export default HeroSection