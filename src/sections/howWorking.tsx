import {
  CurrencyDollar,
  Handshake,
  PhoneOutgoing,
  Smiley,
  UsersThree,
} from '@phosphor-icons/react'

export function HowWork() {
  return (
    <div className="bg-paralax bg-cover bg-fixed relative bg-center mt-20">
      <div className="absolute inset-0 bg-slate-700 opacity-80 z-0"></div>

      <div className="text-white md:px-10 px-10 xl:px-[21rem] relative z-10 mb-20 py-10">
        <h2 className="text-3xl uppercase">Como Funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mt-20">
          <div className="flex flex-col items-center justify-center text-center gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
            <div>
              <Handshake size={32} />
            </div>
            <span className="font-bold uppercase text-xl">
              Equipe especializada
            </span>
            <p>
              Feita a contratação de nossos serviços, iremos efetuar um
              levantamento completo e detalhado sobre todas as dividas em seu
              CPF
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center  gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
            <div>
              <PhoneOutgoing size={32} />
            </div>
            <span className="font-bold uppercase text-xl">
              Contato com nossa equipe
            </span>
            <p>
              Com o Dossiê de suas dividas em mãos Nossos especialistas entram
              em contato analisando as melhores possibilidades de negociações
              que caibam em seu bolso.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center  gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
            <div>
              <CurrencyDollar size={32} />
            </div>
            <span className="font-bold uppercase text-xl">
              Possibilade de pagamento
            </span>
            <p>
              Com as condições alinhadas, te apresentaremos a melhor
              possibilidade de pagamento, buscando o parcelamento de 2 até 36x
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
            <div>
              <Smiley size={32} />
            </div>
            <span className="font-bold uppercase text-xl">Limpeza no nome</span>
            <p>
              Pagando a primeira parcela da sua Divida, seu nome sairá de
              restrição dos órgãos de Proteção de Crédito (SPC/SERARA) em até 48
              horas
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
            <div>
              <UsersThree size={32} />
            </div>
            <span className="font-bold uppercase text-xl">
              Auxilio da equipe
            </span>
            <p>
              Após seu nome limpo, nossos peritos irão te auxiliar sobre o
              aumento de seu SCORE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
