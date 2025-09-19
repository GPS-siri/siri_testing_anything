import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // TODO: 기능 개발 기간 지나면 삭제 할 것 - React.StrictMode
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
