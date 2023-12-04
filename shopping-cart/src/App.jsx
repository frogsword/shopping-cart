import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import { Navbar } from './components/navbar/Navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import './App.css';

function App() {
	return (
		<ShopContextProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Shop />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
					/>
				</Routes>
			</Router>
		</ShopContextProvider>
	);
}

export default App;
