export const fetchWeather = async (url) => {
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
};