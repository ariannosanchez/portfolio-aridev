import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function SocialLinks() {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/arianno-abbeth-sanchez-mitma/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/ariannosanchez',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:ariannosanchezm@outlook.com',
    },
    {
      id: 4,
      child: (
        <>
          Whatsapp <FaWhatsapp size={30} />
        </>
      ),
      href: 'https://wa.me/960660437?text=Hola..Arianno.',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="hidden xl:flex flex-col top-[38%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
