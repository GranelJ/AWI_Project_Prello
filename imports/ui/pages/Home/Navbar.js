import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from 'react-dom';
import ModalFormCreateInBoard from "../../../client/components/Dashboard/ModalFormCreateInBoard";

export default class Navbar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            showModal: false,
            privacy: '',
            boardName: ''
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-default">
            <div className="container">
                <a className="navbar-brand" href="#">Default Color</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-default">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <a href="index.html">
                                    <img src="assets/img/brand/blue.png"/>
                                </a>
                            </div>
                            <div className="col-6 collapse-close">
                                <button type="button" className="navbar-toggler" data-toggle="collapse"
                                        data-target="#navbar-default" aria-controls="navbar-default"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#">
                                <i className="ni ni-favourite-28"></i>
                                <span className="nav-link-inner--text d-lg-none">Discover</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#">
                                <i className="ni ni-notification-70"></i>
                                <span className="nav-link-inner--text d-lg-none">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1"
                               role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ni ni-settings-gear-65"></i>
                                <span className="nav-link-inner--text d-lg-none">Settings</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right"
                                 aria-labelledby="navbar-default_dropdown_1">
                                <a className="dropdown-item" onClick={this.handleOpenModal}>Create board</a>
                                <a className="dropdown-item" href="#">Create team</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                        <ModalFormCreateInBoard showModal={this.state.showModal}/>
                </div>
            </div>
        </nav>

        )
    }
}


