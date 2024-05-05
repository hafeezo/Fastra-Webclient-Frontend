import { useState } from "react"
import './Regform.css'
import { Formik, Form, Field } from "formik"
import { FaEye } from "react-icons/fa"
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
  // const handlePrevStep = (newData) => {
  //   setData(prev => ({...prev, ...newData}))
  //   setCurrentStep(prev => prev - 1)
  // }

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
    return (
    <Formik initialValues={props.data}
    onSubmit={handleSubmit}>{() => (
      <Form className="fom">
        <p className='reg'>Register</p>
        <p className='reg2'>Enter your details to register</p>
        <p className="lbl">Company name</p>
        <Field className='inpt' name='companyName' type='name' placeholder="Enter your company name"/>
        <p className='cd'>companyname.fastrasuites.com</p>

        <p className="lbl">Company email</p>
        <Field className='inpt' name='companyEmail' type='email' placeholder="Enter your company email here"/>

        <button className='butn' type="submit">Continue</button>

        <p className='goin'>Already have account</p>
      </Form>
    )}</Formik>
  )
}
 const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values)
  } 
    return (
    <Formik
    initialValues={props.data}
    onSubmit={handleSubmit}>{() => (
      <Form className="form">
        <p>Password</p>
        <Field className='inpt' type='password' name='password' placeholder='Enter password'pattern="(?=.*\d)(?=.*[a-z])(?=.*?[0-9])(?=.*?[~`!@#$%^&amp;*()_=+\[\]{};:&apos;.,&quot;\\|\/?&gt;&lt;-]).{4,}.{8,}" title="Must contain at least one number 
        and one uppercase and lowercase letter, one special character and at least 8 or more characters" required/>
        <span class="password-toggle-icon"><FaEye/></span>
        <div id="message">
        <h6>Password must contain the following:</h6>
        <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
        <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
        <p id="number" class="invalid">A <b>number</b></p>
        <p id="length" class="invalid">Minimum <b>8 characters</b></p>
        </div>

        <p>Confirm password</p>
        <Field className='inpt' type='password' name='confirmPassword' placeholder='Confirm password'/>
        <span class="password-toggle-icon"><FaEye/></span>

        <button className='butn' type="submit">continue</button>

        <p className='goin'>Already have account</p>
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