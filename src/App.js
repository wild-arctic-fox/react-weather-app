import React, {useEffect, useState} from 'react';
import './App.css';
import ImgMediaCard from './components/card/card';
import Form from "./components/form-elements/form";
import {API_KEY} from "./constants/config";

function App() {
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
    useEffect(async () => {
        try {
            ////////////////////////////////////////////////////////////////
            // Get cities
            const response = await fetch(
                'https://parseapi.back4app.com/classes/City?limit=30&keys=name,cityId',
                {
                    headers: {
                        'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', // This is the fake app's application id
                        'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', // This is the fake app's readonly master key
                    }
                }
            );
            const dataCities = await response.json(); // Here you have the data that you need
            const cities = dataCities.results;

            ////////////////////////////////////////////////////////////////
            // Get weather
            const result = [];
            for (let i = 0; i < cities.length; i++) {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i].name}&appid=${API_KEY}&units=metric`);
                const resJson = await res.json();
                if (resJson.cod !== '404') {
                    result.push(resJson);
                }
            }
            // set state
            setData(result);
        } catch (e) {
            console.log(e);
        }
    }, []);

    let cards = data.map((item) => {
        return (<ImgMediaCard cityName={item.name} temp={item.main.temp} windSpeed={item.wind.speed}/>)
    });

    ////////////////////////////////////////////////////////////////
    // Get weather by cities match
    const getParticularWeather = async (e) => {
        e.preventDefault();
        const reg = inputValue + ' ';

        ////////////////////////////////////////////////////////////////
        // Get cities
        const where = encodeURIComponent(JSON.stringify({
            "name": {
                "$regex": `^${reg}*`
            },
            "population": {
                "$gt": 100000
            }
        }));
        const response = await fetch(
            `https://parseapi.back4app.com/classes/City?count=1&limit=10&order=name&keys=name,cityId&where=${where}`,
            {
                headers: {
                    'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', // This is the fake app's application id
                    'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', // This is the fake app's readonly master key
                }
            }
        );
        const dataCities = await response.json(); // Here you have the data that you need
        const cities = dataCities.results;

        ////////////////////////////////////////////////////////////////
        // Get weather
        const result = [];
        for (let i = 0; i < cities.length; i++) {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i].name}&appid=${API_KEY}&units=metric`);
            const resJson = await res.json();
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
        <div className="App">
            <h1>Weather</h1>
            <Form showWeather={getParticularWeather} value={inputValue} onChange={valueChangeHandler}/>
            <div className="box">
                {cards}
            </div>
        </div>
    );
}

export default App;
