import React, {Component} from 'react';  

class Title extends Component {  
  render(){  
    return (  
      <div className={"alert alert-" + this.props.type}>  
        <h4 class = "text-left">{this.props.header}</h4> 
        {this.props.children} 
      </div>  
    );  
  }  
}  

export default Title;
