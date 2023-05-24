import { Link } from "react-router-dom"
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           Linkin Park
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/integrantes">
                  Integrantes
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Shop">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Fans">
                  Fans
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/hooks">
                  Hook
                </Link> 
                </li>
                <li className="nav-item">
              <Link className="nav-link" to="/music">
                  Musica
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
