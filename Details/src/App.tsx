import React from 'react';
import './App.module.scss';
import ReactDOM from 'react-dom/client';
import Footer from 'app/Footer';
import Header from 'app/Header';
import Container from 'app/Container';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { TodoForm } from './components/TodoForm/TodoForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ErrorBoundary fallback={<h1>Ein Fehler ist aufgetreten.</h1>}>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/todo/:id" element={<TodoForm />}></Route>
            <Route path="/todo/new" element={<TodoForm />}></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
