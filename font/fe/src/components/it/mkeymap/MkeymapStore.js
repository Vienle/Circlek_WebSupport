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

function createData(text, itemcode, createDate, updateDate) {
  return { text, itemcode, createDate, updateDate};
}

const rows = [
  createData('FS - Do Uong', '004', '2019-04-09 08:44:00', '2019-11-01 14:10:00'),
  createData('FS - Do An', '017', '2019-04-09 08:44:00', '2019-04-09 08:44:00'),
  createData('FS - Do An', '017', '2019-04-09 08:44:00', '2019-04-09 08:44:00')
];

const useStyles = makeStyles({
  table: {
    // maxWidth: 700,
  },
});

export default function MkeymapStore() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>text</StyledTableCell>
            <StyledTableCell align="center">itemcode</StyledTableCell>
            <StyledTableCell align="center">createDate</StyledTableCell>
            <StyledTableCell align="center">updateDate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.itemcode}>
              <StyledTableCell component="th" scope="row">
                {row.itemcode}
              </StyledTableCell>
              <StyledTableCell align="center">{row.text}</StyledTableCell>
              <StyledTableCell align="center">{row.createDate}</StyledTableCell>
              <StyledTableCell align="center">{row.updateDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}