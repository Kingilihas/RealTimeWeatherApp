import React from 'react'
import { UseWeatherAppContext } from '../CONTEXT/Context'

const Humidity = () => {

    let { state: { current } } = UseWeatherAppContext();

    const uvlevel = (uvlevel) => {

        if (uvlevel <= 2) return 'Low';
        if (uvlevel <= 5) return 'Meduim';
        if (uvlevel <= 7) return 'High';
        if (uvlevel > 7) return 'Very High';

    }

    const getAverage = () => {
        let cnt = 0;

        let avg = 0;

        for (const [key, value] of Object.entries(current.temp)) {
            avg += value;
            cnt += 1;
        }

        return Math.round((avg / cnt))
    }

    return (
        <>
            {current ? <div className="humidityWrap">
                <div className="humidityData">
                    {/* <div className="title">
                        UV Index
                    </div>
                    <div>
                        {Math.round(current.uvi)} ({uvlevel(Math.round(current.uvi))})
                    </div> */}

                    <label htmlFor="cars" className="title">Choose a Crop </label>

                    <select name="cars" id="cars">
                        <option value="">Select</option>
                        <option value="volvo">Tomato</option>
                        <option value="saab">Soyabean</option>
                        <option value="mercedes">maize</option>
                        <option value="audi">wheat</option>
                        <option value="audi">Onion</option>
                    </select>


                </div>

                <div className="humidityData">
                    <div className="title">
                        Required rainfall 1 Acre region in liters
                    </div>
                    <div>
                        {current.humidity} %
                    </div>
                </div>
                <div className="humidityData">
                    <div className="title">
                        Predicted rainfall 1 Acre region in liters
                    </div>
                    <div>
                        {getAverage()} <sup>o</sup>C
                    </div>
                </div>
                <div className="humidityData">
                    <div className="title">
                        Water needed to supply 1 Acre region in liters
                    </div>
                    <div>
                        {Math.round(current.wind_speed)} km/h
                    </div>
                </div>
                <div className="humidityData">
                    <div className="title">
                        Min Temperature
                    </div>
                    <div>
                        {current.temp.min} <sup>o</sup>C
                    </div>
                </div>
                <div className="humidityData">
                    <div className="title">
                        Max Temperature
                    </div>
                    <div>
                        {current.temp.max}<sup>o</sup>C
                    </div>
                </div>
            </div> : ""
            }
        </>
    )
}

export default Humidity
