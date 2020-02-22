import React from "react";

class Child extends React.Component{
    render(){
        return(
            <div  className="mb-2">
                <input type="text" value={this.props.input} placeholder="Type Something...." className="form-control text-center border-dark text-danger" onChange={(e)=>this.props.handleInput(e.target.value)} required></input>
                {this.props.input===""?null:<button className="btn btn-success mt-2 mr-3" onClick={this.props.getData}>Add</button>}
                <select className="btn btn-dark text-white mt-2" onChange={(e)=>this.props.handleUser(e.target.value)} value={this.props.user}>
                    {this.props.usernames.map((user, index)=>{
                        return (
                        <option key={index}>{user}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default Child;