import './dashboard-component.css';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Button } from 'semantic-ui-react';
import CustomerInfoComponent from '../customer-info/info-component';
import ListComponent from '../list/list-component';
import TextField  from '@material-ui/core/TextField'
import logo from '../../assets/citi.png'
import axios from 'axios';

const DashBoardComponent = () => {

    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    const [isSending, setIsSending] = useState(false);
    const isMounted = useRef(true)

    // set isMounted to false when we unmount the component
    useEffect(() => {
        setData([]);
        return () => {
        isMounted.current = false
        }
    }, [])

    const sendRequest = useCallback(async () => {
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        let response = await axios('/dev/transactions');
        let data = await response.data;
        setData(data);
        //console.log(data);
        // once the request is sent, update state again
        if (isMounted.current) // only update if we are still mounted
          setIsSending(false)
      }, [isSending])

    const inputHandler = (e) => {
        setId(e.target.value);
        console.log(id);
    }


    return(
        <div>
            <div className="header"><img src={logo}/></div>            
            <div classname="search" 
                style={{ display: "flex", flexDirection: "row", alignSelf: "conter", justifyContent: "center" }}>
                <form className="input" noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Employee Id" onChange={inputHandler}/>
                </form>
                <Button variant="contained" color="primary" disabled={isSending} onClick={sendRequest}> Search </Button>  
            </div>
            <div>
                <CustomerInfoComponent></CustomerInfoComponent>
            </div>
            <div>
                <ListComponent content={data}></ListComponent>
            </div>
        </div>
    );
}

export default DashBoardComponent;