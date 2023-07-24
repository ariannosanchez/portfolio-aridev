import React from 'react'
import profile from '../assets/aridevv.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

export const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 pb-20 md:pb-0">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Contenedor de la imagen */}
        <div className="flex justify-center mt-40 md:mt-0 md:w-1/3">
            {/* Centrado vertical y horizontal en dispositivos pequeños */}
            <img src={profile} alt="my profile" className="rounded-full w-2/3 md:w-full" />
        </div>
        
        {/* Contenedor del texto (con cambio en orden para dispositivos grandes) */}
        <div className="flex flex-col justify-center h-full md:w-2/3 sm:order-2">
            <span className='text-2xl md:text-3xl text-center text-slate-500 mt-3'>
                Hi,
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center my-4">
                I'm Arianno Sanchez
            </h1>
            <p className="text-gray-500 text-2xl md:text-3xl text-center">
                Software Developer
            </p>
            <div className="flex justify-center my-8">
                {/* Centrado horizontal en dispositivos pequeños */}
                <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                </Link>
            </div>
        </div>
    </div>
</div>


    );
};
