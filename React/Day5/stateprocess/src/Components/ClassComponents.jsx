// Make the class component and print the Value on the screen.
// Add the Life cycle methods on the console.

import { Component } from "react";

class ClassComponents extends Component{

  constructor(){
    super()

   this.state={value:"what is class components?"}
  }
  click = ()=>{
    this.setState({value:"Before React Hooks were introduced, developers used class components to create stateful components in React. A class component is a JavaScript class that extends React.Component and contains a render() method that returns JSX."})
  }
  componentDidMount(){
    console.log("componentDidMount:Component mounted!")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate:Component updated")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount:component unmounted")
  }
 
  render(){

    return(
            <>
            <div className="bg-green-800 text-center">
            <h1>{this.state?.value}</h1>
            <button onClick={this.click} className="border-green-400 mt-5 p-2 hover:scale-95 rounded-md bg-green-400 ">Update Button</button>
            </div>
            </>

        )
    }
}
export default ClassComponents