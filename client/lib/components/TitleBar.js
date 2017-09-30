import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class TitleBar extends React.Component {
  
  navToGH () {
    window.open('https://github.com/Fluidbyte/twitter-stream-aggregator', '_blank')
  }
  
  render () {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <i className="fa fa-twitter"></i>
              Twitter Stream &amp; Aggregation
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1} 
              onClick={this.navToGH}>
              <i className="fa fa-github fa-2x"></i>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}