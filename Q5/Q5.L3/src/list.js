import React from 'react';
import {connect} from "react-redux";

class List extends React.Component{
  render(){
    return(
      <div>
          {this.props.todo.map((item, index)=>{
              return(
                  <div>
                      <p>{item}</p>
                  </div>
              )
          })}
      </div>
    )
  }
}
 const stateToProps = (state)=>{
   return({
     todo:state.todo
   })
 }
export default connect(stateToProps)(List);
