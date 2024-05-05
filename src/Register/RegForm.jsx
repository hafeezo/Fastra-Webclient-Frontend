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

  const handleNextStep = (newData) => {
    setData(prev => ({...prev, ...newData}))
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
        <Field className='inpt' type='password' name='password' placeholder='Enter password'/>
        <span class="password-toggle-icon"><FaEye/></span>

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
    props.next(values)
  } 
    return (
    <Formik
    initialValues={props.data}
    onSubmit={handleSubmit}>{() => (
      <Form className="form">
        <p className="reg">Confirmation</p>
        <p className="cfm">We sent a confirmation link to your email, click <br/>on that link to proceed.</p>

        <button className='butn' type="submit">Continue</button>
      </Form>
    )}</Formik>
  )
}