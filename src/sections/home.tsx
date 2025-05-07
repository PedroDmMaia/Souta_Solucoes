interface HomeProps {
  link: string
}

export function Home({ link }: HomeProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const section = document.getElementById(link)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="home"
      className="pt-24 md:pt-40 md:px-10 lg:px-0 px-7 grid lg:grid-cols-2 items-center gap-4 lg:gap-10 xl:max-w-[1180px] mx-auto"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="700"
    >
      <img className="rounded-md" src='/unnamed.png' alt="" />
      <div className="xl:py-20 flex flex-col gap-5 items-start pt-5 md:pt-0 pr-0 lg:pr-24">
        <h3 className="text-3xl md:text-4xl font-bold leading-none text-white">
          Elimine suas <span>dívidas</span> agora!
        </h3>
        <div className="text-zinc-400 flex flex-col gap-2">
          <p>
            Somos a Souta Soluções, uma empresa dedicada a transformar a vida
            financeira dos nossos clientes.
          </p>
          <p>
            Há mais de 4 anos, ajudamos pessoas a renegociar suas dívidas e
            recuperar o crédito, proporcionando um futuro financeiro mais seguro
            e promissor.
          </p>
        </div>
        <button
          type="button"
          className="bg-transparent border-2 border-corTexto w-64 text-white hover:bg-cor-fundo hover:border-transparent hover:text-corTexto rounded-md py-3 font-semibold ease-in-out duration-300"
        >
          <a href={`#${link}`} onClick={handleClick}>
            Fale conosco
          </a>
        </button>
      </div>
    </div>
  )
}
