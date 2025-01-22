import React from 'react';
import './App.module.scss';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

import { TodoList } from './components/TodoList/TodoList';

const App = () => (
  <>
    <Header />
    <Container>
      <TodoList />
    </Container>
    <Footer />
  </>
);

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
