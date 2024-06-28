import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const SendMessage = z.object({
  name: z.string().min(1, 'Informe seu nome'),
  phone: z
    .string()
    .min(10, 'Informe um numero de telefone válido')
    .max(15, 'Informe um número de telefone válido'),
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
      const res = await axios.post(
        'https://api.staticforms.xyz/submit',
        { ...data, accessKey: 'ac9bae19-1038-4159-99a1-16c9132c11e0' },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )

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
    <div
      id="form"
      className="max-w-md mx-auto p-4 relative pb-20 pt-24 md:pt-20"
    >
      <h3 className="text-center py-5 text-4xl uppercase font-bold">
        Entre em contato <span className="text-zinc-400">conosco</span>
      </h3>

      <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-400"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Seu nome completo"
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
            htmlFor="phone"
            className="block text-sm font-medium text-zinc-400"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Ex: 11 99999 9999"
            {...register('phone')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm bg-transparent"
          />
          {formErrors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {formErrors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-400"
          >
            Menssagem
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
