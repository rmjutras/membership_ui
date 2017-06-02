import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import UserView from './UserView.jsx'

class Navigation extends Component {

  render () {
    return (
      <Navbar fluid className="navigation">
        <Navbar.Header>
          <Navbar.Brand>
            <div className="logo"></div>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav className="left-nav">

          <LinkContainer to="/members">
            <NavItem eventKey="members">Membership</NavItem>
          </LinkContainer>

          <LinkContainer to="/placeholder">
            <NavItem eventKey="placeholder">PlaceHolder</NavItem>
          </LinkContainer>

        </Nav>

        <Nav pullRight className="right-nav">
          <NavItem className="profile" eventKey="me">
            <UserView />
          </NavItem>
          <LinkContainer to="/logout">
            <NavItem className="logout" eventKey="logout">Logout</NavItem>
          </LinkContainer>
        </Nav>

      </Navbar>
    )
  }
}

export default connect((state) => state)(Navigation)
