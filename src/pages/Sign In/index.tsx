import React, { FormEvent, useContext, useEffect, useState } from "react";
import { FlexChild1, FlexChild2, ParentFlex, StyledButton } from "./style";
import banner from "../../assets/signIn.png";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import divider from "../../assets/divider.png";
import { TextField, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/auth/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/auth.action";

const SignIn = () => {
  const { user } = useSelector((state: any) => state.AuthReducer);

  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     setAuthenticated(true);
    //     navigate("/");
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = password.length >= 6;

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user]);

  return (
    <ParentFlex>
      <FlexChild1>{/* <img src={banner} alt="banner" /> */}</FlexChild1>
      <FlexChild2>
        <h1 style={{ letterSpacing: "2%" }}>Sign In Using</h1>
        <button style={{ width: "336px", fontSize: "20px" }}>
          {" "}
          <img src={google} alt="google" /> Sign In With Google
        </button>
        <button style={{ width: "336px", fontSize: "20px" }}>
          <img src={fb} alt="fb" /> Sign In With Facebook
        </button>
        <br />
        <span>
          <img src={divider} alt="divider" />
        </span>
        <br />

        <form style={{ width: "75%" }} onSubmit={handleSubmit}>
          <label>Email</label>
          <input value={email} onChange={handleEmailChange} required />
          {email && !isEmailValid && (
            <p className="validation-message">Invalid email format</p>
          )}

          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "-15px",
            }}
          >
            Password{" "}
            <p
              onClick={handleShowPasswordToggle}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {showPassword ? (
                <VisibilityOff style={{ marginBottom: "-6px" }} />
              ) : (
                <Visibility style={{ marginBottom: "-6px" }} />
              )}
            </p>
          </label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {password && !isPasswordValid && (
            <p className="validation-message">
              Password should be at least 6 characters
            </p>
          )}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "5px",
              fontSize: "medium",
              color: "#FFBA3F",
              cursor: "pointer",
            }}
          >
            <span></span>{" "}
            <p style={{ margin: "0px" }} className="fa">
              Forget your password
            </p>
          </label>

          <StyledButton
            type="submit"
            onClick={(e) => handleLogin(e)}
            disabled={!isEmailValid || !isPasswordValid}
            style={{ backgroundColor: "#FFBA3F", cursor: "pointer" }}
          >
            Log In
          </StyledButton>
          <p>
            Don’t have an account?{" "}
            <b>
              <Link to={"/signup"} className="coloryellow">
                Sign up
              </Link>
            </b>{" "}
          </p>
        </form>
      </FlexChild2>
    </ParentFlex>
  );
};

export default SignIn;
