import React from "react";

class Child extends React.Component{
    render(){
        return(
            <div  className="mb-2">
                <input type="text" placeholder="Type Something...." className="form-control text-center border-danger text-danger" onChange={(e)=>this.props.handleInput(e.target.value)}></input>
            </div>
        )
    }
}

export default Child;