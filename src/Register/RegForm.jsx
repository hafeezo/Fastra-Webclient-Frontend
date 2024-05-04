import { useState } from "react"
import './Regform.css'
import { Formik, Form, Field } from "formik"
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
  const handlePrevStep = (newData) => {
    setData(prev => ({...prev, ...newData}))
    setCurrentStep(prev => prev - 1)
  }

  const steps = [
    <StepOne next={handleNextStep} data={data}/>, 
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data}/>
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
        <Field className='inpt' type='password' name='password'/>

        <p>Confirm password</p>
        <Field className='inpt' type='password' name='confirmPassword'/>

        <button className='butn' type="button">previous</button>
        <button className='butn' type="submit">continue</button>

        <p className='goin'>Already have account</p>
      </Form>
    )}</Formik>
  )
}