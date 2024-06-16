import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}
export function Button({ children }: ButtonProps) {
  return (
    <button className="md:ml-8 py-2 px-3 w-36 bg-transparent border-2 border-corTexto text-corTexto hover:bg-corTexto hover:border-transparent hover:text-white rounded-md font-semibold ease-in-out duration-300">
      <a href="">{children}</a>
    </button>
  )
}
