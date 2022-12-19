import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Jobs = () => {

  const Navigate = useNavigate()

  return (
    <div id="sub_admin_page">
      <div class="container-fluid header">
        <div class="container">
          <nav class="navbar navbar-expand-sm d-flex">
            <a class="navbar-brand mr-auto" href="#"><img src="assets/images/logo.svg" alt="" class="logo" /></a>
            {/* <!--   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button> --> */}
            <ul class="navbar-nav">
              <li class="notifications">
                <a class="nav-link" href="#"><i class="fa fa-bell-o"></i></a>
              </li>
              <li class="profile">
                <a class="nav-link" href="#"><img src="assets/images/profile-img.png" alt="" /> John Doe <i class="fa fa-caret-down" /></a>
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
                  <h1 class="page_heading">Add Job Screen</h1>
                  <a class="float-right btn_dashboard text-white dashboardbtn" onClick={() => Navigate('/dashboard')}> <i class="fa fa-home"></i>Go To Dashboard</a>
                </div>
              </div>
            </div>
          </div>


          <div class="container">
            <div class="col-md-12 table_section tab-section">
              <div class="row">
                <div class="col">
                  <div class="form_section edit_form_section col-md-12 com-sm-12">
                    <div class="sub_page_form">
                      <h4>Job Screen</h4>
                      <form class="form-inline ">
                        <div class="form-group col-md-4 col-sm-12">
                          <label for="Name">Job ID Number </label>
                          <img class="form_icon" src="assets/images/form_icon_bag.png" alt="" />
                          <input type="text" class="form-control" id="name" placeholder="#23445" />
                        </div>
                        <div class="form-group  col-md-4 col-sm-12">
                          <label for="company" >Company</label>
                          <img class="form_icon" src="assets/images/form_icon_building.png" alt="" />
                          {/* <input type="text" class="form-control" id="company" placeholder=" "/> */}
                          <select class="selectpicker form-control" id="company">
                            <option selected="selected">Enter Company</option>
                            <option value="1">Company1</option>
                            <option value="2">Company2</option>
                            <option value="3">Company3</option>
                          </select>
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                          <label for="info" >Select Corporate Customer</label>
                          <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                          {/* <input type="text" class="form-control" id="company" placeholder=" "/> */}
                          <select class="selectpicker form-control" id="company">
                            <option selected="selected">Enter Company</option>
                            <option value="1">Corp Cust1</option>
                            <option value="2">Corp Cust2</option>
                            <option value="3">Corp Cust3</option>
                          </select>
                        </div>
                        <div class="form-group col-md-8 col-sm-12">
                          <label for="info" >Job name </label>
                          <img class="form_icon" src="assets/images/form_icon_bag.png" alt="" />
                          <input type="name" class="form-control" id="job" placeholder="Enter Job Name" />
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                          <label for="info" >Status </label>
                          <span class="text-success">Enable &nbsp;</span>
                          <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="enable_btn2" checked />
                            <label class="custom-control-label" for="enable_btn2"></label>
                          </div>
                          <span>&nbsp;&nbsp;Disable</span>
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                          <label for="info" >File Mask </label>
                          <img class="form_icon" src="assets/images/form_icon_website.png" alt="" />
                          <input type="text" class="form-control" id="website" placeholder="www.website.com" />
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                          <label for="info" > Execution Schedule </label>
                          <img class="form_icon" src="assets/images/form_icon_time.png" alt="" />
                          <input type="text" class="form-control" id="time" placeholder="Enter every Mins" />
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                          <label for="info" > date</label>
                          <img class="form_icon" src="assets/images/form_icon_calender.png" alt="" />
                          <input type="text" class="form-control" id="date" placeholder="Enter Day(UTC)" />
                        </div>
                        <div class="form-group col-md-8 col-sm-12 send_notification_form">
                          <label for="info" >Send Notification</label>
                          <label class="form-check-label form_checkbox">
                            <input type="checkbox" class="" value="" name="to_comp" />&nbsp;To company
                          </label>
                          <label class="form-check-label form_checkbox">
                            <input type="checkbox" class="" value="" name="to_corp" />&nbsp;To corporate customer
                          </label>
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                          <label for="info" >Active Version Number</label>
                          <img class="form_icon" src="assets/images/form_icon_brand.png" alt="" />
                          <input type="text" class="form-control" id="version" style={{ color: "#4E85C5;" }} placeholder="Version" value="V.10.11.12" />
                        </div>
                        <div class="form-group col-md-12 pt-4 text-center btn_group_section">
                          <button class="btn_long btn-success">File Location</button>

                          <button class="btn_long btn-warning">Prod Release</button>

                          <button class="btn_long btn-danger">Delete</button>
                        </div>
                        <div class="form-group col-md-12 pt-4">
                          <div class="col-md-6 text-right">
                            <button class="btn_submit btn_cancel btn_long">Cancel</button>
                          </div>
                          <div class="col-md-6 text-left">
                            <button class="btn_submit btn_long">Submit</button>
                          </div>
                        </div>

                      </form>
                    </div>
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
