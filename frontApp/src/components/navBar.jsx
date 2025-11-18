import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex justify-content-center">
                <a className="navbar-brand d-flex align-items-center me-4" href="#">
                    <img src={logo} alt="Fin-Track Logo" height="70" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <Link to="/" className="nav-item nav-link">
                            <li className="nav-item nav-link">Inicio</li>
                        </Link>
                        <Link to="/" className="nav-item nav-link">
                            <li className="nav-item nav-link">Sobre Nosotros</li>
                        </Link>
                        <Link to="/" className="nav-item nav-link"  >
                            <li className="nav-item nav-link">Consejos</li>
                        </Link>
                        <Link to="/" className="nav-item nav-link">
                            <li className="nav-item nav-link">Contacto</li>
                        </Link>
                    </ul>

                    <div className="d-flex">
                        <Link to="/login">
                            <a href="#" className="btn bg-white text-dark me-2">Iniciar sesión</a>
                        </Link>

                        <a href="#" className="btn btn-info text-white">Crear cuenta</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}