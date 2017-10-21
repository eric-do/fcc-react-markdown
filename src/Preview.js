import React from 'react';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
     //   $("#preview-wrap").html(this.props.marked);
      }

    render() {
        return (
        <div id='preview-wrap' class='col-md-6'>
            <div class='toolbar'>
                Preview
            </div>
            <span dangerouslySetInnerHTML={{__html:(this.props.marked || '')}}
                id='preview-content'>
            </span>
        </div>
        )
    };
}