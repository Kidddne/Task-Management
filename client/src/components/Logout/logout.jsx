import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Điều hướng người dùng đến trang đăng nhập hoặc trang chính
    // Ví dụ: chuyển hướng người dùng đến trang đăng nhập
    history.push("/login");
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
