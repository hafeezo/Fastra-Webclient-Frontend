import React,{ useState } from "react"
import './Regform.css'
import {  useFormik, Formik, Form, Field } from "formik"
import { FaEye, FaEyeSlash } from "react-icons/fa"
export default function Regform() {

  const [data, setData] = useState({
    companyName: '',
    companyEmail: '',
    password: '',
    confirmPassword: ''
  })

  const [currentStep, setCurrentStep] = useState(0)

  const makeRequest = (formData) => {
    console.log('Form Submitted', formData)
  }

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({...prev, ...newData}))

    if(final){
      makeRequest(newData)
      return
    }
    setCurrentStep(prev => prev + 1)
  }

  const steps = [
    <StepOne next={handleNextStep} data={data}/>, 
    <StepTwo next={handleNextStep} data={data}/>,
    <StepThree next={handleNextStep} data={data}/>
  ]

  return (
    <div className="fomain">
      <div className='fowrap'>
        {steps[currentStep]}
      </div></div>
  )
}

 const StepOne = (props) => {

  const handleSubmit = (values) => {
    props.next(values)
  } 

  const validateForm = (values) => {
    const errors = {}
    if (!values.companyName) {
      errors.companyName = 'Company Name is Required'
    }
    if (!values.companyEmail) {
      errors.companyEmail = 'Company Email is Required';
    } else if (
      // Regex for email validation
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.companyEmail)
    ) {
      errors.companyEmail = 'Invalid email address';
    }
    return errors
  }
    return (
      <Formik
      initialValues={props.data}
      onSubmit={(values) => props.next(values)}
      validate={validateForm}
    >
      {({ errors, touched }) => (
        <Form className="fom">
          <p className='reg'>Register</p>
          <p className='reg1'>Enter your details to register</p>
          <p className="lbl">Company name</p>
          <Field className={touched.companyName && errors.companyName ? 'inpt is-invalid' : 'inpt'} name='companyName' type='name' placeholder="Enter your company name" />
          <p className='cd'>companyname.fastrasuites.com</p>
          {touched.companyName && errors.companyName ? (<div className="error">{errors.companyName}</div>) : null}

          <p className="lbl">Company email</p>
          <Field className={touched.companyName && errors.companyName ? 'inpt is-invalid' : 'inpt'} name='companyEmail' type='email' placeholder="Enter your company email here"/>
          {touched.companyEmail && errors.companyEmail ? (<div className="error">{errors.companyEmail}</div>) : null}

          <button className='butn' type="submit">Continue</button>

          <p className='goin'><a href="#login">Already have account</a></p>
        </Form>
      )}
    </Formik>
  )
}
 const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values)
  } 

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const validateForm = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = 'Password is Required';
    } else if (!/(?=.*[0-9])/.test(values.password)) {
      errors.password = 'Password must contain at least one number';
    } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
      errors.password = 'Password must contain at least one special character';
    } else if (!/(?=.*[a-z])/.test(values.password)) {
      errors.password = 'Password must contain at least one lowercase letter';
    } else if (!/(?=.*[A-Z])/.test(values.password)) {
      errors.password = 'Password must contain at least one uppercase letter';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }


    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is Required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors
  }

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      {({ errors, touched }) => (
        <Form className="fom2">
          <p className='reg2'>Password</p>
          <p className='reg3'>Create password for your account</p>
          <p className="lbl2">Password</p>
          
          <Field className={touched.password && errors.password ? 'inpt is-invalid' : 'inpt'} type={showPassword ? 'text' : 'password'} name='password' placeholder='Enter password' required/>
          <button className='togbutn' type="button" onClick={togglePasswordVisibility}> {showPassword ? <FaEyeSlash /> : <FaEye />}</button>
          {touched.password && errors.password ? (<div className="error">{errors.password}</div>) : null}

          <p className="lbl3">Confirm password</p>
          <Field className={touched.confirmPassword && errors.confirmPassword ? 'inpt is-invalid' : 'inpt'} type={showPassword ? 'text' : 'password'} name='confirmPassword' placeholder='Confirm password' required/>
          {touched.confirmPassword && errors.confirmPassword ? (<div className="error">{errors.confirmPassword}</div>) : null}

        <button className='butn2' type="submit">continue</button>

        <p className='goin'><a href="#login">Already have account</a></p>
      </Form>
    )}</Formik>
  )
}
 const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true)
  } 
    return (
    <Formik
    initialValues={props.data}
    onSubmit={handleSubmit}>{() => (
      <Form className="form">
        <p className="reg">Confirmation</p>
        <p className="cfm">We sent a confirmation link to your email, click <br/>on that link to proceed.</p>

        <button className='butn' type="submit"><a href="#login">Continue</a></button>
      </Form>
    )}</Formik>
  )
}