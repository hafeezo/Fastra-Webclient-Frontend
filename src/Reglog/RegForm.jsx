import React, { useState,useEffect } from "react";
import "./RegForm.css";
import { Formik, Form, Field } from "formik";
import { Link, useHistory } from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export default function RegForm() {
  const [data, setData] = useState({
    companyName: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const history = useHistory();

  const makeRequest = async (formData) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    history.push("/login");

    return response.json();
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} data={data} />,
    <StepThree next={handleNextStep} data={data} />,
  ];

  return (
    <div className="fomain">
      <div className="fowrap">{steps[currentStep]}</div>
    </div>
  );
}

const StepOne = (props) => {
  const handleSubmit = async (values) => {
    try {
      await props.next(values);
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.companyName) {
      errors.companyName = "Company Name is Required";
    }
    if (!values.companyEmail) {
      errors.companyEmail = "Company Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.companyEmail)
    ) {
      errors.companyEmail = "Invalid email address";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      {({ errors, touched }) => (
        <Form className="fom">
          <p className="reg">Register</p>
          <p className="reg1">Enter your details to register</p>
          <p className="lbl">Company name</p>
          <Field
            className={
              touched.companyName && errors.companyName
                ? "inpt is-invalid"
                : "inpt"
            }
            name="companyName"
            type="name"
            placeholder="Enter your company name"
          />
          <p className="cd">companyname.fastrasuites.com</p>
          {touched.companyName && errors.companyName && (
            <div className="error">{errors.companyName}</div>
          )}

          <p className="lbl">Company email</p>
          <Field
            className={
              touched.companyEmail && errors.companyEmail
              ? "inpt is-invalid"
              : "inpt"
            }
            name="companyEmail"
            type="email"
            placeholder="Enter your company email here"
          />
          {touched.companyEmail && errors.companyEmail && (
            <div className="error">{errors.companyEmail}</div>
          )}

          <button className="butn" type="submit">
            Continue
          </button>

          <p className="goin">
            <Link to="/login">Already have account</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};



const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    number: false,
    specialCharacter: false,
    lowercase: false,
    uppercase: false,
  });

  const validatePassword = (password) => {
    setPasswordCriteria({
      length: password.length >= 8,
      number: /\d/.test(password),
      specialCharacter: /[!@#$%^&*]/.test(password),
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
    });
  };

  useEffect(() => {
    if (props.data && props.data.password) {
      validatePassword(props.data.password);
    }
  }, [props.data]);

  const validateForm = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Password is Required";
    } else if (!/(?=.*[0-9])/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
      errors.password = "Password must contain at least one special character";
    } else if (!/(?=.*[a-z])/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      {({ errors, touched, values }) => (
        <Form className="fom2">
          <p className="reg2">Password</p>
          <p className="reg3">Create password for your account</p>
          <p className="lbl2">Password</p>

          <Field
            className={
              touched.password && errors.password ? "inpt1 is-invalid" : "inpt1"
            }
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
          />
          <button
            className="togbutn"
            type="button"
            onClick={togglePasswordVisibility}>
            {" "}
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          {touched.password && errors.password ? (
            <div className="error">{errors.password}</div>
          ) : null}

<ul className="password-criteria">
  <li className={values.password && values.password.length >= 8 ? "fulfilled" : ""}>
    At least 8 characters
  </li>
  <li className={values.password && /\d/.test(values.password) ? "fulfilled" : ""}>
    At least one number
  </li>
  <li className={values.password && /[!@#$%^&*]/.test(values.password) ? "fulfilled" : ""}>
    At least one special character
  </li>
  <li className={values.password && /[a-z]/.test(values.password) ? "fulfilled" : ""}>
    At least one lowercase letter
  </li>
  <li className={values.password && /[A-Z]/.test(values.password) ? "fulfilled" : ""}>
    At least one uppercase letter
  </li>
</ul>


          <p className="lbl3">Confirm password</p>
          <Field
            className={
              touched.confirmPassword && errors.confirmPassword
                ? "inpt1 is-invalid"
                : "inpt1"
            }
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
          />
          {touched.confirmPassword && errors.confirmPassword ? (
            <div className="error">{errors.confirmPassword}</div>
          ) : null}

          <button className="butn2" type="submit">
            continue
          </button>

          <p className="goin">
            <Link to="/login">Already have account</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};
const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form className="fom">
          <p className="reg4">Confirmation</p>
          <p className="cfm">
            We sent a confirmation link to your email, <br />
            click on that link to proceed.
          </p>

          <button className="butn" type="submit">
            <Link to="/login">Continue</Link>
          </button>
        </Form>
      )}
    </Formik>
  );
};
