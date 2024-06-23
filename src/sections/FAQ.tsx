import { Accordion } from '../components/accordion'

export function Faq() {
  const FaqData = [
    {
      question: 'A negociação com a Souta Soluções é segura?',
      answer:
        'Sim, a segurança é uma prioridade para a Souta Soluções. Nossas negociações são transparentes, sem letras miúdas ou surpresas. Você terá acesso completo a todas as informações e poderá acompanhar o status da sua negociação a qualquer momento. Para maior tranquilidade, oferecemos a opção de realizar chamadas de vídeo para que você possa conhecer nossa equipe e nossa empresa de perto, como se estivesse em um atendimento presencial.',
    },
    {
      question:
        'Quais são os custos para utilizar os serviços da Souta Soluções?',
      answer:
        'Nosso serviço envolve uma taxa que cobre a análise detalhada das suas dívidas, a remoção de juros abusivos e a criação de um plano de pagamento personalizado. Esta taxa é cobrada no momento da contratação do serviço. Diferente de outros, não cobramos comissões sobre o valor acordado nas suas negociações. Nossa missão é ajudar você a obter o melhor acordo possível de forma justa e transparente.',
    },
    {
      question:
        'Quanto tempo leva para limpar meu nome e quitar minhas dívidas?',
      answer:
        'O processo completo de análise, retirada de juros abusivos e planejamento financeiro pela Souta Soluções é concluído em até 7 dias úteis. Após firmarmos o acordo, se você tiver o valor disponível e realizar o pagamento da primeira parcela, seu nome será limpo em até 48 horas (2 dias úteis). Nosso objetivo é ajudar você a resolver sua situação financeira de maneira rápida e eficiente, com descontos de até 90% dos juros abusivos.',
    },
    {
      question:
        'Já tentei negociar minhas dívidas antes e não tive sucesso. Como a Souta Soluções pode ajudar?',
      answer:
        'Nós entendemos que negociar dívidas pode ser um processo complicado e frustrante. Na Souta Soluções, nossa equipe experiente negocia diretamente com seus credores para buscar as melhores condições possíveis. Com nossa abordagem personalizada e parcerias com diversas instituições financeiras, aumentamos significativamente as chances de uma renegociação bem-sucedida. Deixe-nos lidar com as negociações para que você possa focar em reconstruir sua vida financeira sem burocracia ou qualquer dor de cabeça.',
    },
    {
      question:
        'Como a negociação com a Souta Soluções impacta meu score de crédito?',
      answer:
        'Negociar suas dívidas negativadas e quitar seus débitos com a Souta Soluções ajuda a remover as restrições do seu CPF ou CNPJ, o que melhora diretamente seu score de crédito. Além disso, com nosso suporte contínuo, oferecemos orientação para que você continue aumentando sua pontuação. Ter o nome limpo e uma pontuação de crédito elevada abre novas oportunidades de crédito no futuro.',
    },
  ]

  return (
    <>
      <div id="faq" className="pt-16 md:pt-28"></div>
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
              <span className="block opacity-20">
                Faltou alguma informção ?
              </span>
              <button className="bg-transparent border-2 border-corTexto w-64 text-corTexto hover:bg-corTexto hover:border-transparent hover:text-white rounded-md py-3 font-semibold ease-in-out duration-300">
                <a href="">Tirar uma dúvida</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
