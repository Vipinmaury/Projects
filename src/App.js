import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import SaleOrdersPage from './pages/SaleOrdersPage';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/orders" element={isAuthenticated ? <SaleOrdersPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;