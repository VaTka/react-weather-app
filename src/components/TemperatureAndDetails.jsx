import React from "react";
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
    return <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>Cloudy</p>
        </div>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" className="w-20"/>
            <p className="text-5xl"> 10°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    Real Fell:
                    <span className="font-medium ml-1">5°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className="font-medium ml-1">70%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Wind:
                    <span className="font-medium ml-1">11 km/h</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun/>
            <p className="font-light">Rise: <span className="font-medium ml-1">07:50 AM</span></p>
            <p className="font-light">|</p>
            <UilSunset/>
            <p className="font-light">Set: <span className="font-medium ml-1">05:50 PM</span></p>
            <p className="font-light">|</p>
            <UilTemperature/>
            <p className="font-light">High: <span className="font-medium ml-1">13°</span></p>
            <p className="font-light">|</p>
            <UilTemperature/>
            <p className="font-light">Low: <span className="font-medium ml-1">7°</span></p>
        </div>
    </div>
}

export default TemperatureAndDetails;
