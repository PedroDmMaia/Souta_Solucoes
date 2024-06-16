import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}
export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-200">
      {children}
    </button>
  )
}
