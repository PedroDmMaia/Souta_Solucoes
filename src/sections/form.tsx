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
    <div id="form" className="max-w-md mx-auto p-4 pt-0 relative py-20">
      <h3 className="text-center py-5 text-4xl uppercase font-bold">
        Entre em contato <span className="text-zinc-400">conosco</span>
      </h3>

      <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-400"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="mt-1 block w-full px-3 py-2 border border-cor-fundo text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm bg-transparent"
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
            className="block text-sm font-medium text-zinc-400"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register('email')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm bg-transparent"
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
            className="block text-sm font-medium text-zinc-400"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm resize-none bg-transparent"
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
            className="bg-transparent border-2 border-corTexto w-full text-white hover:bg-cor-fundo hover:border-transparent hover:text-corTexto rounded-md py-3 font-semibold ease-in-out duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
