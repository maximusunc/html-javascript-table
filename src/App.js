import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Table from "./components/table";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
