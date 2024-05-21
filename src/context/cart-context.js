import {createContext, useState, useEffect} from 'react'
import { toast } from 'sonner';

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
 }
 
 export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
     return getStorageValue(key, defaultValue);
  });
 
  useEffect(() => {
     localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
 
  return [value, setValue];
 };

export const CartContext = createContext({
  cart: [],
  priceSum: 0,
  addToCart: () => {},
  removeItem: () => {},
})

export default function CartContextProvider ({ children }) {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [priceSum, setPriceSum] = useState(0);

  const addToCart = (item) => {
    toast.success('Dodano do koszyka ' + item.name)
    setCart((prev) => [...prev, item])
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  useEffect(() => {
    const prices = cart.map((item) => Number(item.cena) * Number(item.quantity))
    const sum = prices.reduce(
      (acc, curr) => acc + curr,
      0
    )
    setPriceSum(sum)
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      priceSum,
      addToCart,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  )
} 