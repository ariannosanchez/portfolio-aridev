import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import contact from '../assets/send.png'

export const Contact = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={45} />
                </>
            ),
            title: 'Linkedin',
            href: 'https://www.linkedin.com/in/arianno-abbeth-sanchez-mitma/',
            background: 'bg-linkendin'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={45} />
                </>
            ),
            title: 'Github',
            href: 'https://github.com/ariannosanchez',
            background: 'bg-github'
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={45} />
                </>
            ),
            title: 'Correo',
            href: 'mailto:ariannosanchezm@outlook.com',
            background: 'bg-gray-950'
        },
        {
            id: 4,
            child: (
                <>
                    <FaWhatsapp size={45} />
                </>
            ),
            title: 'Whatsapp',
            href: 'https://wa.me/960660437?text=Hola..Arianno.',
            background: 'bg-whatsapp'
        },
    ];

    return (
        <div id='contact'
            name="contact"
            className="w-full bg-gray-800 text-white py-12"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Si deseas comunicarte conmigo, puedes hacerlo a través de los siguientes medios:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-stretch">
                    <div className="py-4 px-6 bg-slate-700 text-white text-center font-extralight text-sm rounded">
                        <p>Hoy es un gran día para contactarme</p>
                        <img
                            src={contact}
                            alt="Imagen"
                            className="mx-auto w-2/3 md:w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-1">
                        {links.map(({ id, child, href, title, background }) => (
                            <a
                                key={id}
                                href={href}
                                className={`py-10 px-6 text-white text-center font-semibold rounded hover:bg-gray-900 hover:scale-105 duration-500 flex flex-col justify-center items-center ${background}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex justify-center items-center">
                                    {child}
                                </div>
                                <p className="text-white mt-2">{title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
