import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from "axios"
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { login } from '../features/userslice'

export const Login = () => {

  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const [formvalue, setformvalue] = useState({
    email: "",
    password: ""
  })

  // constp[token,settoken] = useState('');

  const validate = (formData) => {
    var errors = {};
    if (formData.email == "") errors.email = "Email is Required"
    if (formData.password == "") errors.password = "Password is Required"
    return errors;
  }

  const Login = async (formData) => {
    
    // await axios.post('',{
    // email : formData.email,
    // password : formData.password
    // }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    
    if (formData.email == "raj@gmail.com") {
      Navigate('/dashboard')
    }
    else {
      alert("Invalid Credentials")
      await setformvalue({email:"",password:""})
      return;
    }

dispatch(
  login({
    email : formData.email,
    password : formData.password,
    loggedIn : true,
  })
)
  }

  return (
    <div id="login_page">
      <main>
        <div class="container-fluid login_page">
          <div class="row">
            <div class="col-sm-6 quote-section ">
              <img src="assets/images/laptop.png" alt="" width="80%" class="float-right" />
            </div>
            <div class="col-sm-6 form-section">
              <div class="login-wrapper">
                <img src="assets/images/logo.svg" alt="" class="logo" />
                <div class="form_outer1">
                  <div class="form_outer2">

                    <Formik
                    enableReinitialize
                      initialValues={formvalue}
                      validate={(formData) => validate(formData)}
                      onSubmit={(formData) => Login(formData)}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <h3>Login</h3>
                          <p>Enter your email and password to access admin panel.</p>

                          <div class="row inputrowht " >
                            <div class="form-group">
                              <label for="email" class="">Email ID</label>
                              <input type="email" name="email" class="form-control" id="email"
                                placeholder="Enter Your Email"
                                value={values.email} onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <i class="fa fa-user"></i>
                            </div>
                          </div>

                          <div class="row errorrowht text-center">
                            <span style={{ color: "red" }}>{errors.email && touched.email && errors.email}</span>
                          </div>

                          <div class="row inputrowht">
                            <div class="form-group mb-3">
                              <label for="password" class="">Password</label>
                              <input type="password" name="password" id="password" class="form-control"
                                placeholder="Enter Your Password"
                                value={values.password} onChange={handleChange} onBlur={handleBlur} />
                              <i class="fa fa-lock"></i>
                            </div>
                          </div>

                          <div class="row errorrowht text-center">
                            <span style={{ color: "red" }}>{errors.password && touched.password && errors.password}</span>
                          </div>

                          <label class="form-check-label remember_box">
                            <input type="checkbox" class="form-check-input" value="" />Remember
                          </label>
                          <span onClick={() => Navigate('/forgot')} id="forgotpassword" class="forgot-password-link float-right">Forgot Your Password?</span>
                          <button name="login" id="login" class="btn btn-block login-btn" type="submit" value="Sign In" >Sign In</button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
