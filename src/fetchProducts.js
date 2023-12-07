const res = await fetch('https://fakestoreapi.com/products', { mode: 'cors' })
	.then(res => res.json())

//all products not in electronics category are added to PRODUCTS array
let PRODUCTS = [];
const temp = res
temp.forEach((e) => {
	if (e.category !== "electronics") {
		PRODUCTS.push(e)
	}
});

export default PRODUCTS;