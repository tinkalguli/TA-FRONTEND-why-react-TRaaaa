import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className="navbar">
            <div className="container flex">
                <div className="flex">
                <a className="brand" href="javascipt:;">
                    <strong>Hydro</strong>
                </a>
                <nav>
                    <ul className="flex nav-menu nav-menu-primary">
                    <li>
                        <a href="javascipt:;">Home</a>
                    </li>
                    <li>
                        <a href="javascipt:;">About</a>
                    </li>
                    <li>
                        <a href="javascipt:;">Blog</a>
                    </li>
                    <li>
                        <a href="javascipt:;">Our Work</a>
                    </li>
                    <li>
                        <a href="javascipt:;">Contacts</a>
                    </li>
                    </ul>
                </nav>
                </div>
                <nav>
                <ul className="flex nav-menu nav-menu-secondary">
                    <li className="social-media-item">
                    <a href="javascipt:;">
                        <FontAwesomeIcon icon={faCoffee} />
                    </a>
                    </li>
                    <li className="social-media-item">
                    <a href="javascipt:;">
                        <FontAwesomeIcon icon={faCoffee} />
                    </a>
                    </li>
                    <li className="social-media-item">
                    <a href="javascipt:;">
                        <FontAwesomeIcon icon={faCoffee} />
                    </a>
                    </li>
                    <li>
                    <a className="btn btn-primary" href="javascipt:;"> Sign in / Join </a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    )
}