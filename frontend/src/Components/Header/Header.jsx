import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const nav_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'#',
    display:'About'
  },
  {
    path:'/faculty',
    display:'Faculty'
  },
]


const Header = () => {
  return (
      <div className="header">
        <Container>
          <Row>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                  <img src={logo} alt="VVIT logo" />
                </div>
            </div>
          </Row>
        </Container>
      </div>
  )
};

export default Header;
