import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MY EVENT FINDER</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-events" style={{ 
          color: 'white', 
          backgroundColor: '#d20e11',
          borderRadius: '8px' 
        }}>Add Events</Link>
      </div>
    </nav>
  );
}
export default Navbar;