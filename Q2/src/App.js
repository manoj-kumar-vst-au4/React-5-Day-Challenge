import React from 'react';
import Car from "./functional";
import Bike from "./class";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 mt-5 rounded shadow bg-dark text-center border border-dark px-5">
            <Car/>
            <Bike/>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
