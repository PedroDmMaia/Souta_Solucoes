export function Hero() {
  return (
    <div className="relative py-32 px-7 bg-hero-image bg-cover">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="h-full flex justify-center flex-col items-center xl:items-start relative z-10 xl:max-w-[1180px] mx-auto">
        <div className="xl:pr-14 flex flex-col xl:gap-7 gap-5 text-shadow-lg">
          <h1 className="uppercase font-bold xl:text-4xl text-3xl text-center xl:text-start text-white">
            transformando sua vida
            <span className="text-cor-fundo block">financeira</span>
          </h1>

          <p className="xl:w-[25rem] xl:mb-8 mb-5 text-center xl:text-start text-white text-shadow-md">
            Aliamos nossa paixão pela liberdade financeira dos brasileiros com a
            clareza e a seriedade que um serviço essencial aos sonhos requer.
          </p>
        </div>
        <button className="bg-green-600 w-80 text-white hover:bg-green-500 rounded-md py-3 font-semibold ease-in-out duration-300 cursor-pointer">
          <a
            href="https://wa.me/5511970696009?text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20negociar%20minha%20d%C3%ADvida"
            target="_blank"
            rel="noreferrer"
          >
            Fale com um de nossos atendentes
          </a>
        </button>
      </div>
    </div>
  )
}
