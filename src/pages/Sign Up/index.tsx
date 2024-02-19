import React, { useEffect, useState } from "react";
import { FlexChild1, FlexChild2, ParentFlex, StyledButton } from "./style";
import banner from "../../assets/signIn.png";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import divider from "../../assets/divider.png";
import buy from "../../assets/Get.png";
import sell from "../../assets/Shop.png";
import { TextField, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { auth } from "../../utils/firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/auth.action";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { user } = useSelector((state: any) => state.AuthReducer);

  const dispatch = useDispatch();

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

    dispatch(register({ email, password }));

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     navigate("/login");
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
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
    <>
      <ParentFlex>
        <FlexChild1>{/* <img src={banner} alt="banner" /> */}</FlexChild1>
        <FlexChild2>
          <br />
          <h1 style={{ letterSpacing: "2%" }}>Sign Up </h1>
          <p className="left">Sign up for free to buy or sell on our website</p>

          <button style={{ width: "336px", fontSize: "20px" }}>
            {" "}
            <img src={google} alt="google" /> Sign In With Google
          </button>
          <button style={{ width: "336px", fontSize: "20px" }}>
            <img src={fb} alt="fb" /> Sign In With Google
          </button>
          <span>
            <img src={divider} alt="divider" />
          </span>
          <br />

          <form className="formsize" onSubmit={handleSubmit}>
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
                marginBottom: "-14px",
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
                {showPassword ? <VisibilityOff /> : <Visibility />}
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

            <p className="fa">
              {" "}
              <Checkbox
                sx={{
                  color: "#FFBA3F",
                  "&.Mui-checked": {
                    color: "#FFBA3F",
                  },
                }}
              />{" "}
              Agree to our Terms of use and Privacy Policy{" "}
            </p>
            <StyledButton
              className="fa"
              type="submit"
              disabled={!isEmailValid || !isPasswordValid}
              style={{ backgroundColor: "#FFBA3F", cursor: "pointer" }}
            >
              Sign Up
            </StyledButton>
            <p className="fa">
              Already have an account?{" "}
              <Link to={"/login"} className="coloryellow">
                <b>Sign In</b>
              </Link>{" "}
            </p>
          </form>
        </FlexChild2>
      </ParentFlex>
    </>
  );
};

export default SignUp;
