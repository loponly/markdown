import React from 'react';
import marked from 'marked';
marked.setOptions({
    breaks: true,
  });
const renderer = new marked.Renderer();

class Preview extends React.Component{

    render(){
        
        return(      
<div>

        <section className="content">
        Preivew
        <div id="preview" className="boxSizing-borderBox" dangerouslySetInnerHTML={{__html: marked(this.props.text, { renderer: renderer })}} />
        </section>
    
      </div>)
    }
}



export default Preview;

