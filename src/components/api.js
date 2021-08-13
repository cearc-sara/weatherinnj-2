const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: { q: 'newark,us', units: 'imperial' },
    headers: {
        'x-rapidapi-key': 'f6d2b48031msh6decfee54cb2065p1b3cd7jsne783991e40a2',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
};

export default options;