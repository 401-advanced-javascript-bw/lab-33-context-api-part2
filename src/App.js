import React from 'react';

import TodoContext from './components/context/todo.context';

// import ToDo from './components/todo/todo.js';
import Form from './components/form/form.js';
import List from './components/list/list.js';

import Counter from './components/counter/counter.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TodoContext>
          <section className="todo">
            <Counter />
            <Form />
            <List />
            {/* <ToDo /> */}
          </section>
        </TodoContext>
      </>
    );
  }
}
