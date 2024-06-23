export function Hero() {
  return (
    <div className="relative md:grid grid-cols-2 py-32 md:px-10 xl:px-[21rem] px-7 bg-hero-image bg-cover">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="h-full flex justify-center flex-col items-center xl:items-start relative z-10">
        <div className="xl:pr-14 flex flex-col xl:gap-7 gap-5">
          <h1 className="uppercase font-bold xl:text-4xl text-3xl text-center xl:text-start text-white">
            transformando sua vida
            <span className="text-corTexto block">financeira</span>
          </h1>

          <p className="xl:w-[25rem] xl:mb-8 mb-5 text-center xl:text-start text-white">
            Aliamos nossa paixão pela liberdade financeira dos brasileiros com a
            clareza e a seriedade que um serviço essencial aos sonhos requer.*
          </p>
        </div>
        <button className="bg-transparent border-2 border-corTexto w-80 text-white hover:bg-cor-fundo hover:border-transparent hover:text-corTexto rounded-md py-3 font-semibold ease-in-out duration-300">
          <a href="">Fale com um de nossos atendentes</a>
        </button>
      </div>
    </div>
  )
}
