import React from 'react'
import html from '../assets/techs/html.png'
import css from '../assets/techs/css.png'
import javascript from '../assets/techs/javascript.png'
import typescript from '../assets/techs/typescript.png'
import reactImage from '../assets/techs/react.png'
import angular from '../assets/techs/angular.png'
import java from '../assets/techs/java.png'
import kotlin from '../assets/techs/kotlin.png'
import node from '../assets/techs/node.png'
import cshard from '../assets/techs/cshard.png'
import github from '../assets/techs/github.png'
import android from '../assets/techs/android.png'

export const Skill = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-400',
        },
        {
            id: 5,
            src: angular,
            title: 'Angular',
            style: 'shadow-red-600',
        },
        {
            id: 6,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 7,
            src: java,
            title: 'Java',
            style: 'shadow-yellow-200',
        },
        {
            id: 8,
            src: kotlin,
            title: 'Kotlin',
            style: 'shadow-purple-200',
        },
        {
            id: 9,
            src: node,
            title: 'NodeJs',
            style: 'shadow-green-200',
        },
        {
            id: 10,
            src: cshard,
            title: 'C#',
            style: 'shadow-purple-400',
        },
        {
            id: 11,
            src: android,
            title: 'Android',
            style: 'shadow-green-600',
        },
        {
            id: 12,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500',
        },
    ];


    return (
        <div
            name="skills"
            className="bg-gray-800 w-full text-white py-12"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">Estas son las tecnologías con las que he trabajado.</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4 font-semibold">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    )
}
