import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {currencies} from '../../constants/config';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '23ch',
        },
    },
}));

 const MultilineTextFields = () => {
     const classes = useStyles();
     const [currency, setCurrency] = React.useState('EUR');

     const handleChange = (event) => {
         setCurrency(event.target.value);
     };

     return (
         <div className={classes.root}>
             <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your city"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </div>
    );
};

export default MultilineTextFields;