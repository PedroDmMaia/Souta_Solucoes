import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-slate-700">
      <h1 className="text-4xl font-bold text-cor-fundo">
        Página não encontrada
      </h1>
      <Link to="/" className="text-white">
        Voltar para a Página principal
      </Link>
    </div>
  )
}
