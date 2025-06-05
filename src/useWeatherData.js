import { useEffect, useState } from 'react';

function useWeatherData(){
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        fetch('https://api.weather.gov')
            .then(res => res.json())
            .then(data => setWeather(data))
            .catch(err => console.log(err))
        }, []);

        return weather;
}

export default useWeatherData();