import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id : 0, text: '리액트 소개', checked: false },
      { id : 1, text: '리액트 소개', checked: true },
      { id : 2, text: '리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleKey

  render() {
    return (
      <div className="App">
        <TodoListTemplate form={<Form/>}>
          <TodoItemList/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
