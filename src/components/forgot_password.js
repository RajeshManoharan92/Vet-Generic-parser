import React, { useState } from 'react'
import { Formik } from "formik"
import axios from 'axios'

export const Forgotpassword = () => {

  const [formvalue, setformvalue] = useState({
    newpassword: "",
    confirmpassword: ""
  })

  const validate = (formData) => {
    var errors = {}
    if (formData.newpassword == "") errors.newpassword = "New password Required"
    if (formData.confirmpassword == "") errors.confirmpassword = "Confirm password Required"
    return errors;
  }


  const onSubmit = async (formData) => {
    await axios.post("", {
      newpassword: formData.newpassword,
      confirmpassword: formData.confirmpassword
    }).then((res) => console.log(res)).catch((err) => console.log(err))
  }

  return (
    <div id="forgot_page">
      <main>
        <div class="container-fluid login_page">
          <div class="row">
            <div class="col-sm-6 quote-section ">
              <img src="assets/images/forgot_element.png" alt="" width="60%" class="float-right" />
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
                      onSubmit={(formData) => onSubmit(formData)}
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
                          <h3>Forgot Password</h3>
                          <p>Set your new password</p>

                          <div class="row inputrowht">
                            <div class="form-group">
                              <label for="new password" class="">New Password</label>

                              <input type="password" name="newpassword" id="newpassword" class="form-control" placeholder="Enter new password"
                                onChange={handleChange} onBlur={handleBlur} value={values.newpassword}
                              />
                              <i class="fa fa-lock"></i>
                            </div>
                          </div>

                          <div class="row errorrowht text-center">
                            <span style={{ color: "red" }}>{errors.newpassword && touched.newpassword && errors.newpassword}</span>
                          </div>

                          <div class="row inputrowht mt-1">
                            <div class="form-group mb-3">
                              <label for="password" class="">Confirm Password</label>
                              <input type="password" name="confirmpassword" id="confirmpassword" class="form-control" placeholder="Enter new password again"
                                onChange={handleChange} onBlur={handleBlur} value={values.confirmpassword}
                              />
                              <i class="fa fa-lock"></i>
                            </div>
                          </div>

                          <div class="row errorrowht text-center mb3">
                            <span style={{ color: "red" }}>{errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}</span>
                          </div>

                          <div class="row mt-3">
                            <button name="login" id="login" class="btn btn-block login-btn" type="submit" value="Set Password" onclick="return login()"> Set Password </button>
                          </div>
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
