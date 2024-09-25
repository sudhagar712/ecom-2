import { createContext, useState } from "react";
import { products } from "../assets/Images/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




// ..............................................Create the context..........................................................
export const ShopContext = createContext();



const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();



  

  const addToCart = (itemId, size) => {

   if(!size){
      toast.error("Please Select Product SIZE");
      return;
   }

    let cardData = structuredClone(cartItems); 

    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }
    setCartItems(cardData);
  };

 

const getCartCount = () => {
  let totalCount = 0;
  for (const items in cartItems) {
    for (const size in cartItems[items]) {
      try {
        if (cartItems[items][size] > 0) {
          totalCount += cartItems[items][size]; 
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return totalCount;
};





//................................................... Update Quantity ...................................................
const updateQuantity = (itemId,size,quantity) => {
  let cartData = structuredClone(cartItems);

  cartData[itemId][size] = quantity;
  setCartItems(cartData);
}

// ..........................................................................................................................



// .......................................getCartAmount...................................................................


const getCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => product._id === itemId);
    if (!itemInfo) continue; // Check if itemInfo exists
    for (const size in cartItems[itemId]) {
      try {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      } catch (error) {
        console.error("Error calculating total amount:", error);
      }
    }
  }
  return totalAmount;
};







//................................................................. valueeeee..............................................................................

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  // .........................................................................................................................

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
