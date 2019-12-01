import React, { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../items-status-filter";
import ItemAddForm from "../item-add-form";
import './app.css'

export default class App extends Component {
  maxId = 100;

  createTodoItem = (label) => {
    return { label: label, important: false, done: false, id: this.maxId++ }
  };

  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Make awesome app'),
      this.createTodoItem('Have a lunch')
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1) ];
      return {
        todoData: newArray
      }
    })
  };

  addItem = (taskName) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(taskName);
      const newArray = [ ...todoData, newItem ];
      return {
        todoData: newArray
      }
    })
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [ ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1) ];
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    })
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader todo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={ todoData } onDeleted={ this.deleteItem } onToggleImportant={ this.onToggleImportant }
                  onToggleDone={ this.onToggleDone } />

        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
}