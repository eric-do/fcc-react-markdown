import React from 'react';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markedText: ''
          }
    }

    componentWillReceiveProps() {
        this.toMarkdown(this.props.unmarkedText);
    }

    componentDidMount() {
        //console.log ("Component mounted with props: " + this.state.props.marked);
        if (typeof this.state.props === 'undefined')
            console.log ("Component props is undefined");
        console.log ("Component mounted with markedState: " + this.state.unmarkedText);   
    }

    toMarkdown = (text) => {
        var marked = require('marked');
        
        marked.setOptions({
          sanitize: true,
        });
    
        console.log("toMarkdown converted text: " + marked(text));
        return marked(text);
      }

    render() {
        return (
        <div id='preview-wrapper' class='col-md-6'>
            <div class='toolbar'>
                Preview
            </div>
            <span dangerouslySetInnerHTML={{__html:(this.toMarkdown(this.props.unmarkedText) || '')}}
                id='preview'/>
        </div>
        )
    };
}