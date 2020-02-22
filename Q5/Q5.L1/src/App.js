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
      <div className="container text-center shadow border border-dark rounded-lg bg-info py-2 mt-5">
        <h2 classname=" ">HI there, i am created by Using command "create-react-app appName"</h2>
      </div>
    )
  }
}

export default App;
