import React from 'react';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { Basket } from '../components/Basket';

const BasketPage = () => (
  <ProtectedRoute>
    <Basket />
  </ProtectedRoute>
);

export default BasketPage;