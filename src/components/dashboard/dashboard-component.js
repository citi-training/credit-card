import './dashboard-component.css';

import React, { useEffect, useState } from 'react';

// import AccountCircle from '@material-ui/icons';
import { Button } from 'semantic-ui-react';
import CustomerInfoComponent from '../customer-info/info-component';
import ListComponent from '../list/list-component';
import TextField  from '@material-ui/core/TextField'
import logo from '../../assets/citi.png'

const DashBoardComponent = () => {
    return(
        <div>
            <div className="header">
                <img src={logo}/> 
                {/* <AccountCircle style={{alignSelf: "flex-end"}}/> */}
            </div>
            <div classname="search" 
                style={{ display: "flex", flexDirection: "row", alignSelf: "conter", justifyContent: "center" }}>
                <form className="input" noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Employee Id" />
                </form>
                <Button variant="contained" color="primary" onClick={alert}> Search </Button>  
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