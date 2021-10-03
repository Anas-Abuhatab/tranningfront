import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import LoginButton from './LoginButton ';

 class Login extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>login</Card.Title>
        <Card.Text>
          click below to lonin
        </Card.Text>
          <LoginButton/>
      </Card.Body>
    </Card>
    )
  }
}

export default Login
