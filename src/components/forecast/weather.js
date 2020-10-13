import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
    root: {
        background: "url('https://i.pinimg.com/originals/54/dd/4d/54dd4d5175e0296cb0199fef92bc9339.jpg'),no-repeat",
        backgroundSize: "100%",
    },
    container: {
        background: "rgba(0,0,0,0.5)",
        padding: "10px",
        margin: "auto",
        width: "fit-content;"
    }
});

const Weather = (props) => {

    const classes = useStyles();

    const {
        name,
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed}
    } = props.data;

    return (<div className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>
            <h2>{name}</h2>
            <h3>{name} is located at {lat}° N {lon}°</h3>
            <p><b>{name} Weather Forecast. Providing a local hourly {name} weather forecast of rain, sun, wind,
                humidity and temperature. Forecast includes detail for {name} weather today. Live weather
                reports
                from {name} weather stations and weather warnings that include risk of thunder, high UV index
                and
                forecast gales.</b></p>
            <h3>Real Temperature - {temp}°C</h3>
            <h4>Feel like - {feels_like}°C</h4>
            <pre>MIN - {temp_min}°C             MAX - {temp_max}°C</pre>
            <h4>Wind Speed - {speed}m/sec</h4>
            <h4>Pressure - {pressure}</h4>
            <h4>Humidity - {humidity}%</h4>
        </Container>
    </div>);
};


export default Weather;