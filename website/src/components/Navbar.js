import { CustomLink } from './Links';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
	return (
		<header className='header'>
			<Link id='logo' href='#'>
				LVLUP
			</Link>
			<nav>
				<ul>
					<li>
						<CustomLink to='/'>Home</CustomLink>
					</li>
					<li>
						<CustomLink to='/about'>About</CustomLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
