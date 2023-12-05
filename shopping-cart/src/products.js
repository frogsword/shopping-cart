const res = await fetch('https://fakestoreapi.com/products', { mode: 'cors' })
	.then(res => res.json())

const PRODUCTS = res
export default PRODUCTS;