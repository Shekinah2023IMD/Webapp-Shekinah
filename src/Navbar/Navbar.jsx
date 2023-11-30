import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
        <nav className="nav">
            <h1 className="Site-title">Sitetitel</h1>
            <ul>
                <li>
                    <Link to="/Hello">Hello</Link>
                </li>
            </ul>
          <ul>
            <li>
              <Link to="/selectors">Cards</Link>
            </li> 
            </ul>
            <ul>
            <li>
              <Link to="/Hooks">Hooks</Link>
            </li>
           </ul>
           <ul>
            <li>
              <Link to="/vacation">Vacation</Link>
            </li>
           </ul>
        </nav>
        <Outlet/>
        </>
      );

      
    
}