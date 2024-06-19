import image from '../../public/imagem-3a-dobra-2.webp'

export function Home() {
  return (
    <div
      id="home"
      className="pt-24 md:pt-20 md:px-10 xl:px-[21rem] px-7 grid lg:grid-cols-2 items-center gap-4 lg:gap-10"
    >
      <img className="rounded-md" src={image} alt="" />
      <div className="xl:py-20 flex flex-col gap-5 items-start pt-5 md:pt-0 pr-0 lg:pr-24">
        <h3 className="text-3xl md:text-4xl font-bold leading-none text-white">
          Elimine suas <span className="">dívidas</span> agora!
        </h3>
        <div className="text-zinc-400 flex flex-col gap-2">
          <p>
            Atuando a mais de 4 anos, buscando as melhores possibilidades para
            nosso clientes
          </p>
          <p>
            Visando tanto as melhores condições de pagamento e prazo Quanto ao
            atendimento e facilidade em solucionar sua divida e limpar o seu
            nome.
          </p>
        </div>
        <button className="bg-transparent border-2 border-corTexto w-64 text-white hover:bg-cor-fundo hover:border-transparent hover:text-corTexto rounded-md py-3 font-semibold ease-in-out duration-300">
          <a href="">Fale conosco</a>
        </button>
      </div>
    </div>
  )
}
