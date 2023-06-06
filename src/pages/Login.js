import React from "react";

const Login = () => {
  return (
    <div class="container mt-4">
      <div class="card-header">
        <strong>Login Form</strong>
      </div>
      <div class="card-body">
        <form className="form-login" action="/auth/login" method="POST">
          <div class="form-group ">
            <label for="email">
              <strong>Email Address</strong>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Nhập địa chỉ email"
            />
          </div>
          <div class="form-group">
            <label for="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
