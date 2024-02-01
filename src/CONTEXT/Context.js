import React, { useReducer, useContext, Children } from "react";


import { ActionReducer } from "./Action";

const WeatherAppcontext = React.createContext();

const WeatherAppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ActionReducer, {
        city: 'Pune',
        current: '',
        daily: ''
    });

    return (
        <>
            <WeatherAppcontext.Provider value={{ state, dispatch }}>

                {children}
            </WeatherAppcontext.Provider>

        </>

    )

}

export default WeatherAppProvider

export const UseWeatherAppContext = () => {
    return useContext(WeatherAppcontext)
}