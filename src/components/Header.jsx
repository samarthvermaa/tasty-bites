import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/images";
import useOnlineStatus from "../utils/useOnlineStatus";
import Button from "./Button";
const Header = () => {
  const [signUpButtonTitle, setSignUpButtonTitle] = useState("Login");
  const onLoginButtonClick = () => {
    setSignUpButtonTitle((prev) => (prev === "Login" ? "Log Out" : "Login"));
  };
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Button onClick={onLoginButtonClick} title={signUpButtonTitle} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
