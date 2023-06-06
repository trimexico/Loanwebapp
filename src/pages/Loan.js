import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Slider from "@material-ui/core/Slider";

//Khai bao state này nhận đầu vào là giá trị khởi tạo của 1 state và
//trả ra 1 mảng gồm có 2 phần tử, phần tử đầu tiên là state hiện tại,
//phần tử thứ 2 là 1 function dùng để update state
const Loan = () => {
  const [values, setValues] = useState({
    fullname: "",
    cmnd: "",
    sdt: "",
    diachi: "",
    email: "",
    sex: "",
    note: "",
  });
  const handleValue = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_64wtn8f", "template_tn6vmhg", values, "9V7fwoPYJFFxdv3OB")
      .then(
        (result) => {
          toast.success("Vay tiền thành công !");
        },
        (error) => {
          toast.danger("Vay tiền thất bại !");
        }
      );
  };
  const marks = [
    {
      value: 5000000,
      label: "5 triệu",
    },
    {
      value: 10000000,
      label: "10 triệu",
    },
    {
      value: 15000000,
      label: "15 triệu",
    },
    {
      value: 20000000,
      label: "20 triệu",
    },
    {
      value: 25000000,
      label: "25 triệu",
    },
    {
      value: 30000000,
      label: "30 triệu",
    },
    {
      value: 35000000,
      label: "35 triệu",
    },
    {
      value: 40000000,
      label: "40 triệu",
    },
    {
      value: 45000000,
      label: "45 triệu",
    },
    {
      value: 50000000,
      label: "50 triệu",
    },
    {
      value: 55000000,
      label: "55 triệu",
    },
    {
      value: 60000000,
      label: "60 triệu",
    },
    {
      value: 65000000,
      label: "65 triệu",
    },
    {
      value: 70000000,
      label: "70 triệu",
    },
    {
      value: 75000000,
      label: "75 triệu",
    },
    {
      value: 80000000,
      label: "80 triệu",
    },
    {
      value: 85000000,
      label: "85 triệu",
    },
    {
      value: 90000000,
      label: "90 triệu",
    },
    {
      value: 95000000,
      label: "95 triệu",
    },
    {
      value: 100000000,
      label: "100 triệu",
    },
  ];
  function valuetext(value) {
    return `${value}`;
  }

  const [money, setMoney] = useState(0);
  useEffect(() => {
    //userEffect se duoc goi khi component co thay doi
    setValues({ ...values, money: money });
  }, [money, setValues, values]);
  const formatted = new Intl.NumberFormat().format(money) + "VND";
  const handleChangeValue = (e, newValue) => {
    setMoney(newValue);
    setValues({ ...values, money: newValue });
  };

  return (
    <div>
      <div className="container">
        <strong>Số tiền vay:</strong> {formatted}
        <Slider
          aria-label="Money"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={5000000}
          marks={marks}
          min={0}
          max={100000000}
          onChangeCommitted={handleChangeValue}
        />
        <form className="form-sm" autoComplete="off" onSubmit={sendEmail}>
          <div class="form-group">
            <label for="exampleInputHoTen">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputHoten"
              name="fullname"
              placeholder="Nhập vào Họ tên"
              onChange={handleValue} //Khi co su thay doi thi bat du lieu
            />
          </div>

          <div class="form-group">
            <label for="exampleInputCMND">CMND/CCCD</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputCMND"
              name="cmnd"
              placeholder="Nhập vào số CMND/CCCD"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPhone">Số điện thoại</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputSdt"
              name="sdt"
              placeholder="Nhập vào số điện thoại"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputAddress">Địa chỉ liên hệ</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputAddress"
              name="diachi"
              placeholder="Nhập vào địa chỉ liên hệ"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Nhập vào email của bạn"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputSex">Giới tính</label>
            <select className="form-control" name="sex" onChange={handleValue}>
              <option>?</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputNote">Ghi chú</label>
            <textarea
              name="note"
              className="form-control"
              style={{ resize: "none" }}
              rows={4}
              onChange={handleValue}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loan;
