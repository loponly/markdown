import React from 'react';
import Preview from "./components/preview";
import './App.css';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text:""
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event){
    this.setState({
      text: event.target.value
    })
  }
  
  render(){
    
    return (
      <div>
         <section className="content">
         Editor
          <textarea id="editor"  onChange={this.clickHandler} placeholder="Type something here...">></textarea>
        </section>
      <Preview text = {this.state.text}/>
      </div>
    )
  }
}

export default App;
