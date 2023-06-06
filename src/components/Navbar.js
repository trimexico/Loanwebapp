import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgr from "../assets/images/bground.jpg";
import {
  faHouse,
  faPhone,
  faEnvelope,
  faClockRotateLeft,
  faDragon,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ children }) => {
  return (
    <div className="main">
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <img className="logos" src={bgr} alt="bgr" />
              </div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col tri">
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              <FontAwesomeIcon
                icon={faDragon}
                size="2x"
                color="red"
              ></FontAwesomeIcon>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <div className="clock">
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  size="2x"
                  color="green"
                ></FontAwesomeIcon>
                <a className="btn btn-outline-success btntime">
                  <strong>
                    Hàng ngày: <br />
                    7:30 - 20:30
                  </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">GORI BANK</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" FontAwesomeIcon icon={faHouse}>
              {/* <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> */}
              <Link to="/">Trang chủ</Link>
              <Link to="/about-us">Thông tin về chúng tôi</Link>
              <Link to="/pay">Thanh toán khoản vay</Link>
              <Link to="/loan">Tiến hành đăng ký</Link>
              <Link to="/question">Câu hỏi thường gặp</Link>
              <Link to="/login">Đăng nhập</Link>
              <Link to="/register">Đăng ký</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="tri_magic"> {children}</div>
      <footer>
        <div className="row align-items-center">
          <div className="col">
            <p>Vay tiền nhanh</p>
            <p>Chính sách bảo mật</p>
          </div>

          <div className="col">
            <p>Vay tiêu dùng</p>
            <p>Điều khoản sử dụng</p>
          </div>
          <div className="col">
            <p>Vay tiền online</p>
            <p>Affiliate</p>
          </div>
          <div className="col">
            <p>Ví điện tử</p>
            <p>Global</p>
          </div>
          <div className="col">
            <p>Blog</p>
            <p>Sitemap</p>
          </div>
          <div className="col">
            <div>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </div>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              baotri7649@gmail.com
            </a>
            <div>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>0338917649</p>
            </div>
            <div></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
