import imageFooter from '../../public/Cópia de Cabeçalho.jpg'

export function Footer() {
  return (
    <footer className="bg-indigo-500 md:px-10 xl:px-[21rem] px-7">
      <div className="flex justify-between items-center py-4">
        <img src={imageFooter} className="w-60" alt="" />
        <p className="text-white">
          &copy; 2024 Souta Soluções - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
