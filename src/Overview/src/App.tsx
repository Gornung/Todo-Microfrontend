import React from 'react';
import './App.module.scss';
import ReactDOM from 'react-dom/client';
import { TodoList } from './components/TodoList/TodoList';
import { TodoProvider } from 'elements/TodoContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
