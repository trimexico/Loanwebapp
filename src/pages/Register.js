import React from "react";

const Register = () => {
  return (
    <div>
      <div class="container mt-4">
        <div class="card">
          <div class="card-header">Register Form</div>
          <div class="card-body trii">
            <form action="/auth/register" method="POST">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Nhập tên"
                />
              </div>
              <div class="form-group">
                <label for="name">CMND/CCCD</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Nhập số CMND/CCCD"
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Nhập địa chỉ email"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div class="form-group">
                <label for="passwordConfirm">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="Xác nhận lại mật khẩu"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
