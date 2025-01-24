// @ts-expect-error expecting explicit import
import React from 'react';
import './App.module.scss';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <>Hallo Details</>;
};

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
