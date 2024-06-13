import React, { useContext } from 'react'
import logo from "../../assets/evangadi-logo-white.png"
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <section className='sticky-top custom-sticky'>
      <nav className="navbar p-3 navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={logo} alt="EvangadiLogo" /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end fw-semibold" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link active" aria-current="page" href="https://evangadi-forum-by-eliyas.vercel.app">Home</a>
              </li>
              <li className="nav-item align-items-center d-flex">
                <a className="nav-link" href="#">How It Works</a>
              </li>

              <li className="nav-item align-items-center d-flex">
                  <Link className="nav-link" to="https://evangadi-forum-by-eliyas.vercel.app/login">
                    <button className='btn btn-primary fw-bold px-5 action__btn'>
                      Sign In
                    </button>
                  </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </section>
  )
}

export default Header