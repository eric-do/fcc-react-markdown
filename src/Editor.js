import React from 'react';


export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        //this.handleChange();
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
        <div id='editor-wrap' class='col-md-6'>
            <div class='toolbar'>
                Editor
            </div>
            <textarea 
                class='form-control'
                type='text' 
                name='userInput' 
                id='editor'
                onChange={this.handleChange} 
                value={this.props.unmarkedText}/>
        </div>
        )
    };
}