import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../features/userslice"

import "../index.css"

export const Dashboard = () => {

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const Logout = async () => {
        await dispatch(logout({
            loggedIn : false,
        }));
        
        Navigate('/')
    }

    return (
        <>
            <div id="dashboard_page">
                <div class="container-fluid header fixed-top">
                    <div class="container">
                        <nav class="navbar navbar-expand-sm d-flex">
                            <a class="navbar-brand mr-auto" href="#"><img src="assets/images/logo.svg" alt="" class="logo" /></a>
                            <ul class="navbar-nav">
                                <li class="notifications">
                                    <a class="nav-link" href="#"><i class="fa fa-bell-o"></i></a>
                                </li>

                                <li class="profile">
                                    <Dropdown >
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            <img style={{ width: "33px", height: "33px" }} src="assets/images/profile-img.png" alt="" /> John Doe
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ color: "black" }}>
                                            <Dropdown.Item onClick={() => Logout()}>Log Out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <main>
                    <div class="container-fluid login_page sub_page ">
                        <div class="row">
                            <div class="col-sm-12 col-md-12  col-lg-4 quote-section text-center sub_section">
                                <div class="container">
                                    <p class="blockquote-text"><span style={{ fontWeight: "bold" }}>Choose The Desire <br />Option</span> From The List <br />Right Side</p>
                                    <img src="assets/images/element1.png" alt="" width="70%" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-lg-8 col-md-12 services_section pt-5">
                                <div class="row p-5">
                                    <div class="col-md-6 col-lg-6 col-sm-12 ">
                                        <a onClick={() => Navigate('/createSubAdmin')}>
                                            <div class="widget-stat card bg-dashboard " style={{ borderRadius: "15px" }}>
                                                <div class="card-body ">
                                                    <div class="media">
                                                        <div>
                                                            <img src="assets/images/icon_sub_domain.png" class="services_icon" />
                                                            <div class="text-muted small fw-bold dashboarduline">Create Sub-admin <i class="fa fa-arrow-circle-right"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-12 ">
                                        <a href="#">
                                            <div class="widget-stat card bg-dashboard " style={{ borderRadius: "15px" }}>
                                                <div class="card-body ">
                                                    <div class="media">
                                                        <div>
                                                            <img src="assets/images/icon_job_summary.png" class="services_icon" />
                                                            <div class="text-muted small fw-bold dashboarduline">Job Summary<i class="fa fa-arrow-circle-right"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-12 ">
                                        <a onClick={() => Navigate('/createUser')}>
                                            <div class="widget-stat card bg-dashboard " style={{ borderRadius: "15px" }}>
                                                <div class="card-body ">
                                                    <div class="media">
                                                        <div>
                                                            <img src="assets/images/icon_users.png" class="services_icon" />
                                                            <div class="text-muted small fw-bold dashboarduline">Create User<i class="fa fa-arrow-circle-right"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-12 ">
                                        <a onClick={() => Navigate('/jobs')}>
                                            <div class="widget-stat card bg-dashboard " style={{ borderRadius: "15px" }}>
                                                <div class="card-body ">
                                                    <div class="media">
                                                        <div>
                                                            <img src="assets/images/icon_edit_job.png" class="services_icon" />
                                                            <div class="text-muted small fw-bold dashboarduline">Add/Edit Job<i class="fa fa-arrow-circle-right"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-12 ">
                                        <a onClick={() => Navigate('/masters')}>
                                            <div class="widget-stat card bg-dashboard " style={{ borderRadius: "15px" }}>
                                                <div class="card-body ">
                                                    <div class="media">
                                                        <div>
                                                            <img src="assets/images/icon_masters.png" class="services_icon" />
                                                            <div class="text-muted small fw-bold dashboarduline">Masters <i class="fa fa-arrow-circle-right"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-12 ">
                                        <a href="#">
                                            <div class="widget-stat card bg-dashboard " style={{ borderRadius: "15px" }}>
                                                <div class="card-body ">
                                                    <div class="media">
                                                        <div>
                                                            <img src="assets/images/icon_reports.png" class="services_icon" />
                                                            <div class="text-muted small fw-bold dashboarduline">Reports <i class="fa fa-arrow-circle-right"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
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
