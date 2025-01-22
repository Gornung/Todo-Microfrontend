// @ts-expect-error expecting explicit import
import React from 'react';
import './App.module.scss';
import ReactDOM from 'react-dom/client';
import TodoForm from './components/TodoForm/TodoForm';
import { BrowserRouter } from 'react-router-dom';
import { TodoProvider } from 'elements/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <TodoForm />
      </BrowserRouter>
    </TodoProvider>
  );
};

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
