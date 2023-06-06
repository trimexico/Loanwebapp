import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faPhoneSquareAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import vay from "../assets/images/vay-tien-online.jpg";
import vay1 from "../assets/images/vay-tien-online-1.jpg";
import vay2 from "../assets/images/vay-tien-online-nhanh.png";
const About = () => {
  return (
    <div className="container1 content">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "22rem" }}>
            <img
              className="card-img-top"
              src={vay2}
              style={{ height: "200px", weight: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Đa dạng gói vay</h3>
              <p className="card-text">
                Đa dạng gói vay phù hợp với mọi đối tượng khách hàng
              </p>
              <a className="btn btn-primary" href="loan">
                Vay nhanh
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "22rem" }}>
            <img
              className="card-img-top"
              src={vay1}
              style={{ height: "200px", weight: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Kỳ hạn linh hoạt</h3>
              <p className="card-text">
                Kỳ hạn thanh toán linh hoạt phù hợp với khả năng của bạn
              </p>
              <a className="btn btn-primary" href="loan">
                Vay nhanh
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "22rem" }}>
            <img
              className="card-img-top"
              src={vay}
              style={{ height: "200px", weight: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Minh bạch</h3>
              <p className="card-text">
                Lãi suất và phí vay được công khai rõ ràng, minh bạch
              </p>
              <a className="btn btn-primary" href="loan">
                Vay nhanh
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sup">
        <h2>
          <strong>GORI đã hỗ trợ</strong>
        </h2>
      </div>

      <div class="container2">
        <div class="row">
          <div class="col">
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="5x"
              color="#33cc00"
            ></FontAwesomeIcon>
            <p>23 390</p>
            <p>Hồ sơ được duyệt</p>
          </div>
          <div class="col">
            <FontAwesomeIcon
              icon={faPhoneSquareAlt}
              size="5x"
              color="#33cc00"
            ></FontAwesomeIcon>
            <p>1 340</p>
            <p>Đăng ký trong ngày</p>
          </div>
          <div class="col">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              size="5x"
              color="#33cc00"
            ></FontAwesomeIcon>
            <p>290</p>
            <p>Hồ sơ đang chờ duyệt</p>
          </div>
        </div>
        <a
          class="btn btn-danger"
          href="loan"
          role="button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Bạn có thể vay ngay !"
        >
          Đăng ký vay
        </a>
      </div>
    </div>
  );
};

export default About;
