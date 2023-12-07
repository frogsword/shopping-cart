import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
	const { cartItems, addItemToCart, removeItemFromCart, setItemQuantity } = useContext(ShopContext);
	const { id, title, price, image } = props.data;
	return (
		<div className="cart-item">
			<div className="img-container">
				<img src={image} />
			</div>
			<div className="cart-item-info">
				<div className='title-price'>
					<p>
						<b>{title}</b>
					</p>
					<p>
						${price}
					</p>
				</div>
				<div className="change-quantity">
				<label>Qty: </label>
					<button
						className="decrease-quantity"
						onClick={() => removeItemFromCart(id)}>
						<b>-</b>
					</button>
					<p className='display-quantity'> {cartItems[id]} </p>
					<button
						className="increase-quantity"
						onClick={() => addItemToCart(id)}>
						<b>+</b>
					</button>
				</div>
			</div>
		</div>
	);
};
