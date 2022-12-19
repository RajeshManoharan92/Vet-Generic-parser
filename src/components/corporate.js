import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Corporate = () => {

  const Navigate = useNavigate();

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
                  <h1 class="page_heading">Masters</h1>
                  <a class="float-right btn_dashboard text-white dashboardbtn" onClick={() => Navigate('/dashboard')}> <i class="fa fa-home"></i>Go To Dashboard</a>
                </div>
              </div>
            </div>
          </div>


          <div class="container">
            <div class="col-md-12 table_section tab-section">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <span class="nav-link" data-toggle="tab" onClick={() => Navigate("/masters")}>Company</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link active" data-toggle="tab" onClick={() => Navigate("/corporate")}>Corporate</span>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}
              <div class="tab-content">
                <div id="home" class="container tab-pane active"><br />

                </div>
                <div id="Corporate_tab" class="container tab-pane fade"><br />

                </div>
              </div>
              <div class="row table_box">
                <div class="float-right " style={{ textAlign: "end" }}>
                  <button onClick={() => Navigate('/addCorporate')} class="btn-sm btn-add-field" id="add-edit-corporate"><i class="fa fa-plus"></i>Add Corporate</button>
                </div>
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
