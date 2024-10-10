import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <header id="nav-mobile" className="center hide-on-med-and-down">
            <Link className="nav-mobile-link" to="/">Home</Link>
            <Link className="nav-mobile-link" to="/about">About</Link>
            <Link className="nav-mobile-link" to="/contact">Contact</Link>

            <Link  className="nav-mobile-link" to="https://github.com/AnastasiiaKuropatkina/recipe-book-app" target='_blank' rel="noreferrer">Repo</Link>
        </header>
        </div>
    </nav>
  );
}
export { Header };
