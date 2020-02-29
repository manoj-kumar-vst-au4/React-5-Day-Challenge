import React from 'react';
import {connect} from "react-redux";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center mt-3 ">
            <h3>INPUT-BOX</h3>
            <div className="border border-dark py-5 px-5 rounded shadow">
            <div >
              <input className="form-control text-center border border-dark" value={this.props.searchItem} onChange={(e)=>this.props.dispatch({type:"change", payload:e.target.value})}/>
            </div>
            <div className="mt-2">
              <span>
                <input type="readOnly" className="form-control text-center border border-dark" value={this.props.searchItem}/>
              </span>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
 const stateToProps = (state)=>{
   return({
     searchItem:state.searchItem
   })
 }
export default connect(stateToProps)(App);
