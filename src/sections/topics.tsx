import { ChartBar, Speedometer, TrendUp } from '@phosphor-icons/react'

export function Topics() {
  return (
    <div className="bg-slate-100 md:ml-48 shadow-lg rounded-l-lg shadow-slate-200 md:pl-8 md:pr-52 md:mb-44">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-28 py-12 md:py-20 md:mx-[7rem]">
        <div className="flex flex-col md:items-start items-center gap-4 md:text-start text-center">
          <div className="rounded-full bg-white flex items-center justify-center text-indigo-500 p-2">
            <Speedometer size={32} />
          </div>
          <h3 className="font-semibold text-indigo-500 md:text-xl">
            Seu nome limpo
            <br /> em até 48h
          </h3>
          <p className="text-md md:w-full w-[20rem]">
            Após o pagamento da 1ª parcela do acordo, você pode ter a sua vida
            descomplicada pelo menor tempo possível.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center gap-4 md:text-start text-center">
          <div className="rounded-full bg-white flex items-center justify-center text-indigo-500 p-2">
            <ChartBar size={32} />
          </div>
          <h3 className="font-semibold text-indigo-500 md:text-xl ">
            Análise de revisão
            <br /> contratual
          </h3>
          <p className="text-md md:w-full w-[20rem]">
            Contratos de dívidas devem ser analisados com cautela. Evitando
            juros abusivos.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center gap-4 md:text-start text-center">
          <div className="rounded-full bg-white flex items-center justify-center text-indigo-500 p-2">
            <TrendUp size={32} />
          </div>
          <h3 className="font-semibold text-indigo-500 md:text-xl ">
            Aumento da sua
            <br /> linha de crédito
          </h3>
          <p className="text-md md:w-full w-[20rem]">
            Precisa de mais dinheiro para alavancar a vida? Conte conosco.
          </p>
        </div>
      </div>
    </div>
  )
}
