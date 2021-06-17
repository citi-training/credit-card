import './dashboard-component.css';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import React, { useEffect, useState } from 'react';

import CustomerInfoComponent from '../customer-info/info-component';
import ListComponent from '../list/list-component';
import logo from '../../assets/citi.png'

const DashBoardComponent = () => {
    return(
        <div>
            <div className="header"><img src={logo}/></div>
            <div classname="testing">
                <p />Search Employee id              
                <Input />
                <Button variant="contained" color="primary">search</Button>
            </div>
            <div>
                <CustomerInfoComponent></CustomerInfoComponent>
            </div>
            <div>
                <ListComponent></ListComponent>
            </div>
        </div>
    );
}

export default DashBoardComponent;