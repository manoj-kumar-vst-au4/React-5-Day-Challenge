import React from 'react';
import {connect} from "react-redux";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center mt-5 border border-dark py-5 px-5 rounded bg-danger text-warning" >
            {this.props.marvel.map(hero=>{
              return(
                <h3>{hero}</h3>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
 const stateToProps = (state)=>{
   return({
     marvel:state.marvel
   })
 }
export default connect(stateToProps)(App);
