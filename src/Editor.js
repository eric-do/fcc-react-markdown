import React from 'react';

const Editor = (props) => {
        return(
            <div id='editor-wrap' class='col-md-6'>
                <div class='toolbar'>
                    Editor
                </div>
                <textarea 
                    class='form-control'
                    type='text' 
                    name='userInput' 
                    id='editor'
                    onChange={props.handleChange} 
                    value={props.markdown}/>
            </div>
        )
}

export default Editor;