import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListTemplate form={<Form/>}>
          템플릿완성
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
