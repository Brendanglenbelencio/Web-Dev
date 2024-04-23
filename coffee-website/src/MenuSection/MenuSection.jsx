import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import hotCoffee from '../assets/HotCoffee.jpg'
import icedCoffee from '../assets/IcedCoffee.jpg'
import croissant from '../assets/Croissant.jpg'
import dessert from '../assets/Desserts.jpg'
import styles from './MenuSection.module.css'

const menuItems = [
  {
    cardImage: hotCoffee,
    title: "Hot Coffee",
    description: "This is a placeholder text"
  },
  {
    cardImage: icedCoffee,
    title: "Iced Coffee",
    description: "This is a placeholder text"
  },
  {
    cardImage: croissant,
    title: "Pastries",
    description: "This is a placeholder text"
  },
  {
    cardImage: dessert,
    title: "Desserts",
    description: "This is a placeholder text"
  },
]

const MenuSection = () => {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center text-center ${styles.menuDiv}`}>
    <Container>
      <div className={styles.menuHeader}>
        <p>Crafted with Passion: Our Menu</p>
      </div>
      <div className={styles.cardDiv}>
        <Row xs={1} md={2} className="g-4">
          {menuItems.map((menuItems, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" className={styles.cardIcon} src={menuItems.cardImage} />
                <Card.Body>
                  <Card.Title>{menuItems.title}</Card.Title>
                  <Card.Text>{menuItems.description}</Card.Text>
                  <Button className={styles.cardButton} variant="light" size='md'>Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
    </div>

  )
}

export default MenuSection