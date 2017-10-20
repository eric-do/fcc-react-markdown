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
               <div dangerouslySetInnerHTML={{__html:(this.props.marked || '')}}
                id='preview-content'>
            </div>
        </div>
        )
    };
}