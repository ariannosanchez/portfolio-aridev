import React from 'react'

function About() {
    return (
        <div name="about" className="w-full py-12 bg-gray-900 text-white">
            <div className="max-w-screen-lg p-4 mx-auto">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-2xl mt-10 font-bold">
                    Arianno Sanchez, Software Developer
                </p>

                <div class="mt-4">
                    <p class="text-sm leading-relaxed text-justify sm:text-lg my-4">
                        ¡Saludos! Soy Arianno Sanchez, un apasionado desarrollador de software con enfoque en crear soluciones innovadoras y eficientes. Siempre estoy constantemente practicando para ampliar mis conocimientos y mantenerme actualizado con las últimas tendencias en desarrollo de software.
                    </p>
                    <p class="text-sm leading-relaxed text-justify sm:text-lg my-4">
                        A lo largo de mi trayectoria, he trabajado en diversos proyectos y colaborado en equipos multidisciplinarios, lo que me ha brindado una visión integral del desarrollo de software. Mi pasión por la tecnología y mi habilidad para enfrentar desafíos me impulsan a seguir mejorando.
                    </p>
                    <p class="text-sm leading-relaxed text-justify sm:text-lg my-4">
                        Si estás interesado en conocer más sobre mi trabajo, te invito a explorar mi portfolio. ¡Espero que encuentres inspiración en mis proyectos y habilidades!
                    </p>
                </div>

            </div>
        </div>

    )
}

export default About