import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

interface AccordionProps {
  question: string
  answer: string
}

export function Accordion({ answer, question }: AccordionProps) {
  const [faqIsOpen, setFaqIsOpen] = useState(false)

  return (
    <div className="py-2 border-b-[1px] border-gray-300">
      <button
        onClick={() => setFaqIsOpen(!faqIsOpen)}
        className="flex items-center justify-between w-full"
      >
        <span className={`font-semibold ${faqIsOpen ? 'text-indigo-500' : ''}`}>
          {question}
        </span>
        {faqIsOpen ? (
          <Minus className={faqIsOpen ? 'text-indigo-500' : ''} />
        ) : (
          <Plus className={faqIsOpen ? 'text-indigo-500' : ''} />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out text-black text-sm
        ${faqIsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden pt-2">{answer}</div>
      </div>
    </div>
  )
}
