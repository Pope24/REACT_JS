import * as React from "react";
import Styles from "./SideBarMusicPlayer.module.css";

interface ISideBarMusicPlayerProps {}

const SideBarMusicPlayer: React.FunctionComponent<ISideBarMusicPlayerProps> = (
  props
) => {
  return (
    <div className={Styles.side__bar_musicPlayer}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline text-light">Menu</span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-light">
                Cá nhân
              </span>
            </a>
          </li>
          <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-speedometer2"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-light">
                Khám phá
              </span>{" "}
            </a>
            <ul
              className="collapse show nav flex-column ms-1"
              id="submenu1"
              data-bs-parent="#menu"
            >
              <li className="w-100 border-bottom">
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline text-light">
                    Playlist
                  </span>{" "}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline text-light">
                    Radio
                  </span>{" "}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-table"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-light">
                Theo dõi
              </span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle "
            >
              <i className="fs-4 bi-bootstrap"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-light">
                Nhạc mới
              </span>
            </a>
            <ul
              className="collapse nav flex-column ms-1"
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline text-light">
                    Thể loại
                  </span>{" "}
                  1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline text-light">
                    Top 100
                  </span>{" "}
                  2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-grid"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-light">
                Nghệ sĩ
              </span>{" "}
            </a>
            <ul
              className="collapse nav flex-column ms-1"
              id="submenu3"
              data-bs-parent="#menu"
            ></ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-people"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-light">
                #zingchart
              </span>{" "}
            </a>
          </li>
        </ul>
        <div className="dropdown pb-4">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"> */}
            <span className="d-none d-sm-inline mx-1 text-light">
              Chính Pope
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarMusicPlayer;
