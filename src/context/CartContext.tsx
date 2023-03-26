import axios from 'axios';
import { ReactNode, useState, createContext } from 'react';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  formattedPrice: string;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  products: Product[];
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  finishCart: () => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProps) {
  const [products, setProducts] = useState<Product[]>([]);

  function addItem(product: Product) {
    setProducts((state) => [...state, product]);
  }

  function removeItem(product: Product) {
    const filteredProducts = products.filter(
      (localProduct) => localProduct !== product
    );
    setProducts(filteredProducts);
  }

  async function finishCart() {
    const pricesId = products.map((product) => product.defaultPriceId);
    console.log(pricesId);
    try {
      const response = await axios.post(`/api/checkout`, {
        priceId: pricesId,
      });
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      alert('Falha no checkout!');
    }
  }

  return (
    <CartContext.Provider value={{ products, addItem, removeItem, finishCart }}>
      {children}
    </CartContext.Provider>
  );
}
