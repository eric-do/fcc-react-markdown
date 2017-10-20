import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Preview from './Preview.js';
import Editor from './Editor.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markedText: ''
    }
  }

  toMarkdown = (text) => {
    var marked = require('marked');
    this.setState({
      markedText: marked(text)
    });
    console.log("converted text: " + marked(text));
    console.log("state: " + this.state.markedText);
  }

  render() {
    return (
      <div>
        <Editor convert={this.toMarkdown}/>
        <Preview marked={this.state.markedText}/>
      </div>
    );
  }
}

export default App;
