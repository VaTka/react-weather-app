import React, {useState} from "react";
import {UilSearch, UilLocationPinAlt} from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {
    const [city, setCity] = useState("");
    const handleSearchClick = () => {
        if (city !== '') setQuery({q: city})
    }
    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                setQuery({lat, lon})
            })
        }
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit);
    }
    return <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="Search for city..."
                   className="text-xl font-light p-2 w-full focus:outline-none capitalize placeholder:lowercase"/>
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick} />
            <UilLocationPinAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button name="metric" className="text-xl text-white font-light hover:scale-125 transition ease-out" onClick={handleUnitsChange}>°C
            </button>
            <p className="text-xl text-white mx-1">|</p>
            <button name="imperial" className="text-xl text-white font-light hover:scale-125 transition ease-out" onClick={handleUnitsChange}>°F
            </button>
        </div>
    </div>

}

export default Inputs;
