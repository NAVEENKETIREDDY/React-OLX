import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Wrapper from "../assets/Wrappers/Navbar";

export const Navbar = () => {
  const { authState, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <Wrapper>

    
    <div className="navbar">
      <div className="name" onClick={() => navigate("/")}>
        React-OLX
      </div>
      {authState.isAuth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
    </Wrapper>
  );
};

export default Navbar;