import { Link, useLocation } from "react-router-dom";
function Nav() {
  // cost location = useLocation();
  // {"Pathname"./Labs/Assignment3......Search..hash..state...null...key}
  // const { pathname } = location;
  // below is simplified version of above
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/hello"
        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
      >
        Hello
      </Link>
      <Link
        to="/Labs/A3"
        className={`nav-link ${pathname.includes("A3") ? "active" : ""}`}
      >
        A3
      </Link>
      <Link
        to="/Labs/A4"
        className={`nav-link ${pathname.includes("A4") ? "active" : ""}`}
      >
        A4
      </Link>

      <Link
        to="/Labs/A5"
        className={`nav-link ${pathname.includes("A5") ? "active" : ""}`}
      >
        A5
      </Link>
      <Link to="/project/index.js" className="nav-link">
        A6 MONGO
      </Link>

      <Link
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
        to="/Kanbas"
      >
        Kanbas
      </Link>
    </nav>
  );
}
export default Nav;

// useLocation}  -> highlighting whenever its in that url page the nav tab- just like Kanvas is highlighted when you are on that page.
