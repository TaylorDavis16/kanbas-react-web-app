import React from 'react';
import HelloRedux from './HelloRedux';
import TodoList1 from './TodoRedux';
import CounterRedux from './CounterRedux';
import AddRedux from './AddRedux';
import TodoList from './todos/TodoList';
function ReduxExamples() {
  return (
    <div>
      <h1>Redux Examples</h1>
      <HelloRedux />
      <TodoList1 />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}

export default ReduxExamples;