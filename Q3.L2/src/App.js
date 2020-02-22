import React from 'react';

class App extends React.Component{
  state={
    input:"",
    list:[]
  }

  handleInput = (input) =>{
    this.setState({
      input:input
    })
  }

  getdata = (data) =>{
    let listData = this.state.list.slice();
    listData.push(data)
    
    this.setState({
      input:"",
      list: listData
    })
  }

  render(){
    return(
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 offset-md-4  rounded text-center">
            <div className="card shadow">
              <div className="card-body bg-light">
                <input type="text" value={this.state.input} className="form-control text-center" onChange={(event)=>this.handleInput(event.target.value)}/>
                {this.state.input === ""?null:<button className="btn btn-success mt-2" onClick={()=>this.getdata(this.state.input)}>Add Item</button>}
              </div>
            </div>
            <div className="mt-3">
              <h2>List</h2>
              <div className="card card-body mb-1 bg-light shadow">
                {this.state.list.map((item, index)=>{
                  return(
                      <h5 className="py-0" key={index}>{item}</h5>
                    )
                  })}
              </div>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
