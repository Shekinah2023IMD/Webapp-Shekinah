import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="nav">
            <a className="Site-title">Sitetitel</a>
            <ul>
                <li>
                    <Link to="/Hello">Hello</Link>
                </li>
            </ul>
            <ul>
                <li>
          <Link to="/cards" >
            Card
          </Link>   
                </li>
            </ul>
        
          <ul>
            <li>
              <Link to="/selectors">Selectors</Link>
            </li>
            <li>
              <Link to="/Hooks">Hooks</Link>
            </li>
          </ul>
          <Outlet/>
        </nav>
      );
    
}