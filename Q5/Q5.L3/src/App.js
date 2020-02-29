import React from 'react';
import {connect} from "react-redux";
import List from "./list";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center mt-3 ">
            <div className="border border-dark py-2 px-3 rounded shadow">
              <div >
                <input className="form-control text-center border border-dark" value={this.props.searchItem} onChange={(e)=>this.props.dispatch({type:"change", payload:e.target.value})}/>
              </div>
              <div className="mt-1">
                {this.props.searchItem===""?null:<button className="btn btn-success" onClick={()=>this.props.dispatch({type:"add",payload:this.props.searchItem})}>Add Item</button>}
              </div>
            </div>
            <div>
              <h3 className="mt-2">Todo List</h3>
              <List/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
 const stateToProps = (state)=>{
   return({
     searchItem:state.searchItem,
     todo:state.todo
   })
 }
export default connect(stateToProps)(App);
