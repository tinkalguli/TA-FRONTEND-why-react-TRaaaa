export default function Header() {
    return (
      <header className="header">
          <div className="container flex-between">
            <a href="./index.html" className="logo">
              <h2>LOGO</h2>
            </a>
            <nav className="navbar">
              <ul className="flex-between">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./index.html">About</a></li>
                <li><a href="./index.html">Contact</a></li>
              </ul>
            </nav>
          </div>
      </header>
    )
}