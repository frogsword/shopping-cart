import { Link } from 'react-router-dom';
import { House, Basket } from '@phosphor-icons/react';

import './navbar.css';

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="links">
				<Link to="/">
					<House size={32} />
				</Link>
				<Link to="/cart">
					<Basket size={32} />
				</Link>
			</div>
		</div>
	);
};
