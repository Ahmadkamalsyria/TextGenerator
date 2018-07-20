import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from "./components/output"
import Select from "./components/controls/select.js"
import Text from "./components/controls/text.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfParagraphs : 5,
      html : 'true',
      text : ""
    }
     }
    componentWillMount(){
      this.getText();
      console.log
    }
    getText(){

      axios.get('http://hipsterjesus.com/api?paras='+this.state.numberOfParagraphs+'&html='+this.state.html)
      .then((response) => {
        this.setState({text: response.data.text}, function(){
          console.log(this.state);
        })
      }).catch ( (err) => {
        console.log(err);
      })
    }

  /*  getText(){
      $.ajax({
        url: 'http://hipsterjesus.com/api?paras='+this.state.numberOfParagraphs+'&html='+this.state.html,
        dataType: 'json',
        success : function(data){
          this.setState({text : data.text})
          console.log(this.state);
        }.bind(this),
        error : function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      })
    }*/

showHTML(x) {
  this.setState({html : x}, this.getText)
}
numberOfText(n) {
  this.setState({numberOfParagraphs : n}, this.getText)
}
  render() {
    return (
      <div className="App container">
        <h1> React text generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label> Include HTML </label>
            <hr/>
            <br/>
            <br/>
            <Select value = {this.state.html} onChange = {this.showHTML.bind(this)}/><br/>
          </div>
          <div className="form-group">
            <label> Number of text </label>
            <Text value = {this.state.numberOfParagraphs} onChange = {this.numberOfText.bind(this)}/>
          </div>
        </form>
        <Output value= {this.state.text}/>
      </div>
    );
  }
}

export default App;
