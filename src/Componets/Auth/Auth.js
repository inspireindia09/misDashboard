import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonService } from '../Utils/common.service';
import MainLoader from './SharedComponent/Loader/MainLoader';
import _ from 'lodash'
import { utilityService } from '../Utils/utility.service'

export class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="validation_wrapper">
                <h4 className="user_validating">
                    <small>Mr.</small>
                Rozer Validating...
                </h4>
            </div>
        );
    }
}


export default Auth;