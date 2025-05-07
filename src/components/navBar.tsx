/* eslint-disable import/no-absolute-path */
import { List, X } from '@phosphor-icons/react'
import { MouseEvent as ReactMouseEvent, useState } from 'react'

import { Button } from './button'

interface Link {
  name: string
  link: string
}
export function NavBar() {
  const Links: Link[] = [
    { name: 'Início', link: 'home' },
    { name: 'Serviços', link: 'services' },
    { name: 'Como funciona', link: 'howWorking' },
    { name: 'Dúvidas', link: 'faq' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    event.preventDefault()
    const section = document.getElementById(link)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="bg-cor-fundo py-4 lg:px-0 px-7">
        <div className="lg:flex items-center justify-between bg-cor-fundo lg:max-w-[1180px] mx-auto">
          <img className="w-40" src='/Logo.png' alt="" />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-7 cursor-pointer lg:hidden"
          >
            {isOpen ? <X size={32} /> : <List size={32} />}
          </div>
          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-cor-fundo lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-16 opacity-100' : 'top-[-490px]'} lg:opacity-100`}
          >
            {Links.map((link, index) => (
              <li key={index} className="lg:ml-8 text-xl lg:my-0 my-7">
                <a
                  href={`#${link.link}`}
                  className="text-corTexto hover:text-white cursor-pointer duration-150"
                  onClick={(event) => handleClick(event, link.link)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button link="form">Fale conosco</Button>
          </ul>
        </div>
      </div>
    </div>
  )
}
