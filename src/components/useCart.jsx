import { useState, createContext, useContext } from 'react';

export const CartContext = createContext(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContext.Provider');
  }
  return context;
};

export const useCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Professional Wireless Noise-Cancelling Headphones with Premium Audio Quality",
      category: "Electronics > Audio",
      price: 299.99,
      quantity: 2,
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e126511-1765030295691.png",
      imageAlt: "Black wireless over-ear headphones with silver accents on white background showing premium build quality and cushioned ear cups"
    },
    {
      id: 2,
      name: "Ergonomic Mechanical Gaming Keyboard with RGB Backlight",
      category: "Electronics > Computers",
      price: 149.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1619683322755-4545503f1afa",
      imageAlt: "Modern mechanical keyboard with colorful RGB lighting effects displaying rainbow colors across black keys in dark gaming setup"
    },
    {
      id: 3,
      name: "Ultra-Slim Laptop Stand with Adjustable Height and Cooling Design",
      category: "Electronics > Accessories",
      price: 49.99,
      quantity: 1,
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9ea2001-1764658995251.png",
      imageAlt: "Silver aluminum laptop stand with sleek minimalist design holding MacBook at ergonomic angle on modern white desk"
    },
    {
      id: 4,
      name: "High-Performance Wireless Gaming Mouse with Precision Sensor",
      category: "Electronics > Gaming",
      price: 79.99,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1604080214833-df65352fb97a",
      imageAlt: "Black gaming mouse with blue LED accents and ergonomic grip design positioned on dark gaming mousepad"
    }]
    );
  
    const handleUpdateQuantity = (itemId, newQuantity) => {
      setCartItems((prev) =>
      prev?.map((item) =>
      item?.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
      );
    };
  
    const handleRemoveItem = (itemId) => {
      setCartItems((prev) => prev?.filter((item) => item?.id !== itemId));
    };

  
    const cartContextValue = {
      cartItems,
      setCartItems,
      handleUpdateQuantity,
      handleRemoveItem,
    };

    return cartContextValue;
};

export default useCart;