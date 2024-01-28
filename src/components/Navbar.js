import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <nav className="navbar">
          
          <Link to="/" className="navbar1">Home</Link>
        
          <Link to="/add-blog" className="navbar2">Add Blog</Link>
        
    </nav>
  );
};

export default Navbar;