import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="hd mw">
        <nav className="gnb">
          <Link to href="/" className="logo" alt="logo">
            <img src="/img/logo.svg" />
          </Link>
          <div className="menu">
            <Link to="/Shop">Shop</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Ourstory">Our Story</Link>
          </div>
        </nav>
        <div className="person">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
