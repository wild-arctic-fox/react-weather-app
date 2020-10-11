import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import {fetchWeather} from "../../fech/fetchWeather";
import {API_KEY} from "../../constants/config";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
    root: {
        background: "url('https://i.pinimg.com/originals/54/dd/4d/54dd4d5175e0296cb0199fef92bc9339.jpg'),no-repeat",
        backgroundSize: "100%",
    },
    container: {
        background: "rgba(0,0,0,0.5)",
        padding: "10px",
    }
});

const Forecast = () => {

    const classes = useStyles();

    ///////////////////////////////////////////////////////////////
    // Params from URL
    const {city} = useParams();

    ///////////////////////////////////////////////////////////////
    // States
    const [data, setData] = useState(null); // weather

    ////////////////////////////////////////////////////////////////
    // По принципу componentDidMount и componentDidUpdate:
    // get cities & weather
    useEffect(() => {
        async function fetchData() {
            try {
                const resJson = await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                // set state
                setData(resJson);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);

    let cards = null;
    if (data !== null) {
        const {
            name,
            coord: {lat, lon},
            main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
            wind: {speed}
        } = data;

        cards = (<div className={classes.root}>
            <Container maxWidth="sm" className={classes.container}>
                <h2>{name}</h2>
                <h3>{data.name} is located at {lat}° N {lon}°</h3>
                <p><b>{name} Weather Forecast. Providing a local hourly {name} weather forecast of rain, sun, wind,
                    humidity and temperature. Forecast includes detail for {name} weather today. Live weather reports
                    from {name} weather stations and weather warnings that include risk of thunder, high UV index and
                    forecast gales.</b></p>
                <h3>Real Temperature - {temp}°C</h3>
                <h4>Feel like - {feels_like}°C</h4>
                <pre>MIN - {temp_min}°C             MAX - {temp_max}°C</pre>
                <h4>Wind Speed - {speed}m/sec</h4>
                <h4>Pressure - {pressure}</h4>
                <h4>Humidity - {humidity}%</h4>
            </Container>
        </div>);
    }
    return (
        <React.Fragment>
            <h1> Forecast </h1>
            {cards}
        </React.Fragment>
    );
};

export default Forecast;