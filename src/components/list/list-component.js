import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    tableHead: {
        fontWeight: 'bold',
        borderBottom:'none'
    },
    tableTitle: {
        fontWeight: 'bold',
        fontSize: '25px'
    },
    buttonDesign: {
        backgroundColor: '#1AA1FB',
    },
    container: {
        width: '60%',
        margin: '0 auto',
        fontFamily: 'sans-serif'
        
    }
  });

//   function createData(id, employeeID, businessName, amount, date) {
//     return { id, employeeID, businessName, amount, date };
//   }
  
//   const rows = [
//     createData(1000, 1, "Apple", "$"+1000000, "2020/01/10"),
//     createData(1001, 2, "Microsoft", "$"+37000, "2020/01/10"),
//     createData(1002, 3, "Oracle", "$"+24000, "2020/01/10"),
//     createData(1004, 4, "Tesla", "$"+67000, "2020/01/10"),
//     createData(1005, 5, "Tim Hortons", "$"+49000, "2020/01/10"),
//   ];

const ListComponent = (props) => {
    const classes = useStyles();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(props.content)
        console.log(props.content);
      }, [props.content]);

    return(
        <div className={classes.container}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableTitle}>Past Transactions</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">
                            <Button variant="contained" color="primary" disableElevation className={classes.buttonDesign}>Add New Transaction</Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>ID</TableCell>
                            <TableCell align="left" className={classes.tableHead}>Employee ID</TableCell>
                            <TableCell align="left" className={classes.tableHead}>Business Name</TableCell>
                            <TableCell align="left" className={classes.tableHead}>Amount</TableCell>
                            <TableCell align="right" className={classes.tableHead}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row" style={{borderBottom:"none"}}>
                                    {row.id}
                                </TableCell>
                                <TableCell align="left" style={{borderBottom:"none"}}>{row.employee_id}</TableCell>
                                <TableCell align="left" style={{borderBottom:"none"}}>{row.business_name}</TableCell>
                                <TableCell align="left" style={{borderBottom:"none"}}>{row.amount}</TableCell>
                                <TableCell align="right" style={{borderBottom:"none"}}>{row.date}</TableCell>
                            </TableRow>
                        ))}
                        {/* {rows.map((row) => {
                            if (row.id === 1){
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row" style={{borderBottom:"none"}}>
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left" style={{borderBottom:"none"}}>{row.employee_id}</TableCell>
                                    <TableCell align="left" style={{borderBottom:"none"}}>{row.business_name}</TableCell>
                                    <TableCell align="left" style={{borderBottom:"none"}}>{row.amount}</TableCell>
                                    <TableCell align="right" style={{borderBottom:"none"}}>{row.date}</TableCell>
                                </TableRow>
                            }
                        })} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ListComponent;