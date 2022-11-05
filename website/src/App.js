import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import CreatePost from './pages/CreatePost';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/createPost' element={<CreatePost />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
