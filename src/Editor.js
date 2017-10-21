import React from 'react';

export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange = (event) => {
        console.log("Before setState: " + this.state.input);
        this.setState({
          input: event.target.value
        }, this.convert);
     }

    convert() {
        this.props.convert(this.state.input);
    }

    render() {
        return (
        <div id='editor-wrap'>
            <div class='toolbar'>
                Editor
            </div>
            <textarea 
                class='form-control'
                type='text' 
                name='userInput' 
                id='user-input'
                onChange={this.handleChange} />
        </div>
        )
    };
}