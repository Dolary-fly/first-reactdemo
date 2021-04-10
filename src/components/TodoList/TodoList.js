import React from "react";
import List from './List';
import AddTo from "./AddTo";
import "./todolist.css";
export default class TodoList extends React.Component {

  state = {
    todo: [
      { id: 1, text: 'html', done: true },
      { id: 2, text: 'css', done: false },
      { id: 3, text: 'javascript', done: false }
    ],
    newId: 4
  }

  addTo = text => {
    //setState改变数组地址：方法1：给一个新的数组;方法2：filter或map
    this.setState({
      todo: [
        ...this.state.todo,
        {
          id: this.state.newId,
          text,
          done: false
        }
      ],
      newId: this.state.newId + 1
    }

    )
  }

  doneChange = (id) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <AddTo addTo={this.addTo}></AddTo>
        <List todo={this.state.todo} doneChange={this.doneChange}></List>
      </div>
    )
  }
}