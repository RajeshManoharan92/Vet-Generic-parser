import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Subadmin = () => {

  const Navigate = useNavigate()

  return (
    <div id="sub_admin_page">
      <div class="container-fluid header">
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
                  <h1 class="page_heading">Sub Admin</h1>
                  <a class="float-right btn_dashboard text-white dashboardbtn" onClick={() => Navigate('/dashboard')}> <i class="fa fa-home"></i>Go To Dashboard</a>
                </div>
              </div>
            </div>

            <div class="form_section">
              <div class="sub_page_form">
                <h4>Create Sub Admin</h4>
                <form class="form-inline">
                  <div class="form-group col-md-4 col-sm-6">
                    <label for="Name">Name</label>
                    <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                    <input type="text" class="form-control" id="Name" placeholder="Enter Name" />
                  </div>
                  <div class="form-group col-md-4 col-sm-6">
                    <label for="Email" >Email</label>
                    <img class="form_icon" src="assets/images/form_icon_mail.png" alt="" />
                    <input type="email" class="form-control" id="Email" placeholder="Enter Email" />
                  </div>
                  <div class="form-group  col-md-4 col-sm-6">
                    <label for="User_id" >User ID</label>
                    <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                    <input type="text" class="form-control" id="User_id" placeholder="Enter User ID" />
                  </div>
                  <div class="form-group col-md-4 col-sm-6">
                    <label for="password">Password</label><br />
                    <img class="form_icon" src="assets/images/form_icon_password.png" alt="" />
                    <input type="password" class="form-control" id="password" placeholder="Enter Password" />
                  </div>
                  <div class="form-group  col-md-4 col-sm-6">
                    <label for="enable_btn" style={{ width: "100%", display: "block", marginBottom: "10px;" }}>Status</label><br />
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="enable_btn" />
                      <label class="custom-control-label" for="enable_btn"></label>
                      <p style={{ marginLeft: "15px;" }}>Enable/Disable</p>
                    </div>
                  </div>
                  <div class="form-group  col-md-4">
                    <input type="submit" class="form-control btn_submit" value="Submit" />
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div class="container ">
            <div class="col-md-12 table_section">
              <div class="row table_box">
                <h4>List of Users</h4>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sr. No.</th>
                      <th scope="col">User ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Enable/Disable</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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
                    </tr>
                  </tbody>
                </table>

                <div class="table_pagination col-md-12">
                  <p class="float-left pagination_text">Showing 1 to 10 of 1000 results</p>
                  <ul class="pagination float-right">
                    <li class="page-item"><a class="page-link" href="#" title="first page"><i class="fa fa-angle-double-left"></i></a></li>
                    <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item "><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
                    <li class="page-item"><a class="page-link" href="#" title="last page"><i class="fa fa-angle-double-right"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
