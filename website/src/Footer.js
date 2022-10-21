import {CustomLink} from './Links.js'
import './css/Footer.css';

// change href to links

export default function Footer() {
	return (
		// look for icons

		<footer>
			<ul class='icons'>
				<li>
					<CustomLink to=''>
						<ion-icon name='logo-facebook'></ion-icon>
					</CustomLink>
				</li>
				<li>
					<CustomLink to=''>
						<ion-icon name='logo-instagram'></ion-icon>
					</CustomLink>
				</li>
			</ul>
			<ul class='menu'>
				<li>
					<CustomLink to=''>Home</CustomLink>
				</li>
				<li>
					<CustomLink to=''>About</CustomLink>
				</li>
				<li>
					<CustomLink to=''>Partners</CustomLink>
				</li>
				<li>
					<CustomLink to=''>Specialties</CustomLink>
				</li>
				<li>
					<CustomLink to=''>Contact Us</CustomLink>
				</li>
			</ul>
			<div class='footer-copyright'>
				<p>Copyright @ LVLUp 2022 All Rights Reserved.</p>
			</div>
		</footer>
	);
}
