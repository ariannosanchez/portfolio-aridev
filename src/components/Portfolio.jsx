import React from 'react'
import ionicrickmorty from '../assets/portfolio/ionic7rickmorty.png'
import jcuba from '../assets/portfolio/potfoliojcuba.jpeg'
import twdapp from '../assets/portfolio/twd-app.png'
import apikalita from '../assets/portfolio/apikalita.png'
import ec from '../assets/portfolio/ec4-moviles.png'
import technews from '../assets/portfolio/technews.png'
import { FaGithub, FaSafari } from 'react-icons/fa'

export const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      title: 'Ionic-Rick and Morty',
      description: 'Frontend: Ionic 7, SaSS consuming Rick and Morty API.',
      src: ionicrickmorty,
      githublink: 'https://github.com/ariannosanchez/ionic7-angular-rickmorty'
    },
    {
      id: 2,
      title: 'API-Kalita',
      description: 'Backend: NodeJS, Express, TypeScript and MongoDB.',
      src: apikalita,
      weblink: '',
      githublink: 'https://github.com/ariannosanchez/api-backend-kalita',
    },
    {
      id: 3,
      title: 'EC-APP',
      description: 'Mobile Application: Android Studio, MVVM, Retrofit, Kotlin and Firebase.',
      src: ec,
      weblink: '',
      githublink: 'https://github.com/ariannosanchez/EC4_MOVILES',
    },
    {
      id: 4,
      title: 'The Walking Dead App',
      description: 'Mobile Application: Android Studio, MVVM, Retrofit and Kotlin.',
      src: twdapp,
      weblink: '',
      githublink: 'https://github.com/ariannosanchez/TheWalkingDeadApp',
    },
    {
      id: 5,
      title: 'System of sales JCUBA',
      description: 'Web Application: Spring - Java, MySQL, Thymeleaf, MVC.',
      src: jcuba,
      weblink: '',
      githublink: 'https://github.com/ariannosanchez/spring-boot-jcuba-ventas',
    },
    {
      id: 6,
      title: 'Tech News',
      description: 'Frontend: Web page using HTML, CSS and JavaScript.',
      src: technews,
      weblink: 'https://illustrious-longma-01be3f.netlify.app/',
      githublink: 'https://github.com/ariannosanchez/technews.github.io',
    },
  ];

  return (
    <div name="portfolio" className="bg-gray-900 w-full text-white py-12">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Echa un vistazo a algunos de mis trabajos.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, weblink, githublink }) => (
            <div key={id} className="bg-github shadow-md shadow-gray-950 rounded-lg duration-200 hover:scale-105">
              <img src={src} alt="" className="rounded-md" />
              <div className="p-4">
                <p className="text-xl font-bold mb-2">{title}</p>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
              <div className="flex items-center justify-center">
                {weblink ? (
                  <a href={weblink} target='_blank' rel='noreferrer' className="px-6 py-3 m-4 duration-200 hover:scale-125 cursor-pointer">
                    <FaSafari size={30} />
                  </a>
                ) : null}
                <a href={githublink} target='_blank' rel='noreferrer' className="px-6 py-3 m-4 duration-200 hover:scale-125 cursor-pointer">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 font-extralight text-sm">
          <p>Para visualizar una selección de mis proyectos, visite mi perfil en GitHub.</p>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;
