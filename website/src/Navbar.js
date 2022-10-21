import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './css/Navbar.css'

export default function Navbar() {
  return (
    <header>
      <Link id="logo" href="#">DashKo</Link>
      <nav>
        <ul>
          <li><CustomLink to="/" id="current">Home</CustomLink></li>
          <li><CustomLink to="/about">About</CustomLink></li>
        </ul>
      </nav>
    </header>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
