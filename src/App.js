import React from 'react';
import './App.css';
import Home from './components/Home';


import MoviesSearch from './components/MoviesSearch'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Navbar ,Container,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faSearch} from '@fortawesome/free-solid-svg-icons'
import MovieList from './components/MoviesList';

function App() {
  return (
    <div>
  <Router>


  <Navbar bg="dark" variant="dark">
    <Container className="Nav">
    <Navbar.Brand href="/"> <FontAwesomeIcon /> Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  href="/List"><FontAwesomeIcon icon={faList} /> List Of Movies</Nav.Link>
      <Nav.Link href="/Search">  <FontAwesomeIcon icon={faSearch}/> Search</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>


    <Route exact path='/'>

   

    <Home/>
    </Route>
   
  
    <Route path='/List'>
    <MovieList/>
    </Route>
    <Route path='/Search'>
    <MoviesSearch/>
    </Route>
    
  </Router>

  
    </div>
  );
}

export default App;
