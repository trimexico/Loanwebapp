import React from "react";
import vietin from "../assets/images/vietinbank.png";
import shb from "../assets/images/SHB.png";
import techcom from "../assets/images/Techcombank.png";
import vietcom from "../assets/images/vietcombank.png";
import bidv from "../assets/images/LogoBIDV.png";
import Sacombank from "../assets/images/Sacombank.png";
import MB from "../assets/images/MBBank.png";
import ocb from "../assets/images/OCB.png";
import seA from "../assets/images/SeABank.png";
import ocean from "../assets/images/OceanBank.png";
import tp from "../assets/images/TPBank.png";
import vp from "../assets/images/VPBank.png";
const Pay = () => {
  return (
    <div class="container">
      <div className="partner">
        Đối tác
        <br /> Chúng tôi chỉ hợp tác với các đối tác là tổ chức tài chính uy tín
        tại Việt Nam.
      </div>
      <div class="row">
        <div class="col">
          <a href="https://www.sacombank.com.vn/Pages/default.aspx">
            <img className="imagePay" src={Sacombank} alt="sacombank" />
          </a>
        </div>
        <div class="col">
          <a href="https://www.bidv.com.vn/">
            <img className="imagePay" src={bidv} alt="bidv" />
          </a>
        </div>
        <div class="col">
          <a href="https://www.vietinbank.vn/web/home/vn/index.html">
            <img className="imagePay" src={vietin} />
          </a>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col">
          <a href="https://www.shb.com.vn/">
            <img className="imagePay" src={shb} />
          </a>
        </div>
        <div class="col">
          <a href="https://techcombank.com/khach-hang-ca-nhan">
            <img className="imagePay" src={techcom} />
          </a>
        </div>
        <div class="col">
          <a href="https://portal.vietcombank.com.vn/Pages/Home.aspx?devicechannel=default">
            <img className="imagePay" src={vietcom} />
          </a>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col">
          <a href="https://www.mbbank.com.vn/">
            <img className="imagePay" src={MB} />
          </a>
        </div>
        <div class="col">
          <a href="https://www.ocb.com.vn/vi/ca-nhan">
            <img className="imagePay" src={ocb} />
          </a>
        </div>
        <div class="col">
          <a href="https://www.seabank.com.vn/">
            <img className="imagePay" src={seA} />
          </a>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col">
          <a href="http://oceanbank.vn/">
            <img className="imagePay" src={ocean} />
          </a>
        </div>
        <div class="col">
          <a href="https://tpb.vn/">
            <img className="imagePay" src={tp} />
          </a>
        </div>
        <div class="col">
          <a href="https://www.vpbank.com.vn/ca-nhan">
            <img className="imagePay" src={vp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pay;
