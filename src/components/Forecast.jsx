import React from "react";

function Forecast({title}) {
    return <div>
        <div className="flex items-center justify-start mt-6 ">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:00 PM
                </p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" className="w-12"/>
                <p className="font-medium">11°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:00 PM
                </p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" className="w-12"/>
                <p className="font-medium">11°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:00 PM
                </p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" className="w-12"/>
                <p className="font-medium">11°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:00 PM
                </p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" className="w-12"/>
                <p className="font-medium">11°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:00 PM
                </p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" className="w-12"/>
                <p className="font-medium">11°</p>
            </div>
        </div>
    </div>
}

export default Forecast;
