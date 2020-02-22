import React from "react";
import Child from "./child";

class Parent extends React.Component{
    
        state={
          input:"",
          usernames:["Manoj", "Sumit", "Ajay", "Sunil"],
          user:"Manoj",
          list:[]
        }
      
        handleInput = (input) =>{
          this.setState({
            input:input
          })
        }

        handleOption = (user) =>{
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
          })
        }

    render(){
        return(
            <div>
                <Child
                  input={this.state.input}
                  getData={this.getData}
                  usernames={this.state.usernames}
                  handleInput={this.handleInput}
                  handleOption={this.handleOption}
                />
                <div className="mt-4" >
                 <table  className="table table-striped ">
                  <thead >
                    <tr>
                      <td >User</td>
                      <td>Todo</td>
                    </tr>
                  </thead>
                  <tbody >
                    {this.state.list.map((item, index)=>{
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