import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
export const Product = (props) => {
	
	const { cartItems, addItemToCart } = useContext(ShopContext);
	const { id, title, price, image } = props.data;
	const cartItemAmount = cartItems[id]

	return (
		<div className="product">
			<div className="img-container">
				<img src={image} />
			</div>
			<div className="product-info">
				<p>
					<b>{title}</b>
					<p>${price}</p>
				</p>
				<button className="add-to-cart-btn" onClick={() => addItemToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
			</div>
		</div>
	);
};
