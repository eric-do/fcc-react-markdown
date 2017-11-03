import React from 'react';

const Preview = (props) => {
    return (
        <div id='preview-wrapper' class='col-md-6'>
            <div class='toolbar'>
                Markdown Preview
            </div>
            <span dangerouslySetInnerHTML={{__html:(marked(props.markdown) || '')}}
                id='preview'/>
        </div>
        )
}

var marked = require('marked');

marked.setOptions({
    sanitize: true,
  });

export default Preview;