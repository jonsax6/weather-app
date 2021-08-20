// Bootstrap components
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const { city, setCity } = useState(null)

const WeatherForm = (props) => {
  return (
    <>
      <Form onSubmit={this.onGetWeather}>
        <Form.Group controlId='city'>
          <Form.Label>Your City</Form.Label>
          {/* onChange prop runs event handler when this input is updated by the user (type into it, change it somehow)

            name attribute should match the key in the state holding this input's data (ex: 'email')
            value attribute should hold the matching state variable
            (ex: this.state.email)
            */}
          <Form.Control
            required
            type='text'
            name='city'
            value={city}
            placeholder='City'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Your Country</Form.Label>
          <Form.Control
            required
            name='country'
            value={country}
            type='text'
            placeholder='Country'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default WeatherForm