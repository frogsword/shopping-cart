const res = await fetch('https://fakestoreapi.com/products', { mode: 'cors' })
	.then(res => res.json())

const PRODUCTS = res
export default PRODUCTS;

// import { useEffect } from 'react';
// import img from './assets/img.jpeg'

// useEffect(() => {
// 	fetch('https://fakestoreapi.com/products/category/electronics', {mode:"cors"})
// 	.then(res=>res.json())
// 	.then(json=>console.log(json))
// 	.then(json=>PRODUCTS=json)
// 	.then(PRODUCTS=>console.log(PRODUCTS))
// }, [])

// export let PRODUCTS = [
// 	{
// 		id: 1,
// 		productName: 'product1',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 2,
// 		productName: 'product2',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 3,
// 		productName: 'product3',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 4,
// 		productName: 'product4',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 5,
// 		productName: 'product5',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 6,
// 		productName: 'product6',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 7,
// 		productName: 'product7',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 8,
// 		productName: 'product8',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 9,
// 		productName: 'product9',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 10,
// 		productName: 'product10',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 11,
// 		productName: 'product11',
//         price: 10.00,
//         productImage: img,
// 	},
//     {
// 		id: 12,
// 		productName: 'product12',
//         price: 10.00,
//         productImage: img,
// 	},
// ];
