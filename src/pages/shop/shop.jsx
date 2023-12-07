import React from 'react';
import PRODUCTS from '../../fetchProducts';
import { Product } from './product';
import './shop.css';

export const Shop = () => {
	console.log(PRODUCTS)
	return (
		<div className="shop">
			<div className="shop-title">
				<h1>Products</h1>
			</div>
			<div className="products">
				{PRODUCTS.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
};
