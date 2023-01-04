import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header  from './Header/Header';
import Container from './Container/Container';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container />
    </div>
  );
}

export default App;
