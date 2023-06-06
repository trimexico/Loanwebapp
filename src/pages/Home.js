import React from "react";
import background from "../assets/images/R.jpg";
import background2 from "../assets/images/bground_vay_tien.jpg";
import background3 from "../assets/images/bground.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faDollarSign,
  faCalendar,
  fa1,
  fa2,
  fa3,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div class="container-fluid container-home ">
        <div class="row home-row">
          <div class="col-8">
            <img className="imge" src={background} />
          </div>
          <div class="col-4">
            <div className="col">
              <img className="img" src={background2} />
            </div>
            <br />
            <div className="col">
              <img className="img" src={background3} />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="layout">
          <h3>
            <strong>Thủ tục đơn giản</strong>
          </h3>
        </div>
        <div class="container1">
          <div class="row">
            <div class="col">
              <FontAwesomeIcon
                icon={faDollarSign}
                size="5x"
                color="#f08008"
              ></FontAwesomeIcon>
              <p>Khoản vay lên đến 100 triệu đồng </p>
            </div>
            <div class="col">
              <FontAwesomeIcon
                icon={faRocket}
                size="5x"
                color="#f08008"
              ></FontAwesomeIcon>
              <p>Giải ngân nhanh chóng</p>
            </div>
            <div class="col">
              <FontAwesomeIcon
                icon={faCalendar}
                size="5x"
                color="#f08008"
              ></FontAwesomeIcon>
              <p>Gia hạn chỉ với vài bước</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container2">
        <div>
          <h2>
            <strong>3 bước đơn giản để nhận tiền</strong>
          </h2>
        </div>
        <div class="row">
          <div class="col">
            <FontAwesomeIcon icon={fa1} size="5x"></FontAwesomeIcon>
            <p>Điền thông tin của bạn</p>
          </div>
          <div class="col">
            <FontAwesomeIcon icon={fa2} size="5x"></FontAwesomeIcon>
            <p>Chờ đợi quyết định từ Gori</p>
          </div>
          <div class="col">
            <FontAwesomeIcon icon={fa3} size="5x"></FontAwesomeIcon>
            <p>Rút tiền nhanh về tài khoản ngân hàng của bạn</p>
          </div>
        </div>
        <a
          class="btn btn-success"
          href="loan"
          role="button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Bạn có thể vay ngay !"
        >
          Đăng ký vay
        </a>
      </div>
      <div class="container3">
        <div>
          <h2>
            <strong>Vì sao chọn GoriBank?</strong>
          </h2>
        </div>
        <div class="row">
          <div class="col txt">
            <h3>Tiện lợi</h3>
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            <a>5 phút để đăng ký khoản vay</a>
            <br />
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            <a> Khách hàng thân thiết và Hoàn tiền</a>
          </div>
          <div class="col txt">
            <h3>Uy tín</h3>
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            <a>Bảo mật thông tin Khách hàng</a>
            <br />
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            <a>Giải pháp tài chính một cách hiện đại</a>
          </div>
          <div class="col txt">
            <h3>Mọi lúc, mọi nơi</h3>
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            <a>Hoạt động toàn quốc</a>
            <br />
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            <a>Thủ tục đăng ký hoàn toàn online</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
