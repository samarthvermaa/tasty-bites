import { useState } from "react";
import { logo } from "../utils/images";
import Button from "./Button";
const Header = () => {
  const [signUpButtonTitle, setSignUpButtonTitle] = useState("Login");
  const onLoginButtonClick = () => {
    setSignUpButtonTitle((prev) => (prev === "Login" ? "Log Out" : "Login"));
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <Button onClick={onLoginButtonClick} title={signUpButtonTitle} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
