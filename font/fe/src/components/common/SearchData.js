import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  wrapSearch : {
    display: "flex",
    maxWidth : '100',
    marginTop :'15px',
    paddingBottom :'15px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '20%',
    maxWidth : '40%',
    height : '150'
    
    // maxWidth: 300,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  chips: {
    display: 'flex',
    // flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  Select:{
    margin : "0px"
  },
  searchSup : {
    maxWidth : "50%",
    minWidth : "30%"
  },
  button: {
    backgroundColor: '#1AED95',
    '&:hover': {
      backgroundColor: '#0DD657',
    },
  },
  buttonProgress: {
    color: '#FA8A6C',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250,
    },
  },
};

const stores = [
  'HN2001',
  'HN2002',
  'HN2003',
  'HN2004',
  'HN2005',
  'HN2006'
];

function getStyles(store, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(store) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export function SearchData(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [itemcodes,setItemcode] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dataSearch,isProduct } = props;
  const [disable,setDisable] = useState(false);

  const search = () =>{
    dataSearch(itemcodes,personName)
    setItemcode('')
    console.log('search',itemcodes)
  }
  const onchangeItemcode = event => {
    const name = event.target;
    const value = name.value;
    setItemcode(value);
  }

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  function renderInputLabel(){
    return personName.length === 0 ? <InputLabel id="demo-mutiple-chip-label">Store</InputLabel> : "";
  } 

  return (
      <div className={classes.wrapSearch}>
          <TextField
          className = {classes.searchSup}
          id="outlined-textarea"
          label="Search"
          placeholder="Itemcode or barcode"
          multiline
          variant="outlined"
          value={itemcodes}
          name="itemcodes"
          onChange={onchangeItemcode}
          // fullWidth
        />

        { isProduct === true ? <FormControl className={classes.formControl}>
                {renderInputLabel()}
                <Select
                  labelId="demo-mutiple-chip-label"
                  id="demo-mutiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  name="checkbox"
                 
                  input={<Input id="select-multiple-chip input" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip 
                            key={value} 
                            label={value}
                            className={classes.chip} />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {stores.map((store) => (
                    <MenuItem key={store} value={store} style={getStyles(store, personName, theme)}>
                      {store}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> : ''}

              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SearchIcon />}
                  onClick={search}    
                  disabled={itemcodes === null || itemcodes.length < 6 ? true : false}
                >
                  Search
                </Button>
              {/* {loading && <CircularProgress size={24} className={classes.buttonProgress} />} */}
              </div>
              
      </div>
  );
}
SearchData.propTypes = {
  dataSearch : PropTypes.func
}

export default SearchData;