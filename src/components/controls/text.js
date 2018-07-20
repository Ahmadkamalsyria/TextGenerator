import React, { Component } from 'react';


class Text extends Component {
  constructor(props){
    super( ... props);
    this.state = {
      value : props.value   }
     }
     textNumberChanged(e) {
       this.setState({value : e.target.value}, function(){
         this.props.onChange(this.state.value)
       })
     }

  render() {
    return (
      <div>
      <input className="form-control" type="number" value={this.state.value} onChange={this.textNumberChanged.bind(this)}/>
      </div>
    );
  }
}

export default Text;
