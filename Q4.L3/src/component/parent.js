import React from "react";
import Child from "./child";

class Parent extends React.Component{
    
        state={
          input:"",
          usernames:["Manoj", "Sumit", "Ajay", "Sunil"],
          user:"Manoj",
          list:[],
          filterList:[],
          option:""
        }
      
        handleInput = (input) =>{
          this.setState({
            input:input
          })
        }

        handleUser = (user) =>{
          this.setState({
            user:user
          })
        }


        getData=()=>{
          let initData={
            input:this.state.input,
            user:this.state.user
          }

          let data = [...this.state.list, initData]

          this.setState({
            list:data,
            input:"",
            user:"Manoj"
          })
        }

        handleFilter = (event) => {
          const filterValue = this.state.list.filter((list) => {
            return list.user === event.target.value
          })
          let input = event.target.value
          this.setState({
              filterList:filterValue,
              option:input
          })
          
        }

    render(){
        return(
            <div>
              <div className="py-4 px-5">
                <Child
                  user={this.state.user}
                  input={this.state.input}
                  getData={this.getData}
                  usernames={this.state.usernames}
                  handleInput={this.handleInput}
                  handleUser={this.handleUser}
                />
            </div>
            <div className="mt-5">
              <div>
                <select className="btn btn-dark text-white mt-2 mb-2" onChange={this.handleFilter}>
                  <option>All</option>
                  {this.state.usernames.map((user, index)=>{
                    return (
                      <option key={index}>{user}</option>
                    )
                  })}
                </select>
              </div>
            <table  className="table table-striped ">
             <thead className="thead-dark">
               <tr>
                 <td >User</td>
                 <td>Todo</td>
               </tr>
             </thead>
             <tbody >
               {(this.state.option==="All"||this.state.option==="")?this.state.list.map((item, index)=>{
                 return (
                 <tr key={index}>
                   <td>{item.user}</td>
                   <td>{item.input}</td>
                 </tr>
                 )
                 }):this.state.filterList.map((item, index)=>{
                  return (
                  <tr key={index}>
                    <td>{item.user}</td>
                    <td>{item.input}</td>
                  </tr>
                  )
                  })}
               </tbody>
             </table>
           </div>
            </div>
        )
    }
}

export default Parent;