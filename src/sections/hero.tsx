import HeroImg from '../../public/hero-pic-1024x1019.webp'

export function Hero() {
  return (
    <div className="md:grid grid-cols-2 pt-10 md:px-10 xl:px-[21rem] px-7">
      <div className="h-full flex justify-center flex-col items-center xl:items-start">
        <div className="xl:pr-14 flex flex-col xl:gap-7 gap-5">
          <h1 className="font-bold xl:text-5xl text-3xl text-center xl:text-start">
            Soluções <span className="text-indigo-500">financeiras</span> sem
            complicação
          </h1>
          <p className="xl:w-[25rem] xl:mb-8 mb-5 text-center xl:text-start">
            Aliamos nossa paixão pelo crédito aos brasileiros com a clareza e a
            seriedade que um serviço essencial aos sonhos requer.
          </p>
        </div>
        <button className="bg-indigo-500 w-80 text-white rounded-md py-3 font-semibold">
          Fale com um de nossos atendentes
        </button>
      </div>
      <img src={HeroImg} alt="" />
    </div>
  )
}
