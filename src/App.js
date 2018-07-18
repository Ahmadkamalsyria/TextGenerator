import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import $ from "jquery";

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


  render() {
    return (
      <div className="App">
      Hello
      </div>
    );
  }
}

export default App;
