import React, { useState } from "react";
import Helmet from "./Helmet";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useUserAuth } from "../context/UserAuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Helmet title="Đăng ký">
      <div className="register">
        <div className="register__name">Register</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group">
            <input
              type="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button size="sm">Đăng Ký</Button>
        </form>
        {error && <span className="error">{error}</span>}
        <div className="login__regis">
          <Link to="/login">Back to login page?</Link>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
