import React, { createContext, useState } from 'react';
import PRODUCTS from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const calculateSubtotal = () => {
		let total = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				total += cartItems[item] * itemInfo.price;
			}
		}

        return total;
	};

	const addItemToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeItemFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const setItemQuantity = (itemId, quantity) => {
		setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
	};

	const contextValue = { cartItems, addItemToCart, removeItemFromCart, setItemQuantity, calculateSubtotal };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
