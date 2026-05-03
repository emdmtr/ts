import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-placeholder">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">Головна</a>
            </li>
            <li>
              <a href="#">Тест</a>
            </li>
            <li>
              <a href="#">Про нас</a>
            </li>
            <li>
              <a href="#">Статті з порадами</a>
            </li>
            <li>
              <a href="#">Історії</a>
            </li>
          </ul>
        </nav>

        <button className="btn-outline">Увійти</button>
      </div>
    </header>
  );
}
