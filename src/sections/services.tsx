import { Bank, Car, HouseLine, Money } from '@phosphor-icons/react'

export function Services() {
  return (
    <div
      id="services"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between md:px-0 px-7 pt-24 md:pt-28 lg:max-w-[1118px] mx-auto"
    >
      <div>
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
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center bg-cor-fundo rounded-md text-center p-4 h-36">
          <Bank size={32} />
          <span className="font-semibold">Negociação de Dividas Bancarias</span>
          <p className="text-xs">*Emprestimos ,cartões de crédito e outros</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-cor-fundo rounded-md text-center p-4 h-36">
          <Money size={32} />
          <span className="font-semibold">Cheques devolvidos</span>
          <p className="text-xs">
            *Caso o cheque foi perdido ou extraviado, facilitamos na localização
            para pagamento
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-cor-fundo rounded-md text-center p-4 h-36">
          <HouseLine size={32} />
          <span className="font-semibold">Imóveis em atraso</span>
          <p className="text-xs">
            *Parcelas em atraso, buscando as melhores condições para não ocorrer
            o leilão
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-cor-fundo rounded-md text-center p-4 h-36">
          <Car size={32} />
          <span className="font-semibold">Busca e apreensão de veículos</span>
          <p className="text-xs">
            *Parcelas em atraso, buscando as melhores condições para evitar a
            busca e apreensão do veiculo
          </p>
        </div>
      </div>
    </div>
  )
}
