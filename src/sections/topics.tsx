import { ChartBar, Speedometer, TrendUp } from '@phosphor-icons/react'

export function Topics() {
  return (
    <div className="bg-cor-fundo xl:ml-48 lg:ml-14 shadow-lg rounded-l-xl shadow-slate-900 xl:pl-8 xl:pr-52 xl:mb-20 z-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 md:gap-28 py-12 md:py-20 md:mx-[7rem] -mt-10">
        <div className="flex flex-col lg:items-start items-center gap-4 md:text-start text-center">
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

        <div className="flex flex-col lg:items-start items-center gap-4 md:text-start text-center">
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

        <div className="flex flex-col lg:items-start items-center gap-4 lg:text-start text-center">
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
