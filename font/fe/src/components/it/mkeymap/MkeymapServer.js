import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';



const columns = [
  { id: 'text', label: 'Text', minWidth: 170, align: 'center' },
  { id: 'itemcode', label: 'ItemCode', minWidth: 50 },
  {
    id: 'createDate',
    label: 'CreateDate',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'updateDate',
    label: 'UpdateDate',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'store',
    label: 'Store',
    minWidth: 170,
    align: 'center',
   
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '75vh',
  },
});


export function MkeymapServer(props) {
  const classes = useStyles();
  const {listMkeymap} = props;

  const rows = listMkeymap;
  
  const showStoreList = (stores) => {
    console.log('1')
    //var storeArray = stores.split(",");
    handleOpen();
  }
  
  const [openDialog,setOpenDialog] = useState(false);

    const handleClose = () =>{
        setOpenDialog(false);
    }
    const handleOpen = () =>{
        setOpenDialog(true);
    }

  const renderViewStore = (stores) => {
    let xhtml = null;
    if (stores === "" 
      || stores === "9999;9991;GRT;GRTQ;HO;4001;4002;4003;4004;2001;2003;2006;2007;2009;2010;2011;2014;2015;2016;2020;2021;2022;2024;2025;2026;2028;2029;2032;2034;2035;2036;2037;2038;2039;2040;2041;2042;2043;2044;2045;2047;2048;2049;2050;2051;2052;2053;2054;2056;2057;2058;2059;2060;2061;2062;2063;2064;2065;2066;2067;2068;2069;2070;2072;2073;2074;2075;2076;2077;2078;2079;2080;2081;2082;2083;2084;2085;2086;2087;2088;2089;2090;2091;2092;2093;2094;2095;2096;2097;2098;2099;2100;2101;2102;2103;2104;2105;2106;2107;2108;2109;2110;2111;2112;2113;2114;2116;2117;2118;2119;2120;2121;2122;2123;2126;2127;2128;2129;2130;2131;2132;2133;2134;2135;2136;2137;2138;2139;2140;2141;2142;2143;2144;2145;2146;2147;2148;2149;2150;2151;2152;2153;2154;2155;2156;2157;2158;2159;2160;2161;2162;2163;2164;2166;2167") {
      xhtml = <Button variant="contained" color="primary" size="medium">All store</Button>
    }else{
      xhtml = <Button  
                variant="contained" 
                color="primary" 
                size="medium"
                onClick={() => showStoreList(stores)}  
                >Store</Button>
    }
   
   
    return  xhtml;
    
  }

  
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map(row => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          { column.id === 'store' ? renderViewStore(value) : value }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog  onClose={handleClose}  aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description" open={openDialog}>
                    Aasbaa
                </Dialog>
    </Paper>
  )
}


const mapStateToProps = state => {
  return {
    listMkeymap : state.mkeymap.listMkeymap,
  }
}

export default connect(mapStateToProps,null)(MkeymapServer)