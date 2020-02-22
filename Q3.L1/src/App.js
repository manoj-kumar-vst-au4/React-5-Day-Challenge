import React from 'react';

class App extends React.Component{
  state={
    input:""
  }

  handleInput = (input) =>{
    this.setState({
      input:input
    })
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4  rounded text-center">
            <h3 className="mt-5 bg-success text-white py-2">INPUT-BOX</h3>
            <div className="card border border border-dark mt-3">
              <div className="card-body bg-light">
                <input type="text" className="form-control border border-danger  text-center" onChange={(event)=>this.handleInput(event.target.value)}/>
                <div className={this.state.input ===""?null:"text-center border border-success bg-white rounded-lg py-1 mt-2"}>
                  <span>{this.state.input}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
