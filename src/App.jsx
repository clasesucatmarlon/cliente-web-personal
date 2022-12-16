import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminRouter, WebRouter } from './router';

export default function App() {
  return (
    <>
      <h1>Web personal</h1>
      <BrowserRouter>
        <AdminRouter />
        <WebRouter />
      </BrowserRouter>
    </>
  )
}
