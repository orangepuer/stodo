import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { onItemAdded } = this.props;
    onItemAdded(this.state.label);
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={ this.onSubmit }>
        <input type="text" placeholder="What needs to be done" className="form-control" onChange={ this.onLabelChange }/>
        <button className={ 'btn btn-outline-secondary' }>Add Item</button>
      </form>
    )
  }
}