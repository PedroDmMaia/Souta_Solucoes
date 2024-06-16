import imageFooter from '../../public/Cópia de Cabeçalho.jpg'

export function Footer() {
  return (
    <footer className="bg-cor-fundo md:px-10 xl:px-[21rem] px-7">
      <div className="flex flex-col text-center gap-4 md:gap-0 md:flex-row md:text-start justify-between items-center py-4">
        <img src={imageFooter} className="w-60" alt="" />
        <p className="text-corTexto">
          &copy; 2024 Souta Soluções - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
