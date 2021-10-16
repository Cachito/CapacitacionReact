import React from 'react';

export function Navegacion(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <a
            target="...blank"
            className="navbar-brand"
            href="http://news2.globalnewsgroup.com"
          >
            globalniú
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  target="blank"
                  className="nav-link active"
                  aria-current="page"
                  href="https://capacitarte.org"
                >
                  Capacitarte
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  href="https://github.com/"
                >
                  githb
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link dropdown-toggle"
                  href="https://google.com"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ¿google?
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="dropdown-item"
                      href="https://hotmail.com"
                    >
                      Jotmail
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="dropdown-item"
                      href="https://globalnewsgroup.atlassian.net/jira/projects"
                    >
                      jira GN
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="dropdown-item"
                      href="https://bitbucket.org"
                    >
                      bitbucket
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://bitbucket.org"
                  className="nav-link disabled"
                >
                  Disabled (Bitbucket)
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
}