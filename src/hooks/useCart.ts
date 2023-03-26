import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';

export function useCart() {
  const cartContext = useContext(CartContext);

  return cartContext;
}
