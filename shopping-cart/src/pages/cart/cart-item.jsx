import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { cartItems, addItemToCart, removeItemFromCart, setItemQuantity } = useContext(ShopContext);
	const { id, title, price, image } = props.data;
	return (
		<div className="cart-item">
			<div className="img-container">
				<img src={image} />
			</div>
			<div className="product-info">
                <div>
				<p>
					<b>{title}</b>
				</p>
                <p><b>${price}</b></p>
                </div>
                <div className='change-quantity'>
                <button className='decrease-quantity' onClick={() => removeItemFromCart(id)}>-</button>
                <input className='set-quantity' value={cartItems[id]} onChange={(e) => setItemQuantity(id, Number(e.target.value))}/>
                <button className='increase-quantity' onClick={() => addItemToCart(id)}>+</button>
                </div>
			</div>
		</div>
	);
};
