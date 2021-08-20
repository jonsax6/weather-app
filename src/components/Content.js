import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import sunset from './../images/sunset-large.jpg'
import WeatherForm from './WeatherForm'

const containerStyles = {
  color: 'white',
}

const outerBoxStyles = {
  display: 'flex',
  margin: 'auto',
  backgroundImage: `url(${sunset})`,
  backgroundSize: 'cover', 
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
}

const innerBoxStyles = {
  display: 'flex',
  backgroundColor: 'black',
  border: 'solid grey 3px',
  borderRadius: '2rem',
  filter: 'drop-shadow(0 0 0.75rem black)',
  opacity: '75%',
  height: '600px',
  width: '600px',
  justifyContent: 'center',
}

const title = {
  margin: '0',
  marginTop: '2rem'
}
const subtitle = {
  marginTop: '0.3rem',
}

const Content = () => {

  return (
    <Container style={containerStyles}>
      <Row>
        <Col style={outerBoxStyles}>
          <Row>
            <Col style={innerBoxStyles}>
              <div>
                <h2 style={title}>Weather Finder</h2>
                <h5 style={subtitle}>Get the temperature, and Weather in your area</h5>
              </div>
            </Col>
            <WeatherForm/>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Content