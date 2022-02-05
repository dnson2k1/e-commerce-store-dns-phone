import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Helmet from "./Helmet";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";
import FacebookLogin from "react-facebook-login";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, googleSignIn, facebookSignIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <Helmet title="Đăng nhập">
      <div className="login">
        <div className="login__name">Login</div>
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
          <Button size="sm">Đăng nhập</Button>
          <div className="google__btn" onClick={handleGoogleSignIn}>
            <GoogleButton type="dark" />
          </div>
          <div className="facebook__btn">
            <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              icon="fa-facebook"
              onClick={handleFacebookSignIn}
            />
          </div>
        </form>
        {error && <span className="error">{error}</span>}
        <div className="login__regis">
          Do not have an account? <Link to="/register">Create account</Link>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
