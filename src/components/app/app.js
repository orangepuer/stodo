import React, { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../items-status-filter";
import ItemAddForm from "../item-add-form";
import './app.css'

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink coffee', important: false, id: 1 },
      { label: 'Make awesome app', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
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
      const newItem = { label: taskName, important: false, id: this.maxId++ };
      const newArray = [ ...todoData, newItem ];
      return {
        todoData: newArray
      }
    })
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader todo={ 1 } done={ 3 } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={ todoData } onDeleted={ this.deleteItem } />

        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
}