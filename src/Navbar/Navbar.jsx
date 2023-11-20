import './Navbar.css'
export default function Navbar() {
    return <nav className="nav">
        <a href="./" className="Site-title">Sitename</a>
        <ul>
         <li>
            <a>Page</a>
         </li>
         <li>
             <a>secondPage</a>
         </li>
        </ul>
    </nav>
}