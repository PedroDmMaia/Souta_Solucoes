import { Bank, Car, HouseLine, Money } from '@phosphor-icons/react'

export function Services() {
  return (
    <div
      id="services"
      className="grid grid-cols-1 lg:flex flex-col gap-10 justify-between md:px-10 lg:px-0 px-7 pt-24 md:pt-40"
    >
      <div className="xl:max-w-[1180px] mx-auto">
        <span className="text-sm uppercase text-zinc-400">Nossos serviços</span>
        <h3 className="text-2xl uppercase text-white mb-2 font-bold">
          O que fazemos
        </h3>
        <div className="w-40 bg-cor-fundo h-1 rounded-xl"></div>
        <p className="text-zinc-400 mt-5">
          Na Souta Soluções, oferecemos um ecossistema completo de serviços para
          ajudar você a recuperar seu crédito, limpar seu nome, resolver
          pendências financeiras e voltar a ter tranquilidade. Veja como podemos
          ajudar:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-6 max-w-[1180px]">
        <div className="flex flex-col items-center bg-cor-fundo rounded-md text-center p-4 lg:h-48">
          <Bank size={32} />
          <span className="font-semibold">Recuperação de Crédito</span>
          <p className="text-xs">
            Serviços especializados em negociação de dívidas e empréstimos,
            visando limpar seu nome. Com uma análise detalhada dos seus
            contratos de dívida para identificar e combater juros abusivos,
            buscando uma condição que caiba no seu bolso.
          </p>
        </div>

        <div className="flex flex-col items-center bg-cor-fundo rounded-md text-center p-4 lg:h-48">
          <Money size={32} />
          <span className="font-semibold">Busca e Apreensão de Veículos</span>
          <p className="text-xs">
            Ajudamos a renegociar as parcelas do seu veículo atrasadas, para
            evitar a busca e apreensão dos veículos. Buscamos as melhores
            condições de pagamento para que você possa manter seu veículo.
          </p>
        </div>

        <div className="flex flex-col items-center bg-cor-fundo rounded-md text-center p-4 lg:h-48">
          <HouseLine size={32} />
          <span className="font-semibold">Imóveis em atraso</span>
          <p className="text-xs">
            Negociamos as melhores condições de pagamento para evitar o leilão
            do seu bem, trabalhamos para evitar que você perca sua propriedade.
          </p>
        </div>

        <div className="flex flex-col items-center bg-cor-fundo rounded-md text-center p-4 lg:h-48">
          <Car size={32} />
          <span className="font-semibold">Aumento do Score</span>
          <p className="text-xs">
            Oferecemos estratégias eficazes para aumentar seu score de crédito,
            ajudando você a conquistar seus sonhos e a encontrar as melhores
            oportunidades financeiras.
          </p>
        </div>

        <div className="flex flex-col items-center bg-cor-fundo rounded-md text-center p-4 lg:h-48">
          <Car size={32} />
          <span className="font-semibold">Cheques Devolvidos</span>
          <p className="text-xs">
            Facilitamos a localização dos cheques perdidos ou extraviados e
            orientamos no processo de pagamento, evitando complicações futuras e
            permitindo que você regularize sua situação com facilidade.
          </p>
        </div>

        <div className="flex flex-col items-center bg-cor-fundo rounded-md text-center p-4 lg:h-48">
          <Car size={32} />
          <span className="font-semibold">Consultoria Financeira</span>
          <p className="text-xs">
            Nosso objetivo é ir além da recuperação de crédito. Oferecemos a
            você o suporte necessário para conquistar a liberdade financeira.
            Nossa consultoria é personalizada e feita de acordo com seus
            objetivos.
          </p>
        </div>
      </div>
    </div>
  )
}
