import React from "react";
import "./login.css";

const Login = () => {
  // B1. Bắt sự kiện khi submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // B2: Lấy thông tin từ form
    const admin = getDataForm();

    // B3: validate
    const error = validate(admin);
    if (error.status) {
      // render lỗi và kết thúc
      renderError(error);
      return;
    } else {
      // render không lỗi
    }

    // B4: Lấy data từ localStorage để kiểm tra trùng lặp

    const adminsDB = JSON.parse(localStorage.getItem("admins")) ?? [];

    //  B5: Kiểm tra email đã đăng ký có trong localStorage
    let isLogin = false;
    adminsDB.forEach((item) => {
      if (item.email === admin.email && item.password === admin.password) {
        isLogin = true;
      }
    });

    if (isLogin) {
      //   B6: Đẩy dữ liệu lên localStorage
      localStorage.setItem("AdminLogin", JSON.stringify(admin));
      //   Chuyển sang home
      // window.location = "AIGenerator/home/Homepage.html";
    } else {
      error.status = true;
      error.emailMsg =
        "Email đã tồn tại, vui lòng đăng nhập hoặc đăng ký email mới";
      renderError(error);
    }
  };

  //   get data form
  const getDataForm = () => {
    const emailValue = document.querySelector("#email").value;
    const passwordValue = document.querySelector("#password").value;

    return {
      email: emailValue,
      password: passwordValue,
    };
  };

  //   validate info
  const validate = (data) => {
    const error = {
      status: false,
      emailMsg: "",
      passwordMsg: "",
      confirmPasswordMsg: "",
    };
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!data.email.match(re)) {
      error.status = true;
      error.emailMsg = "Không đúng định dạng email. Vui lòng nhập lại";
    }

    if (data.password.length < 8) {
      error.status = true;
      error.passwordMsg = "Password không được dưới 8 ký tự. Vui lòng nhập lại";
    }
    return error;
  };

  const renderError = () => {};

  return (
    <section>
      <div className="form-login">
        <div className="form-value">
          <form id="MainForm2" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-box">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" id="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input type="password" id="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Log in</button>
            <div className="move-to-regist">
              <a href="./register.html">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
