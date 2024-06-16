import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

import Logo from '../../public/Cópia de Cabeçalho.jpg'
import { Button } from './button'
export function NavBar() {
  const Links = [
    { name: 'Início', link: '/' },
    { name: 'Serviços', link: '/' },
    { name: 'Como funciona', link: '/' },
    { name: 'Dúvidas', link: '/' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7  xl:px-[21rem]">
        <img className="w-40" src={Logo} alt="" />
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <X size={32} /> : <List size={32} />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.name}
                className="text-gray-800 hover:text-gray-400 cursor-pointer duration-150"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Fale conosco</Button>
        </ul>
      </div>
    </div>
  )
}
