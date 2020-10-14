import React, {useEffect, useState} from 'react';
import ImgMediaCard from '../../components/card/card';
import Form from "../../components/form-elements/form";
import {fetchCities, fetchMatchedCities} from "../../fetch/fetchCities";
import {fetchWeather} from "../../fetch/fetchWeather";
import {API_KEY} from "../../constants/config";

const Main = () => {
    ////////////////////////////////////////////////////////////////
    // States
    const [data, setData] = useState([]); // weather
    const [inputValue, setInputValue] = useState(''); //text from input

    ////////////////////////////////////////////////////////////////
    // input onChange
    const valueChangeHandler = (val) => {
        setInputValue(val.target.value);
    };

    ////////////////////////////////////////////////////////////////
    // По принципу componentDidMount и componentDidUpdate:
    // get cities & weather
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            ////////////////////////////////////////////////////////////////
            // Get cities
            const cities = await fetchCities('https://parseapi.back4app.com/classes/City?limit=30&keys=name,cityId');

            ////////////////////////////////////////////////////////////////
            // Get weather
            const result = [];
            for (let i = 0; i < cities.length; i++) {
                const resJson = await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i].name}&appid=${API_KEY}&units=metric`);
                if (resJson.cod !== '404') {
                    result.push(resJson);
                }
            }
            // set state
            setData(result);
        } catch (e) {
            console.log(e);
        }
    };

    ////////////////////////////////////////////////////////////////
    // Get weather by cities match
    const getParticularWeather = async (e) => {
        e.preventDefault();
        const reg = inputValue + ' ';

        ////////////////////////////////////////////////////////////////
        // Get cities
        const cities = await fetchMatchedCities(reg);

        ////////////////////////////////////////////////////////////////
        // Get weather
        const result = [];
        for (let i = 0; i < cities.length; i++) {
            const resJson = await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i].name}&appid=${API_KEY}&units=metric`);
            if (resJson.cod !== '404') {
                result.push(resJson);
            }
        }
        // set state
        setData(result);
    };

    ////////////////////////////////////////////////////////////////
    // Display html
    ////////////////////////////////////////////////////////////////
    return (
        <div>
            <h1>Weather</h1>
            <Form showWeather={getParticularWeather} value={inputValue} onChange={valueChangeHandler}/>
            <div className="box">
                {data.map((item) => {
                    return (<ImgMediaCard key={item.name} cityName={item.name} temp={item.main.temp}
                                          windSpeed={item.wind.speed}/>)
                })}
            </div>
        </div>
    );
};

export default Main;
