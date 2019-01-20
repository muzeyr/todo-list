import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';


class App extends Component {
state={
  todos:[
  {id:1,icerik:"Ekmek al"},
  {id:2,icerik:"Kod Yaz"},
  {id:3,icerik:"Spora Git"},

  ]

}

  deleteTodo=(id)=>{
    console.log(id);
    const list = this.state.todos.filter(todo=>{
      return todo.id !== id

    });
    this.setState({todos:list});
  }
  addTodo=(todo)=>{
    todo.id= Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({todos:todos});

  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text"> Yapılacaklar</h1>
        <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
        <AddForm  addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
