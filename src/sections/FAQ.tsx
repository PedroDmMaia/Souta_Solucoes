import { Accordion } from '../components/accordion'

export function Faq() {
  const FaqData = [
    { question: 'pergunta', answer: 'resposta' },
    { question: 'pergunta', answer: 'resposta' },
    { question: 'pergunta', answer: 'resposta' },
    { question: 'pergunta', answer: 'resposta' },
    { question: 'pergunta', answer: 'resposta' },
  ]

  return (
    <div className="bg-cor-fundo md:py-20 py-12 rounded-2xl md:px-10 xl:px-[21rem] px-7 mb-10 md:grid grid-cols-2 flex flex-col-reverse mt-8 md:mt-0 mx-2 lg:mx-10">
      <div className="">
        {FaqData.map((question, i) => (
          <Accordion
            key={i}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
      <div className="md:text-end text-center">
        <span className="text-corTexto">F.A.Q</span>
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-5xl">
            Pergunta
            <br /> frequentes
          </h4>
          <div className="flex flex-col md:items-end items-center gap-4 mb-9 md:mb-0">
            <span className="block opacity-20">Faltou alguma informção ?</span>
            <button className="bg-transparent border-2 border-corTexto w-64 text-corTexto hover:bg-corTexto hover:border-transparent hover:text-white rounded-md py-3 font-semibold ease-in-out duration-300">
              <a href="">Tirar uma dúvida</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
