import './css/Footer.css';

export default function Footer() {
	return (
		// look for icons

		<footer>
			<ul class='icons'>
				<li>
					<a href='#'>
						<ion-icon name='logo-facebook'></ion-icon>
					</a>
				</li>
				<li>
					<a href='#'>
						<ion-icon name='logo-instagram'></ion-icon>
					</a>
				</li>
			</ul>
			<ul class='menu'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Partners</a>
				</li>
				<li>
					<a href='#'>Specialties</a>
				</li>
				<li>
					<a href='#'>Contact Us</a>
				</li>
			</ul>
			<div class='footer-copyright'>
				<p>Copyright @ 2022 All Rights Reserved.</p>
			</div>
		</footer>
	);
}
