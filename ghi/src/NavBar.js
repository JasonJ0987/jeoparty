import {Link} from "react-router-dom";

function Navbar() {
  return(
    <nav className="navbar">
      <Link to="/" className="logo">
        Home
      </Link>
      <Link to="/categories">
        Categories
      </Link>
      <Link to="/questions">
        Questions
      </Link>
    </nav>
  )
}

export default Navbar;
