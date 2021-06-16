import './dashboard-component.css';

import React, { useEffect, useState } from 'react';

import CustomerInfoComponent from '../customer-info/info-component';
import ListComponent from '../list/list-component';
import logo from '../../assets/citi.png'

const DashBoardComponent = () => {
    return(
        <div>
            <div className="header"><img src={logo}/></div>
            <div>
            <h3>Search Bar component</h3>
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