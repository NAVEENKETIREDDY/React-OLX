import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Loading } from "../Components/Loading";
import Wrapper from "../assets/Wrappers/Login";

export const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser(email, password);
    setLoading(false);

    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <Wrapper>

     <h2>Login Page</h2>
    <div className="login-box">
    
      {loading && <Loading />}
      <form onSubmit={handleSubmit}>
       <label htmlFor="">Email</label> <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       <label htmlFor="">Password</label> <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
      
    </div>
    <div className="go-to-home-page">
        <button onClick={() => navigate("/")}>Home Page</button>
      </div>
    </Wrapper>
  );
};

export default Login;