import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Repository from 'pages/Repository';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
