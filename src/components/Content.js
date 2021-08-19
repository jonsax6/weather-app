import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const containerStyles = {
  color: 'white'
}

const outerBoxStyles = {
  display: 'flex',
  margin: 'auto',
  backgroundColor: 'blue',
  height: '700px',
  width: '1200px',
  justifyContent: 'center',
  alignItems: 'center'
}

const innerBoxStyles = {
  display: 'flex',
  backgroundColor: 'red',
  height: '675px',
  width: '1175px',
}

const sideImage = {
  display: 'flex',
  backgroundColor: 'green',
  minHeight: '675px',
  minWidth: '450px',
  justifyContent: 'center',
  alignItems: 'center'
}

const h2 = {
  display: 'block'
}

const Content = () => {

  return (
    <Container style={containerStyles}>
      <Row>
        <Col style={outerBoxStyles}>
          <Row>
            <Col style={innerBoxStyles}>
              <Row>
                <Col lg={4} style={sideImage}>
                  <h2>Weather Finder</h2>
                  <p>Find out the temperature,</p>
                </Col>
                <Col lg={8}></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Content