import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>

			<Footer />
	  </>
	);
}

export default App;
