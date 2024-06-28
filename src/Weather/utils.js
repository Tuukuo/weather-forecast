const baseUrl=process.env.REACT_APP_WEATHER_FORECAST_BASE_URL

export const getData=async()=>{
    try{
        const response =await fetch(`${baseUrl}/users`);
        return response.json();

    }catch(error){
        throw new Error(error.message);
    }
};