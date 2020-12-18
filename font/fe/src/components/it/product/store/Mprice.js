import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(itemcode, barcode, validFor, createDate, updateDate,sellItem,dcItem,allowOrdDC) {
  return { itemcode, barcode, validFor, createDate, updateDate,sellItem,dcItem,allowOrdDC };
}

const rows = [
  createData('123456', 123456789123, 'Y', '2020-12-20', '2020-12-20','Y','N','N'),
  createData('123456', 123456789123, 'Y', '2020-12-20', '2020-12-20','Y','N','N'),
  createData('123456', 123456789123, 'Y', '2020-12-20', '2020-12-20','Y','N','N'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Mprice() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ItemCode</StyledTableCell>
            <StyledTableCell align="center">BarCode</StyledTableCell>
            <StyledTableCell align="center">ValidFor</StyledTableCell>
            <StyledTableCell align="center">CreateDate</StyledTableCell>
            <StyledTableCell align="center">UpdateDate</StyledTableCell>
            <StyledTableCell align="center">SellItem</StyledTableCell>
            <StyledTableCell align="center">DCItem</StyledTableCell>
            <StyledTableCell align="center">AllowOrDC</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.itemcode}>
              <StyledTableCell component="th" scope="row">
                {row.itemcode}
              </StyledTableCell>
              <StyledTableCell align="center">{row.barcode}</StyledTableCell>
              <StyledTableCell align="center">{row.validFor}</StyledTableCell>
              <StyledTableCell align="center">{row.createDate}</StyledTableCell>
              <StyledTableCell align="center">{row.updateDate}</StyledTableCell>
              <StyledTableCell align="center">{row.sellItem}</StyledTableCell>
              <StyledTableCell align="center">{row.dcItem}</StyledTableCell>
              <StyledTableCell align="center">{row.allowOrdDC}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}