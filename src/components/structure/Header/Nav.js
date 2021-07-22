import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar my-4 py-0 navbar-expand-lg navbar-light bg-header w-100">
          <div className="container-fluid">
            <a href='/' className="navbar-brand text-white">
              IlyasglmBank
            </a>
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
            <div className="collapse navbar-collapse py-0" id="navbarNav">
              <ul className="navbar-nav py-0">
                <li className="nav-item">
                  <a className="nav-link active text-white hoverperso" aria-current="page" href="/">
                    Compte a vue
                  </a>
                </li>
                <li className="nav-item py-0">
                  <a className="nav-link text-white hoverperso" href="/historique">
                    Historique de transactions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
