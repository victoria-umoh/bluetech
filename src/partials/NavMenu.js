import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronDown, faHospital } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logo.png';

class NavMenu extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <Navbar expand="lg" className="header-nav">
                        <Row>
                            {/* <Col lg={4} md={4} sm={12} xs={12}> */}
                                <div className="navbar-header">
                                    <a id="mobile_btn" href="javascript:void(0);">
                                        <span className="bar-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </a>
                                    <Link to="/index-2" className="navbar-brand logo">
                                        <img src={Logo} className="img-fluid" alt="Logo" />
                                    </Link>
                                </div>
                                <div className="main-menu-wrapper">
                                    <div className="menu-header">
                                        <Link to="/index-2" className="menu-logo">
                                            <img src={Logo} className="img-fluid" alt="Logo" />
                                        </Link>
                                        <Link to="/" id="menu_close"  className="menu-close" href="javascript:void(0);" >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </Link>
                                    </div>
                                    <ul className="main-nav">
                                        <li className=""> <Link to="/index-2">Home</Link> </li>
                                        <li className="has-submenu"> <Link to="/">  Doctors <FontAwesomeIcon icon={faChevronDown} /> </Link>
                                            <ul className="submenu">
                                                <li> <Link to="/doctor-dashboard">Doctor Dashboard</Link> </li>
                                                <li> <Link to="/appointments">Appointments</Link>  </li>
                                                <li> <Link to="/schedule-timings">Schedule Timing</Link> </li>
                                                <li> <Link to="/my-patients">Patients List</Link> </li>
                                                <li> <Link to="/patient-profile">Patients Profile</Link> </li>
                                                <li> <Link to="/chat-doctor">Chat</Link> </li>
                                                <li> <Link to="/invoices">Invoices</Link> </li>
                                                <li> <Link to="/doctor-profile-settings"> Profile Settings </Link> </li>
                                                <li> <Link to="/reviews">Reviews</Link> </li>
                                                <li> <Link to="/doctor-register">Doctor Register</Link> </li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"> <Link to="#"> Patients <FontAwesomeIcon icon={faChevronDown} /> </Link>
                                            <ul className="submenu">
                                                <li> <Link to="/search">Search Doctor</Link> </li>
                                                <li> <Link to="/doctor-profile">Doctor Profile</Link> </li>
                                                <li> <Link to="/booking">Booking</Link> </li>
                                                <li> <Link to="/checkout">Checkout</Link> </li>
                                                <li> <Link to="/booking-success">Booking Success</Link> </li>
                                                <li> <Link to="/patient-dashboard">Patient Dashboard</Link> </li>
                                                <li> <Link to="/favourites">Favourites</Link> </li>
                                                <li> <Link to="/chat">Chat</Link> </li>
                                                <li> <Link to="/profile-settings">Profile Settings</Link> </li>
                                                <li> <Link to="/change-password">Change Password</Link> </li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"> <Link to="#"> Pages <FontAwesomeIcon icon={faChevronDown} /> </Link>
                                            <ul className="submenu">
                                                <li> <Link to="/voice-call">Voice Call</Link> </li>
                                                <li> <Link to="/video-call">Video Call</Link> </li>
                                                <li> <Link to="/search">Search Doctors</Link> </li>
                                                <li> <Link to="/calendar">Calendar</Link> </li>
                                                <li> <Link to="/components">Components</Link> </li>
                                                <li className="has-submenu">
                                                    <Link to="/invoices">Invoices</Link>
                                                    <ul className="submenu">
                                                        <li> <Link to="/invoices">Invoices</Link> </li>
                                                        <li> <Link to="/invoice-view">Invoice View</Link> </li>
                                                    </ul>
                                                </li>
                                                <li> <Link to="/blank-page">Starter Page</Link>  </li>
                                                <li> <Link to="/login">Login</Link> </li>
                                                <li> <Link to="/register">Register</Link> </li>
                                                <li> <Link to="/forgot-password">Forgot Password</Link> </li>
                                            </ul>
                                        </li>
                                        <li> <Link to="/admin-dashboard" target="_blank">  Admin </Link> </li>
                                        <li className="login-link"> <Link to="/login">Login / Signup</Link> </li>
                                    </ul>
                                </div>
                            {/* </Col> */}

                            <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                                <ul className="nav header-navbar-rht">
                                    <li className="nav-item contact-item">
                                        <div className="header-contact-img">
                                            <FontAwesomeIcon icon={faHospital} />
                                        </div>
                                        <div className="header-contact-detail">
                                            <p className="contact-header">Contact</p>
                                            <p className="contact-info-header">+1 315 369 5943</p>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link header-login">
                                            Login / Signup
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default NavMenu;
