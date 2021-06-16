import './info-component.css';

import React, { useEffect, useState } from 'react';

import { Button } from 'semantic-ui-react';

const CustomerInfoComponent = () => {
    return(
        <div className='container'>
            <p> Employee id : 1 </p>
            <div className='box'>
                <p> Total Expenses </p>
                <h3>$1200.00</h3>
            </div>
            <div className='box'>
                <p> Credit Limit </p>
                <h3>$2000.00</h3>
            </div>
            <Button variant="contained" color="primary"> Send Notification </Button>
        </div>
    );
}

export default CustomerInfoComponent;