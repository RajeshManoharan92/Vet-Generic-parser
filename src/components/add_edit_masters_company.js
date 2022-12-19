import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Addeditmasterscompany = () => {

    const Navigate = useNavigate();

    return (
        <>
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
                                        <h1 class="page_heading">Add/Edit Masters</h1>
                                        <a class="float-right btn_dashboard text-white dashboardbtn" onClick={() => Navigate('/dashboard')}> <i class="fa fa-home"></i>Go To Dashboard</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="container">
                            <div class="col-md-12 table_section tab-section">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <span onClick={() => Navigate("/masters")} class="nav-link active addborderbtm" data-toggle="tab" href="#home">Company</span>
                                    </li>
                                </ul>

                                {/* <!-- Tab panes --> */}
                                <div class="tab-content">
                                    <div id="home" class="container tab-pane active"><br />

                                    </div>
                                    <div id="Corporate_tab" class="container tab-pane fade"><br />

                                    </div>
                                </div>
                                <div class="form_section edit_form_section col-md-12 com-sm-12">
                                    <div class="sub_page_form">
                                        <h4>Company Info</h4>
                                        <form class="form-inline" action="masters.html">
                                            <div class="form-group col-md-4 col-sm-6">
                                                <label for="Name">Name</label>
                                                <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                                                <input type="text" class="form-control" id="Name" placeholder="Enter Name" />
                                            </div>

                                            <div class="form-group  col-md-4 col-sm-6">
                                                <label for="User_id" >Contact No.</label>
                                                <img class="form_icon" src="assets/images/form_icon_phone.png" alt="" />
                                                <input type="password" class="form-control" id="User_id" placeholder="Enter number" />
                                            </div>
                                            <div class="form-group col-md-4 col-sm-6">
                                                <label for="Email" >Email</label>
                                                <img class="form_icon" src="assets/images/form_icon_mail.png" alt="" />
                                                <input type="email" class="form-control" id="Email" placeholder="Enter Email" />
                                            </div>
                                            <div class="form-group col-md-4 col-sm-6">
                                                <label for="password">Address</label><br />
                                                <img class="form_icon" src="assets/images/form_icon_address.png" alt="" />
                                                <input type="password" class="form-control" id="password" placeholder="Enter address" />
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form_section edit_form_section col-md-12 com-sm-12">
                                            <div class="sub_page_form">
                                                <h4>FTP Drop Location (Development)</h4>
                                                <form class="form-inline ">
                                                    <div class="form-group col-md-12 col-sm-12">
                                                        <label for="Name">URL</label>
                                                        <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                                                        <input type="url" class="form-control" id="url" placeholder="Enter URL" />
                                                    </div>
                                                    <div class="form-group  col-md-6 col-sm-12">
                                                        <label for="User_id" >User ID</label>
                                                        <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                                                        <input type="password" class="form-control" id="User_id1" placeholder="Enter User ID" />
                                                    </div>
                                                    <div class="form-group col-md-6 col-sm-12">
                                                        <label for="Email" >Password</label>
                                                        <img class="form_icon" src="assets/images/form_icon_password.png" alt="" />
                                                        <input type="password" class="form-control" id="pssword1" placeholder="Enter password" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form_section edit_form_section col-md-12 com-sm-12">
                                            <div class="sub_page_form">
                                                <h4>FTP Drop Location (Production)</h4>
                                                <form class="form-inline ">
                                                    <div class="form-group col-md-12 col-sm-12">
                                                        <label for="Name">URL</label>
                                                        <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                                                        <input type="url" class="form-control" id="url1" placeholder="Enter URL" />
                                                    </div>
                                                    <div class="form-group  col-md-6 col-sm-12">
                                                        <label for="User_id" >User ID</label>
                                                        <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                                                        <input type="password" class="form-control" id="User_id2" placeholder="Enter User ID" />
                                                    </div>
                                                    <div class="form-group col-md-6 col-sm-12">
                                                        <label for="Email" >Password</label>
                                                        <img class="form_icon" src="assets/images/form_icon_password.png" alt="" />
                                                        <input type="password" class="form-control" id="pssword2" placeholder="Enter password" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col">
                                    <div class="form_section edit_form_section form_section_white col-md-12 com-sm-12">
                                        <div class="sub_page_form">
                                            <form class="form-inline ">
                                                <div class="form-group  col-md-6 col-sm-12">
                                                    <label for="User_id" >Email</label>
                                                    <img class="form_icon" src="assets/images/form_icon_user.png" alt="" />
                                                    <input type="password" class="form-control" id="email2" placeholder="Enter Email" />
                                                </div>
                                                <div class="form-group col-md-6 col-sm-12">
                                                    <label for="Email" >No. of PODs</label>
                                                    <img class="form_icon" src="assets/images/form_icon_setting.png" alt="" />
                                                    <input type="number" class="form-control" id="" placeholder="" />
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
                </main>

            </div>
        </>
    )
}
