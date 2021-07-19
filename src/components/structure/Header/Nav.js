import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav class="navbar my-4 py-0 navbar-expand-lg navbar-light bg-header w-100">
          <div class="container-fluid">
            <a class="navbar-brand text-white">
              IlyasglmBank
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse py-0" id="navbarNav">
              <ul class="navbar-nav py-0">
                <li class="nav-item">
                  <a class="nav-link active text-white hoverperso" aria-current="page" href="/">
                    Compte a vue
                  </a>
                </li>
                <li class="nav-item py-0">
                  <a class="nav-link text-white hoverperso" href="/compteDepargne">
                    Compte d'epargne
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
