import { Download, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="bg-cor-fundo md:px-10 xl:px-[21rem] px-7">
      <div className="flex flex-col text-center gap-4 md:gap-0 md:flex-row md:text-start justify-between  py-4 text-corTexto">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold uppercase">
            Fale com a gente
          </span>

          <div className="flex flex-col gap-[0.20rem]">
            <a>+55 11 3815-3533</a>
            <p>atendimento@igcp.com.br</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="md:w-72">
              Brasil: Av. Brigadeiro Faria Lime, 2277, 6º andar. São Paulo - SP.
            </p>
            <p>CEP 01452-000</p>
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
