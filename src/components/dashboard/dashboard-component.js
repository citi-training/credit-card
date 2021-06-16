import React, { useState, useEffect } from 'react';

import ListComponent from '../list/list-component';
import CustomerInfoComponent from '../customer-info/info-component';



const DashBoardComponent = () => {
    return(
        <div>
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