import {CustomLink} from './Links.js'
import {Link} from 'react-router-dom'
import './css/Navbar.css'

export default function Navbar() {
  return (
    <header>
      <Link id="logo" href="#">LVLUP</Link>
      <nav>
        <ul>
          <li><CustomLink to="/" id="current">Home</CustomLink></li>
          <li><CustomLink to="/about">About</CustomLink></li>
        </ul>
      </nav>
    </header>

  )
}
