import './info-component.css';

import React, { useEffect, useState } from 'react';

import { Button } from 'semantic-ui-react';
import Alert from 'react-bootstrap/Alert';

const CustomerInfoComponent = () => {
    const [show, setShow] = useState(false);

    if (show) {
        return (
          <Alert className='notif' variant="success" onClose={() => setShow(false)} dismissible>
            <p>
                Notification sent!
            </p>
          </Alert>
        );
      }

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
            <Button variant="contained" color="primary" onClick={() => setShow(true)}> Send Notification </Button>
        </div>
    );
}

export default CustomerInfoComponent;