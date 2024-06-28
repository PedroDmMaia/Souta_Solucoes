import { ChartBar, Speedometer, TrendUp } from '@phosphor-icons/react'

export function Topics() {
  return (
    <div className="bg-cor-fundo shadow-lg shadow-slate-900 xl:pl-8 xl:mb-10 z-20 relative mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 md:gap-28 py-12 md:py-20 max-w-[1180px] mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-corTexto flex items-center justify-center text-white p-2">
            <Speedometer size={32} />
          </div>
          <h3 className="font-semibold text-cyan-800 md:text-xl">CONFIANÇA</h3>
          <p className="text-md md:w-full w-[20rem]">
            Sobre ela estruturamos todas as nossas atitudes, buscando
            fortalecê-la a cada dia através de um trabalho íntegro e de
            qualidade.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-corTexto flex items-center justify-center text-white p-2">
            <ChartBar size={32} />
          </div>
          <h3 className="font-semibold text-cyan-800 md:text-xl ">
            CREDIBILIDADE
          </h3>
          <p className="text-md md:w-full w-[20rem]">
            Uma qualidade que se conquista com um trabalho de excelência
            oferecido de maneira uniforme a todos os nossos clientes.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-corTexto flex items-center justify-center text-white p-2">
            <TrendUp size={32} />
          </div>
          <h3 className="font-semibold text-cyan-800 md:text-xl ">ÉTICA</h3>
          <p className="text-md md:w-full w-[20rem]">
            Um pilar fundamental baseado em nossos valores que norteia as ações
            de nossa equipe, definindo critérios para a manipulação de
            informações de nossos clientes.
          </p>
        </div>
      </div>
    </div>
  )
}
