import {
  CurrencyDollar,
  Handshake,
  PhoneOutgoing,
  Smiley,
  UsersThree,
} from '@phosphor-icons/react'

export function HowWork() {
  return (
    <>
      <div id="howWorking" className="pt-4"></div>
      <div className="bg-paralax bg-cover bg-fixed relative bg-center mt-20">
        <div className="absolute inset-0 bg-slate-700 opacity-80 z-0"></div>

        <div
          className="text-white md:px-10 lg:px-0 px-10 relative z-10 mb-20 py-10 xl:max-w-[1200px] mx-auto"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <h2 className="text-3xl uppercase">Como Funciona</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mt-20">
            <div className="flex flex-col items-center text-center gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
              <div>
                <Handshake size={32} />
              </div>
              <span className="font-bold uppercase text-xl">
                Equipe <span className="block">especializada</span>
              </span>
              <p className="">
                Quando você contrata a Souta Soluções, nossa equipe de
                especialistas em crédito faz um levantamento completo e
                detalhado de todas as dívidas associadas ao seu CPF.
              </p>
            </div>

            <div className="flex flex-col items-center text-center  gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
              <div>
                <PhoneOutgoing size={32} />
              </div>
              <span className="font-bold uppercase text-xl">
                Suporte <span className="block">completo</span>
              </span>
              <p>
                Com um dossiê completo de suas dívidas em mãos, nossos
                especialistas entrarão em contato para discutir as melhores
                opções de negociação. O objetivo é encontrar soluções de
                pagamento que sejam acessíveis e adequadas à sua vida
                financeira.
              </p>
            </div>

            <div className="flex flex-col items-center text-center  gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
              <div>
                <CurrencyDollar size={32} />
              </div>
              <span className="font-bold uppercase text-xl">
                Opções de <span className="block">Pagamento</span>
              </span>
              <p>
                Após analisar suas opções, apresentamos um plano de pagamento
                personalizado que pode ser parcelado em até 36 vezes. Nosso foco
                é garantir que as condições sejam justas e compatíveis com seu
                bolso.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
              <div>
                <Smiley size={32} />
              </div>
              <span className="font-bold uppercase text-xl">
                Limpeza do <span className="block">Nome</span>
              </span>
              <p>
                Feito o pagamento da primeira parcela, iniciamos o processo para
                remover as restrições do seu nome nos órgãos de proteção ao
                crédito (SPC/SERASA). Em até 48 horas, seu nome estará limpo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 bg-cor-fundo text-corTexto rounded-md p-8 h-80 md:h-auto">
              <div>
                <UsersThree size={32} />
              </div>
              <span className="font-bold uppercase text-xl">
                Auxilio da <span className="block">Equipe</span>
              </span>
              <p>
                Após a limpeza do seu nome, nossos especialistas continuam a
                oferecer suporte. Vamos orientá-lo sobre como aumentar seu score
                de crédito, permitindo que você reconstrua sua vida financeira e
                tenha acesso a novas oportunidades de crédito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
