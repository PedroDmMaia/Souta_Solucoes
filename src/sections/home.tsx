import image from '../../public/imagem-3a-dobra-2.webp'

export function Home() {
  return (
    <div className="mt-20 md:mt-20 md:px-10 xl:px-[21rem] px-7 md:grid grid-cols-2 md:mb-40 items-center">
      <img className="rounded-md" src={image} alt="" />
      <div className="xl:p-20 flex flex-col gap-5 items-start pt-5 md:pt-0">
        <h3 className="text-3xl md:text-4xl font-bold leading-none">
          Elimine suas <span className="text-indigo-500">dívidas</span> agora!
        </h3>
        <div>
          <p>
            São 16 anos levando para as pessoas o que há de mais descomplicado
            na área financeira.
          </p>
          <p>
            Estamos prontos para lhe receber e ouvir a sua situação para
            conseguirmos resolver da forma mais simples possível!
          </p>
        </div>
        <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md ease-in-out duration-200 text-white px-6 py-2">
          Fale conosco
        </button>
      </div>
    </div>
  )
}
