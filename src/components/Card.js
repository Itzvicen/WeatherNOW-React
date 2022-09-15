import { Loading } from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCloudSun, faCompass, faDroplet, faEye, faSun, faThermometer0, faWarning, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export const Card = ({loadingData, showData, weather, forecast, tiempo, dias}) => {

    function verDias (e) {
        e.preventDefault();
        console.log('ver dias');

        document.getElementById('proxDias').style.visibility="visible"
        document.getElementById('proxDias').style.height="auto"
        document.getElementById('proxDias').style.marginBottom="0"

    }

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + "/" + month + "/" + year;
    let hour = today.getHours();
    let min = today.getMinutes();


    if (loadingData){
        return <Loading />;
    }

    let url = ""
    let iconUrl = ""

    let iconUrl3 = ""
    let iconUrl6 = ""
    let iconUrl9 = ""

    let iconDia11 = ""
    let iconDia19 = ""
    let iconDia27 = ""
    let iconDia35 = ""

    let forecastDate3 = ""
    let forecastDate6 = ""
    let forecastDate9 = ""
    let forecastDate12 = ""

    const days = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];

    let Dia11 = ""
    let forecastDia11 = ""

    let Dia19 = ""
    let forecastDia19 = ""

    let Dia27 = ""
    let forecastDia27 = ""

    let Dia35 = ""
    let forecastDia35 = ""

    if (showData){
        url = "https://openweathermap.org/img/wn/";
        iconUrl = url + weather.weather[0].icon + "@4x.png";

        iconUrl3 = url + forecast.list[1].weather[0].icon + "@4x.png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + "@4x.png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + "@4x.png";

        iconDia11 = url + forecast.list[11].weather[0].icon + "@4x.png";
        iconDia19 = url + forecast.list[19].weather[0].icon + "@4x.png";
        iconDia27 = url + forecast.list[27].weather[0].icon + "@4x.png";
        iconDia35 = url + forecast.list[35].weather[0].icon + "@4x.png";

        forecastDate3 = forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(11, 13);
        forecastDate12 = forecast.list[4].dt_txt.substring(11, 13);

        Dia11 = new Date(forecast.list[7].dt_txt).getDay();
        forecastDia11 = days[Dia11];

        Dia19 = new Date(forecast.list[15].dt_txt).getDay();
        forecastDia19 = days[Dia19];

        Dia27 = new Date(forecast.list[23].dt_txt).getDay();
        forecastDia27 = days[Dia27];

        Dia35 = new Date(forecast.list[31].dt_txt).getDay();
        forecastDia35 = days[Dia35];

        if ( weather.sys.country === "ES") {
            weather.sys.country = "España";
        } else if ( weather.sys.country === "US") {
            weather.sys.country = "Estados Unidos";
        } else if ( weather.sys.country === "MX") {
            weather.sys.country = "México";
        } else if ( weather.sys.country === "AR") {
            weather.sys.country = "Argentina";
        } else if ( weather.sys.country === "CO") {
            weather.sys.country = "Colombia";
        } else if ( weather.sys.country === "CL") {
            weather.sys.country = "Chile";
        } else if ( weather.sys.country === "PE") {
            weather.sys.country = "Perú";
        } else if ( weather.sys.country === "BR") {
            weather.sys.country = "Brasil";
        } else if ( weather.sys.country === "VE") {
            weather.sys.country = "Venezuela";
        } else if ( weather.sys.country === "GB") {
            weather.sys.country = "Gran Bretaña";
        } else if ( weather.sys.country === "IT") {
            weather.sys.country = "Italia";
        } else if ( weather.sys.country === "DE") {
            weather.sys.country = "Alemania";
        } else if ( weather.sys.country === "FR") {
            weather.sys.country = "Francia";
        }
    }

    return (
        <div id="card" className="lg:mt-10 mt-6 mb-44">
            {
                showData === true ? (
                    <div className="w-full mt-2 flex flex-wrap justify-center gap-x-4">
                        <div className="lg:w-6/12 w-11/12 ">
                            <div className="dark:bg-slate-800/50 bg-slate-300/20 backdrop-blur-lg rounded-lg shadow-md flex justify-center items-center flex-wrap">
                                <h2 className="block w-full bg-black/30 rounded-t-lg p-2 text-white font-semibold text-lg text-shadow">{weather.name}, {weather.sys.country} <span className=" text-sm text-shadow">A las {hour}:{min}</span></h2>
                                <div className="w-4/5 py-3 px-4">
                                    <h2 className=" text-white lg:text-8xl text-6xl font-semibold text-shadow">{(weather.main.temp - 273.15).toFixed(0)}º</h2>
                                    <h2 className=" first-letter:uppercase font-bold text-2xl text-shadow text-white">{weather.weather[0].description}</h2>
                                    <h2 className=" text-white font-bold text-2xl text-shadow">Max. {(weather.main.temp_max - 273.15).toFixed(0)}º  •  Min. {(weather.main.temp_min - 273.15).toFixed(0)}º</h2>
                                </div>
                                <div className="w-1/5">
                                    <img src={iconUrl} className="w-64 drop-shadow-lg" alt="icon" />
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md flex items-center mt-4 pb-4 px-4 pt-3 flex-wrap dark:bg-slate-900">
                                    <h2 className="block w-full text-black font-bold text-xl dark:text-white pb-2">Pronóstico de hoy para {weather.name}, {weather.sys.country}</h2>
                                        <div className="w-1/4 flex-col m-auto items-center text-center py-3 borde-medio">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDate3}h</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[1].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconUrl3} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[1].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[1].pop)*100.).toFixed(0)}%</span></p>
                                        </div>

                                        <div className="w-1/4  flex-col m-auto items-center text-center py-3 borde-medio">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDate6}h</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[2].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconUrl6} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[2].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[2].pop)*100.).toFixed(0)}%</span></p>
                                        </div>

                                        <div className="w-1/4  flex-col m-auto items-center text-center py-3 borde-medio">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDate9}h</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[3].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconUrl9} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[3].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[3].pop)*100.).toFixed(0)}%</span></p>
                                        </div>

                                        <div className="w-1/4  flex-col m-auto items-center text-center py-3">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDate12}h</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[3].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconUrl9} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[3].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[4].pop)*100.).toFixed(0)}%</span></p>
                                        </div>
                                        <button className="block mt-2 text-white font-bold bg-blue-600 py-2 px-3 text-sm rounded-3xl hover:shadow-md hover:shadow-blue-600/40">Próximas horas</button>
                            </div>

                            <div className="flex w-full justify-between">
                                <div className="dark:bg-slate-800/50 ancho bg-slate-300/40 backdrop-blur-lg rounded-lg shadow-md flex justify-center mt-4 items-center flex-wrap">
                                    <div className="w-full py-3 px-4">
                                        <h2 className="block w-full rounded-t-lg p-2 text-white font-semibold text-lg text-shadow"><FontAwesomeIcon icon={faThermometer0} /> Sensación</h2>
                                        <h2 className=" text-white lg:text-8xl text-5xl font-semibold py-1 text-shadow">{(weather.main.feels_like - 273.15).toFixed(0)}º</h2>
                                        <h2 className=" text-white font-bold text-lg py-2">Similar a la temperatura real</h2>
                                    </div>
                                </div>

                                <div className="dark:bg-slate-800/50 ancho bg-slate-300/40 backdrop-blur-lg rounded-lg shadow-md flex justify-center mt-4 items-center flex-wrap">
                                    <div className="w-full py-3 px-4">
                                        <h2 className="block w-full rounded-t-lg p-2 text-white font-semibold text-lg text-shadow"><FontAwesomeIcon icon={faEye} /> Visibilidad</h2>
                                        <h2 className=" text-white lg:text-8xl text-5xl font-semibold text-shadow py-1">{(weather.visibility)/1000} km</h2>
                                        <h2 className=" text-white font-bold text-lg py-2">Hay muy buena visibilidad</h2>
                                    </div>
                                </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md flex -mb-5 items-center mt-4 pb-4 px-4 pt-3 flex-wrap dark:bg-slate-900">
                                    <h2 className="block w-full text-black font-bold text-xl dark:text-white pb-2">Pronóstico diario</h2>
                                        <div className="w-1/4 flex-col m-auto items-center text-center py-3 borde-medio">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDia11}</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[11].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconDia11} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[11].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[11].pop)*100.).toFixed(0)}%</span></p>
                                        </div>

                                        <div className="w-1/4  flex-col m-auto items-center text-center py-3 borde-medio">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDia19}</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[19].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconDia19} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[19].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[19].pop)*100.).toFixed(0)}%</span></p>
                                        </div>

                                        <div className="w-1/4  flex-col m-auto items-center text-center py-3 borde-medio">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDia27}</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[27].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconDia27} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[27].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[27].pop)*100.).toFixed(0)}%</span></p>
                                        </div>

                                        <div className="w-1/4  flex-col m-auto items-center text-center py-3">
                                            <p className="font-bold text-black pb-2 dark:text-white">{forecastDia35}</p>
                                            <p className="font-bold text-blue-600 text-4xl">{(forecast.list[35].main.temp - 273.15).toFixed(0)}º</p>
                                            <p><img src={iconDia35} className="m-auto w-20 drop-shadow-lg" alt="" />{forecast.list[35].weather[0].desciption}</p>
                                            <p className="font-semibold"><FontAwesomeIcon className="text-sky-400" icon={faDroplet} /> <span className="text-black dark:text-white">{((forecast.list[31].pop)*100.).toFixed(0)}%</span></p>
                                        </div>
                                        <button onClick={verDias} className="block mt-2 text-white font-bold bg-blue-600 py-2 px-3 text-sm rounded-3xl hover:shadow-md hover:shadow-blue-600/40">Información completa</button>
                            </div>

                            <div id="proxDias" className="w-full pt-4">
                                    <div className="mx-auto lg:max-w-full max-w-md rounded-2xl dark:bg-slate-800/20 backdrop-blur-lg bg-white/30 p-2">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white dark:bg-slate-800 px-4  text-left text-lg font-bold text-blue-600 dark:text-white hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <div className="flex items-center w-full justify-between">
                                                    <span className="w-2/3">{forecastDia11}</span>
                                                    <img src={iconDia11} className="w-12 drop-shadow-lg" alt="" />
                                                    <p className="w-2/3 text-right pr-4 lg:pr-12" >{(forecast.list[11].main.temp_min - 273.15).toFixed(0)}º - {(forecast.list[11].main.temp_max - 273.15).toFixed(0)}º</p>
                                                </div>
                                                
                                                <ChevronUpIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-sky-400`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 px-4 pt-4 pb-4 text-sm text-gray-500 rounded-lg dark:bg-slate-800 bg-white">
                                                <div className="flex-col">
                                                    <div className="flex lg:border-b-2 border-b-0 justify-between flex-wrap">
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faThermometer0} /> Sensación</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWind} /> Viento</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWater} /> Humedad</h2>
                                                            <h3 className="pl-7 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-8 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                    <div className="lg:flex justify-between w-full hidden">
                                                    <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white dark:bg-slate-800 px-4 text-left dark:text-white text-lg font-bold text-blue-600 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <div className="flex items-center w-full justify-between">
                                                    <span className="w-2/3">{forecastDia19}</span>
                                                    <img src={iconDia19} className="w-12 drop-shadow-lg" alt="" />
                                                    <p className="w-2/3 text-right pr-4 lg:pr-12" >{(forecast.list[19].main.temp_min - 273.15).toFixed(0)}º - {(forecast.list[19].main.temp_max - 273.15).toFixed(0)}º</p>
                                                </div>
                                                
                                                <ChevronUpIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-sky-400`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 px-4 pt-4 pb-4 text-sm text-gray-500 rounded-lg bg-white dark:bg-slate-800">
                                                <div className="flex-col">
                                                    <div className="flex lg:border-b-2 border-b-0 justify-between flex-wrap">
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faThermometer0} /> Sensación</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWind} /> Viento</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWater} /> Humedad</h2>
                                                            <h3 className="pl-7 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-8 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                    <div className="lg:flex justify-between w-full hidden">
                                                    <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white dark:bg-slate-800 px-4 text-left text-lg font-bold text-blue-600 dark:text-white hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <div className="flex items-center w-full justify-between">
                                                    <span className="w-2/3">{forecastDia27}</span>
                                                    <img src={iconDia27} className="w-12 drop-shadow-lg" alt="" />
                                                    <p className="w-2/3 text-right pr-4 lg:pr-12" >{(forecast.list[27].main.temp_min - 273.15).toFixed(0)}º - {(forecast.list[27].main.temp_max - 273.15).toFixed(0)}º</p>
                                                </div>
                                                
                                                <ChevronUpIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-sky-400`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 px-4 pt-4 pb-4 text-sm text-gray-500 rounded-lg bg-white dark:bg-slate-800">
                                                <div className="flex-col">
                                                    <div className="flex lg:border-b-2 border-b-0 justify-between flex-wrap">
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faThermometer0} /> Sensación</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWind} /> Viento</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWater} /> Humedad</h2>
                                                            <h3 className="pl-7 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-8 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                    <div className="lg:flex justify-between w-full hidden">
                                                    <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white dark:bg-slate-800 px-4 text-left text-lg font-bold text-blue-600 dark:text-white hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <div className="flex items-center w-full justify-between">
                                                    <span className="w-2/3">{forecastDia35}</span>
                                                    <img src={iconDia35} className="w-12 drop-shadow-lg" alt="" />
                                                    <p className="w-2/3 text-right pr-4 lg:pr-12" >{(forecast.list[35].main.temp_min - 273.15).toFixed(0)}º - {(forecast.list[35].main.temp_max - 273.15).toFixed(0)}º</p>
                                                </div>
                                                
                                                <ChevronUpIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-sky-400`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 px-4 pt-4 pb-4 text-sm text-gray-500 rounded-lg bg-white dark:bg-slate-800">
                                                <div className="flex-col">
                                                    <div className="flex lg:border-b-2 border-b-0 justify-between flex-wrap">
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faThermometer0} /> Sensación</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWind} /> Viento</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faWater} /> Humedad</h2>
                                                            <h3 className="pl-7 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-8 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col lg:w-1/3 w-1/2 lg:hidden">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                    <div className="lg:flex justify-between w-full hidden">
                                                    <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faSun} /> Indice UV</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{(forecast.list[11].main.feels_like - 273.15).toFixed(0)}º</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faCloud} /> Nubosidad</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{((forecast.list[11].wind.speed)*3.6).toFixed(0)} km/h</h3>
                                                        </div>
                                                        <div className="flex-col w-1/3">                                                    
                                                            <h2 className="block w-full rounded-t-lg p-2 text-black dark:text-white font-semibold text-base"><FontAwesomeIcon className="text-blue-600" icon={faDroplet} /> Lluvia</h2>
                                                            <h3 className="pl-6 font-bold text-black dark:text-white text-lg -mt-2 pb-2">{forecast.list[11].main.humidity}%</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>
                        
                        </div>
                        <div className="lg:w-3/12 w-11/12">
                            <div className=" bg-white p-4 py-4 rounded-lg h-52 mb-4 lg:mt-0 mt-4 dark:bg-slate-900">
                                <h2 className="font-bold text-xl text-black dark:text-white pb-4">INFORMACIÓN SOBRE EL VIENTO</h2>
                                <h3 className="font-bold dark:text-white"><FontAwesomeIcon icon={faWind} /> Velocidad <span className=" font-normal text-lg">{((weather.wind.speed)*3.6).toFixed(0)} km/h</span></h3>
                                <h3 className="font-bold dark:text-white"><FontAwesomeIcon icon={faWarning} /> Rafagas <span className=" font-normal  text-lg">{((weather.wind.gust)*3.6).toFixed(0)} km/h</span></h3>
                                <h3 className="pb-3 font-bold dark:text-white"><FontAwesomeIcon icon={faCompass} /> Dirección del viento <span className="font-normal text-lg">{weather.wind.deg}º</span></h3>
                                <button className="block text-white font-bold bg-blue-600 py-2 px-3 text-sm rounded-3xl hover:shadow-md hover:shadow-blue-600/40">Ver detalles</button>
                            </div>

                            <div className=" bg-white p-4 py-4 rounded-lg h-36 dark:bg-slate-900">
                                <h2 className="font-semibold text-xl text-black pb-1 dark:text-white border-slate-300 border-b-2"><FontAwesomeIcon icon={faWater} /> HUMEDAD</h2>
                                <h2 className="text-slate-900 lg:text-7xl text-6xl font-semibold text-shadow lg:pt-2 pt-3 dark:text-white">{weather.main.humidity}%</h2>
                            </div>
                        </div>
                
                    </div>
                ):(
                    <div className="h-screen">
                                <h2 className="text-center font-bold text-2xl text-white backdrop-blur-lg bg-sky-400/10 lg:w-2/4 w-11/12 m-auto py-6 px-4 mb-10 rounded-xl">Introduce en el buscador la ciudad que desees para ver el tiempo</h2>
                                <div className="lg:w-4/12 w-11/12 m-auto">
                                    <div className="dark:bg-slate-800/50 bg-slate-300/20 rounded-lg shadow-md flex justify-center items-center flex-wrap">
                                        <h2 className="block w-full bg-black/30 rounded-lg text-center p-2 backdrop-blur-lg text-white font-semibold text-xl text-shadow">{weather.name}, <span className=" text-lg text-shadow">A las {hour}:{min}</span></h2>
                                        
                                    </div>    
                                </div>
                    </div>
                )
            }
        </div>
    )
}