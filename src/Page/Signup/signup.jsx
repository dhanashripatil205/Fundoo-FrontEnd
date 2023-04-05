import React, { useState, useNavigate } from "react";
import "./signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { SignUp } from "../../Services/userservice";

const emailRegex =
  /^[A-Za-z0-9][A-Za-z0-9+-]*[.]?[A-Za-z0-9+-]+@[A-Za-z0-9][A-Za-z0-9+-]*(.[A-Za-z0-9]+)?.[A-Za-z]{2,6}$/;
const passwordRegex =
  /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/;
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;

export default function Signup() {
  const [signObj, setSignObj] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [validityObj, setValidityObj] = useState({
    NameHelper: "",
    isNameInvalid: false,
    lastNameHelper: "",
    isLastNameInvalid: false,
    emailHelper: "",
    isEmailInvalid: false,
    passwordHelper: "",
    isPasswordInvalid: false,
    confirmPasswordHelper: "",
    isConfirmPasswordInvalid: false,
  });

  const navigate = useNavigate;

  const onfirstnameChange = (event) => {
    setSignObj((prev) => {
      return { ...prev, name: event.target.value };
    });
  };
  const onlastnameChange = (event) => {
    setSignObj((prev) => {
      return { ...prev, lastname: event.target.value };
    });
  };

  const onEmailChange = (event) => {
    setSignObj((prev) => {
      return { ...prev, email: event.target.value };
    });
  };
  const onPasswordChange = (event) => {
    setSignObj((prev) => {
      return { ...prev, password: event.target.value };
    });
  };

  const onconfirmpasswordChange = (event) => {
    setSignObj((prev) => {
      return { ...prev, confirmpassword: event.target.value };
    });
  };

  async function onSubmit() {
    let nameValid = firstnameRegex.test(signObj.name);
    let lastnameValid = lastnameRegex.test(signObj.lastname);

    let isEmailValid = emailRegex.test(signObj.email);
    let passwordValid = passwordRegex.test(signObj.password);

    console.log(signObj);

    if (!nameValid) {
      setValidityObj((prev) => {
        return {
          ...prev,
          isNameInvalid: true,
          NameHelper: "Invalid firstname",
        };
      });
    } else {
      setValidityObj((prev) => {
        return { ...prev, isNameInvalid: false, NameHelper: "" };
      });
    }

    if (!lastnameValid) {
      setValidityObj((prev) => {
        return {
          ...prev,
          isLastNameInvalid: true,
          lastNameHelper: "Invalid lastname",
        };
      });
    } else {
      setValidityObj((prev) => {
        return { ...prev, isLastNameInvalid: false, lastNameHelper: "" };
      });
    }

    if (!isEmailValid) {
      setValidityObj((prev) => {
        return { ...prev, isEmailInvalid: true, emailHelper: "Invalid email" };
      });
    } else {
      setValidityObj((prev) => {
        return { ...prev, isEmailInvalid: false, emailHelper: "" };
      });
    }

    if (!passwordValid) {
      setValidityObj((prev) => {
        return {
          ...prev,
          isPasswordInvalid: true,
          passwordHelper: "Invalid password",
        };
      });
    } else {
      setValidityObj((prev) => {
        return { ...prev, isPasswordInvalid: false, passwordHelper: "" };
      });
    }

    if (passwordValid && signObj.password !== signObj.confirmpassword) {
      setValidityObj((prev) => {
        return {
          ...prev,
          isConfirmPasswordInvalid: true,
          confirmPasswordHelper: "Password does not match",
        };
      });
    } else {
      setValidityObj((prev) => {
        return {
          ...prev,
          isConfirmPasswordInvalid: false,
          confirmPasswordHelper: "",
        };
      });
    }

    if (
      isEmailValid &&
      passwordValid &&
      nameValid &&
      signObj.password === signObj.confirmpassword
    ) {
      let response = await SignUp(signObj); //SignUp from services axios
      console.log(response);
    }
  }

  const goToLogin = (event) => {
    navigate("/");
  };

  return (
    <div className="signupcontainer">
      <div className="firstcontainer">
        <div className="google1">Google</div>
        <div className="createnew">Create your Google Account</div>
        <div className="continue">to continue to Gmail</div>

        <div className="inputbox1">
          <div className="inputtextfield1">
            <TextField
              className="firstname"
              label="First name"
              variant="outlined"
              error={validityObj.isFirstNameInvalid}
              helperText={validityObj.firstNameHelper}
              onChange={onfirstnameChange}
            />
          </div>

          <div className="inputtextfield2">
            <TextField
              className="lastname"
              label="Last name"
              variant="outlined"
              error={validityObj.isLastNameInvalid}
              helperText={validityObj.firstNameHelper}
              onChange={onlastnameChange}
            />
          </div>
        </div>

        <div className="inputtextfield3">
          <TextField
            className="username"
            label="Username"
            variant="outlined"
            //helperText="You can use letters, numbers & periods"
            error={validityObj.isEmailInvalid}
            helperText={validityObj.emailHelper}
            onChange={onEmailChange}
          />
        </div>

        <div className="inputbox2">
          <div className="inputtextfield4">
            <TextField
              className="password"
              label="Password"
              variant="outlined"
              error={validityObj.isPasswordInvalid}
              helperText={validityObj.passwordHelper}
              onChange={onPasswordChange}
            />
          </div>

          <div className="inputtextfield5">
            <TextField
              className="confirm"
              label="Confirm Password"
              variant="outlined"
              error={validityObj.isConfirmPasswordInvalid}
              helperText={validityObj.confirmPasswordHelper}
              onChange={onconfirmpasswordChange}
            />
          </div>
        </div>

        <div className="showpassword">
          <div className="check">
            <Checkbox defaultChecked />
          </div>
          <div className="showpassword">Show password</div>
        </div>

        <div className="signinstead">
          <div onClick={goToLogin} className="abc">
            Sign in instead
          </div>

          <div>
            <Button
              onClick={onSubmit}
              className="clickbutton"
              variant="contained"
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* first container end here */}

      <div className="secondcontainer">
        <div>
          <img
            src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
            height="190"
            width="190"
            alt="Google"
          />{" "}
        </div>
        <p>One account. All of Google working for you.</p>
      </div>

      {/* second container end here */}
    </div>
    // signupcontainer
  );
}
