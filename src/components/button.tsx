import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  link: string
}
export function Button({ children, link }: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const section = document.getElementById(link)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      type="button"
      className="md:ml-8 py-2 px-3 w-36 bg-transparent border-2 border-corTexto text-corTexto hover:bg-corTexto hover:border-transparent hover:text-white rounded-md font-semibold ease-in-out duration-300"
    >
      <a href={`#${link}`} onClick={handleClick}>
        {children}
      </a>
    </button>
  )
}
