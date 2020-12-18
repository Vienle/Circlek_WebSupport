import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
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
      {
        id: 'stid',
        label: 'Stid',
        minWidth: 30,
        maxWidth: 180,
        align: 'center',
      },
  ];
  
  function createData(name, type,code,effDate,expDate,unit,disctp,point,qtySale,qtySold,qtyCus,othInfo,stid) {
    return { name, type,code,effDate,expDate,unit,disctp,point,qtySale,qtySold,qtyCus,othInfo,stid };
  }
  
  const rows = [
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI','2001;2002;2003;2004;2005;2006;2007;2008;2009;2010;2011;2012;2013;2014;2015;2016;2017;2018;2019;2020;2021;2022;2023;2024;2025;2026;2027;2028;2029;2030;2031;2032;2033;2034;2035;2036;2037;2038;2039;2040;2041;2042;2043;2044;2045;2046;2047;2048;2049;2050;2051;2052;2053;2054;2055;2056;2057;2058;2059;2060;2061;2062;2063;2064;2065;2066;2067;2068;2069;2070;2071;2072;2073;2074;2075;2076;2077;2078;2079;2080;2081;2082;2083;2084;2085;2086;2087;2088;2089;2090;2091;2092;2093;2094;2095;2096;2097;2098;2099;2100;2101;2102;2103;2104;2105;2106;2107;2108;2109;2110;2111;2112;2113;2114;2115;2116;2117;2118;2119;2120;2121;2122;2123;2124;2125;2126;2127;2128;2129;2130;2131;2132;2133;2134;2135;2136;2137;2138;2139;2140;2141;2142;2143;2144;2145;2146;2147;2148;2149;2150;2151;2152;2153;2154;2155;2156;2157;2158;2159;2160;2161;2162;2163;2164;2165;2166;2167;2223;2224;9991;9999;GRT;GRTQ;QN'),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI',''),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI',''),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI',''),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI',''),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI',''),
    createData('11077', 'GI', '235320', '2020-10-08 00:00:00.000','2020-10-08 00:00:00.000',' ','S','2000.00','0.00','0','0.00','MUNIRA Nuoc Ep Vai 170ml/1 Goiþ14000þGOIþGOI',''),    
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 320,
    },
  });
  
function PromotionServer(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const menuId = () =>{ return Math.random().toString(36).substring(7);}
    const randomeString2 = () => { return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 50);}
    const generateId = () => {
        let id = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
        let randomeString =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        
        return id + randomeString + menuId + randomeString2;
    }
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const renderStidView = () => {
        return <Paper>
            StoreID
        </Paper>
    }
  
    return (
      <Paper className={classes.root}>
          <div>
              <Typography color="error" variant="h5" component="h4" gutterBottom>
                  SERVER
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
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={generateId()}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      console.log('value',value)
                      return (
                        <TableCell key={generateId()} align={column.align} style={
                            { minWidth: column.minWidth,
                              maxWidth: column.maxWidth   
                            }
                        }>
                          {column.id === 'stid' ? renderStidView() : value}
                          {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
}

PromotionServer.propTypes = {

}

export default PromotionServer

