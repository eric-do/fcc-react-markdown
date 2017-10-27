import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Preview from './Preview.js';
import Editor from './Editor.js';
import { Navbar, Jumbotron, Button, Row, Col, Grid } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unmarkedText: 'test'
    }
  }

  toMarkdown = (text) => {
      this.setState({
        unmarkedText: text
    });
  }

  render() {
    return (
      <div className='row'>
        <Editor convert={this.toMarkdown} unmarkedText={this.state.unmarkedText}/>
        <Preview unmarkedText={this.state.unmarkedText}/>
      </div>
    );
  }
}

export default App;
