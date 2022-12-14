import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories/:name" element={<Categories />} />
    </Routes>
  );
}

export default App;
