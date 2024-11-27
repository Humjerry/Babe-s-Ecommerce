import React, { createContext, useState } from 'react'
 export const cartContext = createContext();

 function CartProvider({children}) {
const [cart, setCart] = useState([])

const addtoCart= (goods) => {
	if (cart.length>0) {
		setCart((prev)=>{
			if (prev.some((item) => item.id===goods.id)) {
				return prev;
			}else{
				return [...prev, goods];
			}
		});
	}else{
		setCart([goods]);
	}
}
  return (
	<div>
	  <cartContext.Provider value={{cart, setCart, addtoCart}}>
		{children}
	  </cartContext.Provider>
	</div>
  )
}
export default  CartProvider ;