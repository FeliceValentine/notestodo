import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    todo: [],
    userInput: ""
  }


  addHandler = () => {
    let newTodo = [...this.state.todo]
    newTodo.push(this.state.userInput)
    this.setState({ todo: newTodo })
    this.setState({ userInput: "" })
  }

 removeAll = () =>{
  let newTodo = [...this.state.todo]
  newTodo.pop(this.state.userInput)
  this.setState({ todo: newTodo })
  this.setState({ userInput: "" })
 }

 remove = () =>{
  let newTodo = [...this.state.todo]
  newTodo.pop(this.state.userInput)
  this.setState({ todo: newTodo })
  this.setState({ userInput: "" })
 }
 

  render() {
    console.log(this.state)
    return (
    <div className="App">
      <h1>tasks</h1>
      {this.state.todo.map((item, index) => {
        return (
          <div className ="list" key={index}>
            <h2>{item}</h2>
            <button className="x" onClick={this.remove}>x</button>
          </div>
        )
      })}
      <input onChange={(event) => this.setState({userInput: event.target.value}) }
        value={this.state.userInput}
      />
      {}
      <button onClick={this.addHandler}>add task</button>
      <button onClick={this.removeAll}>remove all</button>
      
    </div>
  );
}
}
export default App;