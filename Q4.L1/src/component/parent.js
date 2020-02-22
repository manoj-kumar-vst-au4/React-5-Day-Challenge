import React from "react";
import Child from "./child";

class Parent extends React.Component{
    
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
            <div>
                <Child
                handleInput={this.handleInput}
                />
                 <div className={this.state.input===""?null:"border border-success text-success py-1 rounded-lg mb-2 "} >
                    <span >{this.state.input}</span>
                </div>
            </div>
        )
    }
}

export default Parent;