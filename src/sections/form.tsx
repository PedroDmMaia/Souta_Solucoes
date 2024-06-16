import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const SendMessage = z.object({
  name: z.string().min(1, 'Informe seu nome'),
  email: z.string().email('Informe um endereço de email existente'),
  message: z.string().min(1, 'escreva uma mensagem'),
})

type messageInfo = z.infer<typeof SendMessage>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    reset,
  } = useForm<messageInfo>({
    resolver: zodResolver(SendMessage),
  })

  const handleSubmitForm = async (data: messageInfo) => {
    try {
      // Fazendo a requisição POST para a API
      const res = await axios.post(
        'https://api.staticforms.xyz/submit',
        { ...data, accessKey: '8b11e775-a9f3-4ff9-99fd-7b19acf6b837' }, // Inclui a chave de acesso
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )

      // Atualiza o estado com base na resposta da API
      if (res.data.success) {
        toast.success('Email enviado com sucesso')
      } else {
        toast.error('Falja no envio de email')
      }

      reset()
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 pt-0 relative">
      <h3 className="text-center py-5 text-4xl uppercase font-bold">
        Entre em contato <span className="text-indigo-500">conosco</span>
      </h3>

      <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formErrors.name && (
            <p className="mt-1 text-xs text-red-500">
              {formErrors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formErrors.email && (
            <p className="mt-1 text-xs text-red-500">
              {formErrors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
          />
          {formErrors.message && (
            <p className="mt-1 text-xs text-red-500">
              {formErrors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
