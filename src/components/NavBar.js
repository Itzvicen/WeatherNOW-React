import React, { useState, useEffect } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';
import logo from '../assets/logo.png';

export const NavBar = ({newLocation}) => {
    
    const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if (city === "" || !city) return;

        newLocation(city);
    }

    return (
        <>
        <div className="animate__animated animate__fadeInDown sticky top-0 z-50 m-auto w-full  bg-slate-900 ">
        <nav className="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full md:w-full xl:w-4/5 bg-slate-900 py-2">
            <div className="flex items-center h-16">
                <div className="flex w-full justify-between items-center">
                <img src={logo} alt="" className='w-44 lg:w-56 lg:ml-0 -ml-5' />
                <div className="hidden md:hidden lg:block w-3/5">
                    <div className=" flex items-center justify-center">
                        <form onSubmit={onSubmit}>
                            <input type="text" className='items-center w-72 text-left space-x-3 px-4 h-11 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-l-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 font-medium' placeholder='Buscar ciudad' onChange={(e) => setCity(e.target.value)} />
                            <button className='px-5 h-11 bg-sky-400 text-white ring-1 ring-slate-900/10 hover:ring-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-r-lg dark:ring-0 dark:text-white dark:highlight-white/5 dark:hover:bg-slate-700 dark:bg-sky-400' > <FontAwesomeIcon icon={faSearch} /> Buscar</button>
                        </form>
                    </div>
                </div>
                    <div className="flex items-center w-1/5 gap-3 justify-center">
                        <a href="#contacto"><button className="block dark:text-sky-400 w-full px-4 py-2.5 text-sm font-bold text-sky-400 bg-sky-400/10 dark:bg-sky-400/10 rounded-xl sm:w-auto active:text-opacity-75 hover:bg-transparent  hover:scale-105 transition focus:outline-none">
                        ¿Dudas?</button>
                        </a>
                        <button type="button" onClick={handleThemeSwitch} className="hidden md:block py-1.5 px-3 border-l-2 border-slate-600 text-xl ">
                            {theme === 'dark' 
                            ? 
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path>
                            </svg>
                            :     
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-sky-500"></path></svg>
                            }
                        </button>
                    </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                <button type="button" onClick={handleThemeSwitch} className="bg-slate-100 md:hidden ml-8 dark:bg-slate-600 py-1.5 px-3 text-xl rounded-lg">
                            {theme === 'dark' 
                            ? 
                            <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            :     
                            <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                }
                </button>
                </div>
            </div>
            </div>
        </nav>
        </div>
            <form onSubmit={onSubmit} className="flex justify-center py-3 lg:hidden bg-slate-800/40" >
                            <input type="text" className='items-center w-68 text-left space-x-3 px-4 h-11 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-l-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 font-medium' placeholder='Buscar ciudad' onChange={(e) => setCity(e.target.value)} />
                            <button className='px-5 h-11 bg-sky-400 text-white ring-1 ring-slate-900/10 hover:ring-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-r-lg dark:ring-0 dark:text-white dark:highlight-white/5 dark:hover:bg-slate-700 dark:bg-sky-400' > <FontAwesomeIcon icon={faSearch} /> Buscar</button>
            </form>
        </>
    );
}
