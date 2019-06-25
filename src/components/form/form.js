import React from 'react';

import { TodoContext } from '../context/todo.context';

export default class Form extends React.Component {
  static contextType = TodoContext;
  render() {
    return (
      <div>
        <form onSubmit={this.context.addItem}>
          <input
            placeholder="Add To Do List Item"
            onChange={this.context.handleInputChange}
          />
        </form>
      </div>
    );
  }
}
