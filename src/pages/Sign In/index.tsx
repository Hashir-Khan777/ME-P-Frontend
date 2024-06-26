import React, { FormEvent, useEffect, useState } from "react";
import { FlexChild1, FlexChild2, ParentFlex, StyledButton } from "./style";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import divider from "../../assets/divider.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
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
      <FlexChild1></FlexChild1>
      <FlexChild2>
        <h1 className="relative left-0 md:left-[4rem] xl:left-0 tracking-[0.5px] font-bold text-blackBrown">Sign In Using</h1>
        <button className="secondary-button">
          <img src={google} alt="google" /> Sign In With Google
        </button>
        <button className="secondary-button">
          <img src={fb} alt="fb" /> Sign In With Facebook
        </button>
        <br />
        <span>
          <img className="mb-[1rem]" src={divider} alt="divider" />
        </span>
        <br />
        <form style={{ width: "75%" }} onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input className="placeholder:text-[13px]" placeholder="designer@gmail.com" value={email} onChange={handleEmailChange} required />
          {email && !isEmailValid && (
            <p className="validation-message">Invalid email</p>
          )}
          <label
            className="flex items-center justify-between mt-6"
          >
            Password
            <p
              onClick={handleShowPasswordToggle}
              className="border-none bg-transparent cursor-pointer"
            >
              {showPassword ? (
                <div className="flex"><VisibilityOff className="mb-[-6px] text-[#807d7e] mr-2" /><p className="text-[#807d7e] text-[12px] mt-1">Hide</p></div>
              ) : (
                <Visibility className="mb-[-6px]" />
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
          <p className="text-[#807d7e] text-[12px] mt-1">Use 8 or more characters with a mix of letters, numbers & symbols</p>
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
            <p  className="fa m-0 underline text-[13px]">
              Forget your password
            </p>
          </label>

          <StyledButton
            type="submit"
            style={{ backgroundColor: "#FFBA3F", cursor: "pointer", color: '#fff' }}
            onClick={(e) => handleLogin(e)}
            disabled={!isEmailValid || !isPasswordValid}
          >
            Sign In
          </StyledButton>
          <p className="text-[#3c4242] text-[14px]">
            Don’t have an account?{" "}
            <b>
              <Link to={"/signup"} className="underline font-400 text-[#3c4242]">
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
