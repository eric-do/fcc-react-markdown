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
    console.log(marked(text));
  }

  render() {
    return (
      <div>
        <Editor convert={this.toMarkdown}/>
        <Preview />
      </div>
    );
  }
}

export default App;
