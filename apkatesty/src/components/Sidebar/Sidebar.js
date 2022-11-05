import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


import './Sidebar.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Home from '../../pages/Home/Home';
//import { Button, Table } from 'react-bootstrap';
import Checkbox from '../../pages/Checkbox/Checkbox';
//import { Dropdown } from 'bootstrap';
//import { Input } from 'reactstrap';
import Forms from '../../pages/Forms/Forms';
import Button from '../../pages/Button/Button';
import Dropdown from '../../pages/Dropdown/Dropdown';
import Input from '../../pages/Input/Input';
import Table from '../../pages/Table/Table';


function Sidebar() {


  return (
    <Router>
    <Navbar bg="primary" variant={"dark"} expand="lg">
    <Container>
      <Navbar.Brand href="#home">Praca Inżynierska</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/button"}>Button</Nav.Link>
          <Nav.Link as={Link} to={"/checkbox"}>Checkbox</Nav.Link>
          <Nav.Link as={Link} to={"/dropdown"}>Dropdown</Nav.Link>
          <Nav.Link as={Link} to={"/input"}>Input</Nav.Link>
          <Nav.Link as={Link} to={"/table"}>Table</Nav.Link>
          <Nav.Link as={Link} to={"/forms"}>Forms</Nav.Link>
     
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Routes>
  <Route path='/' exact element={<Home />}/>
        <Route path='/button' element={<Button/>}/>
        <Route path='/checkbox' element={<Checkbox/>}/>
        <Route path='/dropdown' element={<Dropdown/>}/>
        <Route path='/input' element={<Input/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/forms' element={<Forms/>}/>

        </Routes>

  </Router>
  )
}

export default Sidebar