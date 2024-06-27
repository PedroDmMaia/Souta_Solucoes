import { Download, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="bg-cor-fundo md:px-10 px-7">
      <div className="flex flex-col text-center gap-4 md:gap-0 md:flex-row md:text-start justify-between py-4 text-corTexto lg:max-w-[1118px] mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold uppercase">
            Fale com a gente
          </span>

          <div className="flex flex-col gap-[0.20rem]">
            <a>+55 11 2362-6732</a>
            <p>soutasolucoes@gmail.com</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="md:w-72">
              R. Dezenove de Maio, 33, Sala Comercial 3. São Paulo - SP.
            </p>
            <p>CEP 03648-080</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold uppercase">Acompanhe</span>

          <div className="flex gap-3 justify-center md:justify-normal">
            <a href="" target="_blank">
              <InstagramLogo size={32} />
            </a>
            <a href="" target="_blank">
              <LinkedinLogo size={32} />
            </a>
          </div>

          <span className="uppercase font-semibold flex flex-col items-center md:block">
            Apresentação institucional
            <a href="" target="_blank">
              <Download size={32} weight="fill" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

// <p className="text-corTexto">
//   &copy; 2024 Souta Soluções - Todos os direitos reservados.
// </p>
