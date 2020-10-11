export const fetchCities = async (url) => {
    const response = await fetch(
        url,
        {
            headers: {
                'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', // This is the fake app's application id
                'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', // This is the fake app's readonly master key
            }
        }
    );
    const dataCities = await response.json(); // Here you have the data that you need
    return dataCities.results;
};

export const fetchMatchedCities = async (reg) => {
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
    return dataCities.results;
};

