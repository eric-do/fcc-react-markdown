import React from 'react';
import $ from 'jquery';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
     //   $("#preview-wrap").html(this.props.marked);
      }

    render() {
        return (
        <div id='preview-wrap'>
            <div class='toolbar'>
                Preview
            </div>
            {/* <textarea 
                value={this.props.marked}
                type='text' 
                name='userOutput' 
                id='user-output' 
                readOnly='true' /> */}
            <div dangerouslySetInnerHTML={{__html:(this.props.marked || '')}}
                id='preview-content'>
            
            </div>
        </div>
        )
    };
}