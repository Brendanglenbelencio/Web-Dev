import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Carousel from 'react-bootstrap/Carousel'
import firstSlide from '../assets/FirstSlide.jpg'
import secondSlide from '../assets/SecondSlide.jpg'
import thirdSlide from '../assets/ThirdSlide.jpg'
import fourthSlide from '../assets/FourthSlide.jpg'
import styles from './ShopInfo.module.css'

// Fix the image sizing or probably find the right format for the image elements.
// Change Fonts
// prepare next section
// fix size of the carousel, reduce it.

const ShopInfo = () => {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center text-center ${styles.parentDiv}`}>
        <div className={styles.carouselTitle}>
            <p>What We Offer</p>
        </div>
        <Container className={`d-flex justify-content-center align-items-center text-center ${styles.carouselContainer}`}>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={firstSlide} alt="Store"></img>
                <Carousel.Caption className={styles.carouselGradient}>
                    <div>
                    <p>Coffee that speaks volumes</p>
                    <p>We use high-quality beans roasted to perfection by passionate experts. From classic espressos to adventurous pour-overs, we have a cup to tantalize every taste bud.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"  src={secondSlide} alt="Store"></img>
                <Carousel.Caption className={styles.carouselGradient}>
                    <div>
                    <p>Sweet & Savory delights</p>
                    <p>Pair your coffee with delicious pastries and light bites, all made with fresh, local ingredients. We cater to dietary restrictions and have something for everyone.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"  src={thirdSlide} alt="Store"></img>
                <Carousel.Caption className={styles.carouselGradient}>
                    <div>
                    <p>Seasonal Specials</p>
                    <p>From warming spiced lattes in winter to refreshing iced concoctions in summer, we craft unique drinks that capture the essence of each time of year.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"  src={fourthSlide} alt="Store"></img>
                <Carousel.Caption className={styles.carouselGradient}>
                    <div>
                    <p>Community brewed into every cup</p>
                    <p>We're dedicated to giving back to the community that supports us, and we believe in the power of collaboration and shared purpose.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>     
        </Container>
    </div>
  );
}

export default ShopInfo