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
    <div className="bg-gray-50 md:py-20 py-12 rounded-[4rem] md:px-10 xl:px-[21rem] px-7 mb-10 md:grid grid-cols-2 flex flex-col-reverse mt-8 md:mt-0">
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
        <span className="text-indigo-500">F.A.Q</span>
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-5xl">
            Pergunta
            <br /> frequentes
          </h4>
          <div className="flex flex-col md:items-end items-center gap-4 mb-9 md:mb-0">
            <span className="block opacity-20">Faltou alguma informção ?</span>
            <button className="border-2 border-indigo-500 hover:border-white rounded-md py-2 px-6 text-indigo-500 hover:text-white hover:bg-indigo-500 ease-in-out duration-300">
              Tirar uma dúvida
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
