import React from 'react';

export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          input: event.target.value
        });
        this.props.convert(this.state.input);
      }

    render() {
        return (
        <div id='editor-wrap'>
            <div class='toolbar'>
                Editor
            </div>
            <textarea 
                value={this.state.input}
                type='text' 
                name='userInput' 
                id='user-input'
                onChange={this.handleChange} />
        </div>
        )
    };
}