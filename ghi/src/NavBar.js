import {Link} from "react-router-dom";

function Navbar() {
  return(
    <nav className="navbar" id="navBackground">
      <Link to="/" className="logo">
        Home
      </Link>
      <Link to="/categories">
        Categories
      </Link>
      <Link to="/questions">
        Questions
      </Link>
      <Link to="/players">
        Players
      </Link>
    </nav>
  )
}

export default Navbar;
