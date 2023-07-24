import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-center flex-col items-center">
                    <p className="text-sm"><span className="mb-2"> {"<"}Arianno Sanchez{"/>"}</span></p>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
