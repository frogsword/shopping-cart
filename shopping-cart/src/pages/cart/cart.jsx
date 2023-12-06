import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PRODUCTS from '../../fetchProducts';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css';

export const Cart = () => {
	const { cartItems, calculateSubtotal } = useContext(ShopContext);
	const navigate = useNavigate();

	return (
		<div className="cart">
			<div>
				<h1>Cart</h1>
			</div>
			<div className="cart-items">
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem data={product} />;
					}
				})}
			</div>

			{calculateSubtotal() > 0 ? (
				<div className="checkout">
					<p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
					<button onClick={() => navigate('/')}>Continue Shopping</button>
					<button>Checkout</button>
				</div>
			) : (
				<h1>Your Cart is Empty</h1>
			)}
		</div>
	);
};
