import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="loginPage">
      <p>Welcome</p>
      <button className="enter-btn" onClick={handleButtonClick}>
        Enter
      </button>
    </div>
  );
}

export default Login;