import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './Portal.module.scss';
import { TodoList } from 'overview/TodoList';
import { TodoProvider } from 'elements/TodoContext';

import { ErrorBoundary, Container, Footer, Header } from 'elements/Elements';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';

const TodoForm = React.lazy(() => import('details/TodoForm'));

const LazyLoadedForm = () => {
  return (
    <Suspense fallback="Loading...">
      <ErrorBoundary>
        <TodoForm />
      </ErrorBoundary>
    </Suspense>
  );
};

export const Portal = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Header />
        <Container>
          <Suspense fallback="Laden...">
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/todo/:id" element={<LazyLoadedForm />} />
            </Routes>
            <ErrorBoundary>
              <Sidebar />
            </ErrorBoundary>
          </Suspense>
        </Container>
        <Footer />
      </TodoProvider>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('portal');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<Portal />);
