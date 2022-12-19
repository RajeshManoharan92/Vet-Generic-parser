import React, { useState, useEffect, useRef, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Formik } from 'formik'
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Createuser = () => {

  const Navigate = useNavigate();

  const [array, setarray] = useState([]);

  const [counter, setcounter] = useState(0)

  const [startNumber, setStartNumber] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;

  const pagesVisited = pageNumber * usersPerPage


  const ele = useRef()

  var number = startNumber;

  const token = "2df990d52a4e340b46d9a31723d25c5f11cdbebe"

  const url = "http://3.92.44.192/api/v1/auth/user"

  // const headers = {

  //   "Authorization" : `Token ${token}`
  // }

  useEffect(
    () => {
      data()
    }, [])

  const data = async () => {
    var response = await axios.get(url, { headers: { "Authorization": `Token ${token}` } }).then((res) => {
      console.log(res.data.data.length, res.status, res)
      if (res.data.data.length !== 0) {
        setarray(res.data.data)
        console.log(array)
      }

    });





    //await setarray(response.data)

    // setarray({ Product: response.data })

  }

  const [formvalue, setformvalue] = useState({
    name: "",
    email: "",
    userId: "",
    password: "",
    status: "",
    id: ""
  })

  const validate = (formData) => {
    var errors = {}
    if (formData.name == "") errors.name = "Name is required";
    if (formData.email == "") errors.email = "Email is required";
    if (formData.userId == "") errors.userId = "User Id is required";
    if (formData.password == "") errors.password = "Password is required";
    return errors;

  }

  //   function for onsubmit 

  const onSubmit = async (formData) => {

    if (formvalue.id) {
      //Update
      var response = await axios.put(`http://3.92.44.192/api/v1/auth/user/${formvalue.id}`,
        {
          email: formData.email,
          password: formData.password,
          user_id: formData.userId,
          name: formData.name,
          status: "true"
        }, {
        headers: {
          'Authorization': `Token ${token}`
        }
      }).then(async (res) => {
        var index = array.findIndex((row) => row.id === formvalue.id)
        var Product = [...array]
        Product[index] = res.data.data
        await setarray(Product)
        toast("updated successfully")
        await setformvalue({ name: "", email: "", id: "", password: "", status: "", userId: "" })
        ele.current.innerHTML = "submit"

      }).catch(function (error) {
        if (error.response) {
          toast(error.response.data.message)
          return;
        }
      })
    }

    else {
      //Create
      var createdata = await axios.post(url, {
        email: formData.email,
        password: formData.password,
        user_id: formData.userId,
        name: formData.name,
        status: "true"
      }, {
        headers: {
          'Authorization': `Token ${token}`
        }
      }).then(async (res) => {
        setarray([...array, res.data.data])
        await setformvalue({ name: '', email: '', userId: '', password: "", status: "" })
        toast.success("Successfully Create User")

      }).catch(function (error) {
        if (error.response) {
          toast(error.response.data.message)
          return;
        }
      })

    }
  }

  //  function for update

  const Update = async (id) => {
    //Edit Button - Populating Data on Input Field
    var selectedData = await array.filter((row) => row.id == id)[0]
    console.log(selectedData)
    await setformvalue({
      email: selectedData.email,
      password: selectedData.password,
      userId: selectedData.user_id,
      name: selectedData.name,
      status: "true",
      id: selectedData.id
    })
    ele.current.innerHTML = "Update"
  }

  //  function for delete

  const Delete = (id) => {
    console.log(id)
    var result = window.confirm("Are you sure to delete?");
    if (result) {
      //Deleting data from table
      var response = axios.delete(`http://3.92.44.192/api/v1/auth/user/${id}`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
        .then(async () => {
          var Product = await array.filter((row) => row.id !== id)
          setarray(Product)
          toast.success('Delete successful');
        }).catch(function (error) {
          if (error.response) {
            toast(error.response.data.message)
            console.log(error.response.status)
            return;
          }
        });
      // 
    }
  }

  const id = useId();

  const displayUsers = array.slice(pagesVisited, pagesVisited + usersPerPage).map((row, i) => {

    number = number + 1;
    return (

      <tr key={number - 1}>
        <td> {number - 1}</td>
        <td> {row.user_id} </td>
        <td> {row.name} </td>
        <td> {row.email} </td>


        <td>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id={id + `${row.id}`} />
            <label class="custom-control-label" For={id + `${row.id}`} ></label>
          </div>
        </td>
        <td class="action_btns">
          <a onClick={() => Update(row.id)}><i class="fa  fa-pencil btn_edit"></i></a>
          <a onClick={() => Delete(row.id)} href="#"><i class="fa fa-trash-o btn_delete"></i></a>
        </td>
      </tr>)
  })

  const pageCount = Math.ceil(array.length / usersPerPage);


  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (

    <div id="sub_admin_page">
      <div class="container-fluid header ">
        <div class="container">
          <nav class="navbar navbar-expand-sm d-flex">
            <a class="navbar-brand mr-auto" href="#"><img src="assets/images/logo.svg" alt="" class="logo" /></a>
            <ul class="navbar-nav">
              <li class="notifications">
                <a class="nav-link" href="#"><i class="fa fa-bell-o"></i></a>
              </li>
              <li class="profile">
                <a class="nav-link" href="#"><img src="assets/images/profile-img.png" alt="" /> John Doe <i class="fa fa-caret-down"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main>
        <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 text-center sub_section">
                <div class="container">
                  <h1 class="page_heading">Create User</h1>
                  <a class="float-right btn_dashboard text-white dashboardbtn" onClick={() => Navigate('/dashboard')}> <i class="fa fa-home"></i>Go To Dashboard</a>
                </div>
              </div>
            </div>
            <div class="form_section">
              <div class="sub_page_form">
                <h4>Create User</h4>
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


                    <form onSubmit={handleSubmit} class="form-inline">
                      <div class="form-group col-md-4 col-sm-6">
                        <label for="Name">Name</label>
                        <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                        <input type="text" name="name" class="form-control" id="Name" placeholder="Enter Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        /> <span style={{ color: "red" }}>{errors.name && touched.name && errors.name}</span>
                      </div>
                      <div class="form-group col-md-4 col-sm-6">
                        <label for="Email" >Email</label>
                        <img class="form_icon" src="assets/images/form_icon_mail.png" alt="" />
                        <input type="email" name="email" class="form-control" id="Email" placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email} /> <span style={{ color: "red" }}>{errors.email && touched.email && errors.email}</span>
                      </div>
                      <div class="form-group  col-md-4 col-sm-6">
                        <label for="User_id" >User ID</label>
                        <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                        <input type="text" name="userId" class="form-control" id="User_id" placeholder="Enter User ID"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.userId} /> <span style={{ color: "red" }}>{errors.userId && touched.userId && errors.userId}</span>
                      </div>
                      <div class="form-group col-md-4 col-sm-6">
                        <label for="password">Password</label><br />
                        <img class="form_icon" src="assets/images/form_icon_password.png" alt="" />
                        <input type="password" name="password" class="form-control" id="password" placeholder="Enter Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        /><span style={{ color: "red" }}>{errors.password && touched.password && errors.password}</span>
                      </div>
                      <div class="form-group  col-md-4 col-sm-6">
                        <label for="enable_btn" style={{ width: "100%", display: "block", marginBottom: "10px" }}>Status</label><br />
                        <div class="custom-control custom-switch">
                          <input type="checkbox" name="status" class="custom-control-input" id="enable_btn"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.status} />
                          <label class="custom-control-label" for="enable_btn"></label>
                          <p style={{ maginLeft: "10px" }}>Enable/Disable</p>
                        </div>
                      </div>
                      <div class="form-group  col-md-4">
                        <button type="submit" ref={ele} class="form-control btn_submit" value="Submit" >Submit</button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div class="container ">
            <div class="col-md-12 table_section">
              <div class="row table_box">
                <h4>List of Users</h4>
                <table class="table">
                  <thead>
                    <tr >
                      <th scope="col">Sr. No.</th>
                      <th scope="col">User ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Enable/Disable</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      displayUsers


                    }


                    {/* <tr>
                      <td class="sr_no">01</td>
                      <td class="user_id">556007</td>
                      <td>Chandan Dodavad</td>
                      <td>anishktotad@company.in</td>
                      <td>GWSGFG@5156</td>
                      <td>
                        <div class="custom-control custom-switch">
                          <input type="checkbox" class="custom-control-input" id="enable_btn1" />
                          <label class="custom-control-label" for="enable_btn1"></label>
                        </div>
                      </td>
                      <td class="action_btns">
                        <a href="#"><i class="fa  fa-pencil btn_edit"></i></a>
                        <a href="#"><i class="fa fa-trash-o btn_delete"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="sr_no">02</td>
                      <td class="user_id">556007</td>
                      <td>Chandan Dodavad</td>
                      <td>anishktotad@company.in</td>
                      <td>GWSGFG@5156</td>
                      <td>
                        <div class="custom-control custom-switch">
                          <input type="checkbox" class="custom-control-input" id="enable_btn2" />
                          <label class="custom-control-label" for="enable_btn2"></label>
                        </div>
                      </td>
                      <td class="action_btns">
                        <a href="#"><i class="fa  fa-pencil btn_edit"></i></a>
                        <a href="#"><i class="fa fa-trash-o btn_delete"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="sr_no">03</td>
                      <td class="user_id">556007</td>
                      <td>Chandan Dodavad</td>
                      <td>anishktotad@company.in</td>
                      <td>GWSGFG@5156</td>
                      <td>
                        <div class="custom-control custom-switch">
                          <input type="checkbox" class="custom-control-input" id="enable_btn3" />
                          <label class="custom-control-label" for="enable_btn3"></label>
                        </div>
                      </td>
                      <td class="action_btns">
                        <a href="#"><i class="fa  fa-pencil btn_edit"></i></a>
                        <a href="#"><i class="fa fa-trash-o btn_delete"></i></a>
                      </td>
                    </tr> */}
                  </tbody>
                </table>

                <div class="table_pagination col-md-12">
                  <p className="float-left pagination_text">
                    Showing {startNumber} to {number - 1} of {array.length} results
                  </p>
                  <ul class="pagination float-right">
                    <ReactPaginate
                      previousLabel={<i class="fa fa-angle-left"></i>}
                      nextLabel={<i class="fa fa-angle-right"></i>}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <ToastContainer></ToastContainer>
    </div>
  )
}
