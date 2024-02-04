import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/images";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useUserContext } from "../utils/UserContext";
import Button from "./Button";
const Header = () => {
  const [signUpButtonTitle, setSignUpButtonTitle] = useState("Login");
  const { name, updateName } = useUserContext();
  const onLoginButtonClick = () => {
    setSignUpButtonTitle((prev) => (prev === "Login" ? "Log Out" : "Login"));
    updateName((prev) => (prev ? "" : "Samarth"));
  };
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex rounded-xl border-solid border-1 border-black p-4 shadow-md">
      <div className="w-28">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <ul className="w-full flex justify-evenly">
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

          <Button onClick={onLoginButtonClick} title={signUpButtonTitle} />
          <li>User:{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
