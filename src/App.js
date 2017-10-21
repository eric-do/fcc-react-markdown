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
      markedText: ''
    }
  }

  toMarkdown = (text) => {
    var marked = require('marked');
    
    marked.setOptions({
      sanitize: true,
    });

    this.setState({
      markedText: marked(text)
    });
    console.log("toMarkdown converted text: " + marked(text));
  }

  render() {
    return (
      <div className='row'>
        <Editor convert={this.toMarkdown}/>
        <Preview marked={this.state.markedText}/>
      </div>
    );
  }
}

export default App;
