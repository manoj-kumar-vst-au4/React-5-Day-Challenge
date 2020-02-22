import React from 'react';
import Parent from "./component/parent";

class App extends React.Component{
  
  render(){
    return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center   ">
            <Parent
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
