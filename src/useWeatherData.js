import { useEffect, useState } from 'react';

function useWeatherData(){
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        fetch('https://api.weather.gov/stations?state=VA&limit=500')
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                console.log(data);
            })
            .catch(err => console.log(err))
        }, []);

        return weather;
}

export default useWeatherData;