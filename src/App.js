import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import $ from "jquery";
import Output from "./components/output"
import Select from "./components/controls/select.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfParagraphs : 50,
      html : true,
      text : ""
    }
     }
    componentWillMount(){
      this.getText();
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
  render() {
    return (
      <div className="App Container">
        <h1> React text generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label> Include HTML </label>
            <Select value = {this.state.html} onChange = {this.showHTML.bind(this)}/>
          </div>
        </form>
        <Output value= {this.state.text}/>
      </div>
    );
  }
}

export default App;
