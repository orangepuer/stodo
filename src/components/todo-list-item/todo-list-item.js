import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      };
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";

    if(done) {
      classNames += " done"
    }

    if(important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
        <span className="todo-list-item-label" onClick={ this.onLabelClick }>{ label }</span>
        <button className="btn btn-outline-success btn-sm float-right" type="button" onClick={ this.onMarkImportant }><i className="fa fa-exclamation" /></button>
        <button className="btn btn-outline-danger btn-sm float-right" type="button"><i className="fa fa-trash-o" /></button>
      </span>
    );
  }
}