import React from 'react';

class App extends React.Component{
  state={
    input:"",
    day:"",
    date:"",
    daysTodo:[],
    option:"",
    list:[]
  }

  handleInput = (event) => {
    let inputValue = event.target.value;
    this.setState({
      input: inputValue
    })
  }

  handleDate = (event) => {
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let inputValue = event.target.value;
    let date = new Date(inputValue).getUTCDay();
    let newDay = weekday[date]
    this.setState({
      day: newDay,
      date : inputValue
    })
  }

  getdata = () =>{
    
    let initialData = {
      todo: this.state.input,
      day: this.state.day,
      date : this.state.date
    }
    let data = [...this.state.list, initialData]
    this.setState({
      input:"",
    day:"",
    date:"",
      list: data
    })
  }

  handleFilter = (event) => {
    const filterValue = this.state.list.filter((list) => {
      return list.day === event.target.value
    })
    let input = event.target.value
    this.setState({
        daysTodo:filterValue,
        option:input
    })
    
  }

  render(){  
    return(
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-3 rounded text-center">
            <div className="card">
              <div className="card-body bg-light">
                <input type="text" value={this.state.input} className="form-control border   text-center" required onChange={this.handleInput} placeholder="Enter your Todo..."/>
                <input type="date" value={this.state.date} className="form-control border  mt-2 text-center" required onChange={this.handleDate} />
                {this.state.input === ""?null:<button className="btn btn-success mt-2" onClick={this.getdata}>Add Item</button>}
              </div>
            </div>
            <select className="form-control text-center bg-dark text-white offset-md-4 mt-3" style={{width:"10rem"}} onChange={this.handleFilter}  >
              <option>All Days</option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
          </select>
          </div>
        </div>
        <div className="row">
        <div className=" col-md-8 offset-md-2 mt-5">
          <table  className="table table-striped ml-5">
            <thead >
              <tr>
                <td >Todo</td>
                <td>Day</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody >
            {(this.state.option==="All Days"||this.state.option==="")?
                this.state.list.map((item, index)=>{
                    return(
                      <tr key={index}>
                        <td>{item.todo}</td>
                        <td>{item.day}</td>
                        <td>{item.date}</td>
                      </tr>
                    )
                  }):
                  this.state.daysTodo.map((item, index)=>{
                    return(
                      <tr key={index}>
                        <td>{item.todo}</td>
                        <td>{item.day}</td>
                        <td>{item.date}</td>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
