import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='page'>
			<Navbar />
			
			<div className="container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			</div>

			<Footer />
			
	  </div>
	);
}

export default App;
