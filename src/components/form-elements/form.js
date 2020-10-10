import React from 'react';
import Input from './input';
import Button from "./button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        padding: "10px"
    }
});

export default function Form({showWeather, onChange, value}) {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={showWeather} >
            <Input onChangeInput={onChange} valueInput={value}/>
            <br/>
            <Button show={showWeather}/>
        </form>
    );
}
