import * as React from "react";
import Styles from "./HeaderMusicPlayer.module.css";

interface IHeaderMusicPlayerProps {}

const HeaderMusicPlayer: React.FunctionComponent<IHeaderMusicPlayerProps> = (
  props
) => {
  return (
    <div className={Styles.header__music__player}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              id="MDB-logo"
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
              alt="MDB Logo"
              draggable="false"
              height="30"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center"
                  aria-current="page"
                  href="#"
                >
                  <i className="fas fa-bars pe-2"></i>Menu
                </a>
              </li>
            </ul>

            <form className="d-flex align-items-center w-100 form-search">
              <div className="input-group">
                <button
                  className="btn btn-light dropdown-toggle shadow-0"
                  type="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  style={{ paddingBottom: "0.4rem" }}
                >
                  All
                </button>
                <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search"></i>
                      </span>
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-film"></i>
                      </span>
                      Titles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-tv"></i>
                      </span>
                      TV Episodes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-user-friends"></i>
                      </span>
                      Celebs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-building"></i>
                      </span>
                      Companies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-key"></i>
                      </span>
                      Keywords
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search-plus"></i>
                      </span>
                      Advanced search
                      <i className="fas fa-chevron-right ps-2"></i>
                    </a>
                  </li>
                </ul>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a href="#!" className="text-white">
                <i className="fas fa-search ps-3"></i>
              </a>
            </form>

            <ul className="navbar-nav ms-3">
              <li className="nav-item me-3">
                <a className="nav-link d-flex align-items-center" href="#!">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center me-3"
                  href="#!"
                >
                  <i className="fas fa-bookmark pe-2"></i> Watchlist
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link d-flex align-items-center" href="#!">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMusicPlayer;
