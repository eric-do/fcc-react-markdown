import React from 'react';

export default class Preview extends React.Component {
    render() {
        return (
        <div id='preview-wrap'>
            <div class='toolbar'>
                Preview
            </div>
            <textarea type='text' name='userOutput' id='user-output' readOnly='true' />
        </div>
        )
    };
}