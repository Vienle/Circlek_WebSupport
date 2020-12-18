import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const columns = [
    { id: 'name', 
        label: 'Promo',
        minWidth: 50,
        align: 'center',
    },
    { id: 'type',
      label: 'Type',
      minWidth: 50,
      align: 'center',
    },
    {
      id: 'code',
      label: 'Code',
      minWidth: 50,
      align: 'left',
    },
    {
      id: 'effDate',
      label: 'EffDate',
      minWidth: 80,
      align: 'center',
    },
    {
      id: 'expDate',
      label: 'ExpDate',
      minWidth: 80,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'unit',
      label: 'Unit',
      minWidth: 20,
      align: 'center'
    },
    {
        id: 'disctp',
        label: 'Disctp',
        minWidth: 30,
        align: 'center'
      },
      { id: 'point',
        label: 'Point', 
        minWidth: 50,
        align : 'center',
    },
      { id: 'qtySale', 
        label: 'QtySale', 
        minWidth: 50,
        align : 'center',
     },
    {
        id: 'qtySold',
        label: 'QtySold',
        minWidth: 50,
        align: 'center',
      },
      {
        id: 'qtyCus',
        label: 'QtyCus',
        minWidth: 30,
        align: 'center',
      },
      {
        id: 'othInfo',
        label: 'Othinfo',
        minWidth: 170,
        align: 'center',
      },
      
  ];
  
  function createData(name, type,code,effDate,expDate,unit,disctp,point,qtySale,qtySold,qtyCus,othInfo,stid) {
    return { name, type,code,effDate,expDate,unit,disctp,point,qtySale,qtySold,qtyCus,othInfo,stid };
  }
  
  const rows = [
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI'),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI'),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI'),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI'),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI'),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI'),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI'),    
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 350,
    },
  });
  
function PromotionStore(props) {
    const classes = useStyles();

    const menuId = () =>{ return Math.random().toString(36).substring(7);}
    const randomeString2 = () => { return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 50);}
    const generateId = () => {
        let id = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
        let randomeString =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log(menuId);
        return id + randomeString + menuId + randomeString2;
    }
    return (
      <Paper className={classes.root}>
          <div>
              <Typography color="error" variant="h5" component="h4" gutterBottom>
                  Store
              </Typography>
          </div>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
           <TableRow>
                {columns.map((column,index) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={
                        { minWidth: column.minWidth,
                          maxWidth: column.maxWidth   
                        }
                    }
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={generateId()}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={generateId()} align={column.align} style={
                            { minWidth: column.minWidth,
                              maxWidth: column.maxWidth   
                            }
                        }>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
}

PromotionStore.propTypes = {

}

export default PromotionStore

