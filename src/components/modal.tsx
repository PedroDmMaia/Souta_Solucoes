import { zodResolver } from '@hookform/resolvers/zod'
import { X } from '@phosphor-icons/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import modalImage from '../../public/Desing para pop-up.png'

interface ExitPopupProps {
  showPopup: boolean
  onClose: () => void
}

const SendMessage = z.object({
  name: z.string().min(1, 'Informe seu nome'),
  phone: z
    .string()
    .min(10, 'Informe um numero de telefone válido')
    .max(15, 'Informe um número de telefone válido'),
  message: z.string().min(1, 'escreva uma mensagem'),
  email: z.string().email('Informe um email válido'),
})

type messageInfo = z.infer<typeof SendMessage>

export function ExitPopup({ showPopup, onClose }: ExitPopupProps) {
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
        { ...data, accessKey: '95fcb801-148d-4c8d-9439-fc9618ee060c' },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )

      if (res.data.success) {
        toast.success('Email enviado com sucesso')
      } else {
        toast.error('Falha no envio de email')
      }

      reset()
    } catch (error) {
      console.error('An error occurred', error)
    }
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 max-[768px]:hidden">
      <div
        className="bg-cor-fundo p-6 rounded-lg shadow-lg grid grid-cols-2 gap-5 max-w-[1180px] items-center relative"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="flex flex-col text-corTexto">
          <img className="w-96 -mt-24" src={modalImage} alt="" />
          <div className="-mt-5">
            <h2 className="text-5xl font-bold leading-[3.30rem]">
              Fale agora com um especialista da Souta Soluções!
            </h2>
            <p className="text-xs mt-5">
              Converse agora com nosso time e tire todas as suas duvidas
            </p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4">
            <div>
              <label
                htmlFor="nameModal"
                className="block text-sm font-medium text-zinc-400"
              >
                Nome
              </label>
              <input
                type="text"
                id="nameModal"
                placeholder="Seu nome completo"
                {...register('name')}
                className="mt-1 block w-full px-3 py-2 border-2 border-transparent brightness-95 text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm bg-cor-fundo"
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {formErrors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phoneModal"
                className="block text-sm font-medium text-zinc-400"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phoneModal"
                placeholder="Ex: 11 99999 9999"
                {...register('phone')}
                className="mt-1 block w-full px-3 py-2 border-2 border-transparent brightness-95 text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm bg-cor-fundo"
              />
              {formErrors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {formErrors.phone.message}
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
                placeholder="Exemplo@hotmail.com"
                {...register('email')}
                className="mt-1 block w-full px-3 py-2 border-2 border-transparent brightness-95 text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm bg-cor-fundo"
              />
              {formErrors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {formErrors.email?.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="messageModal"
                className="block text-sm font-medium text-zinc-400"
              >
                Menssagem
              </label>
              <textarea
                id="messageModal"
                {...register('message')}
                className="mt-1 block w-full px-3 py-2 border-2 border-transparent brightness-95 text-zinc-400 rounded-md shadow-sm focus:outline-none focus:ring-corTexto focus:border-corTexto sm:text-sm resize-none bg-cor-fundo"
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
                className="bg-corTexto border-2 border-corTexto w-full text-white hover:bg-cor-fundo hover:border-corTexto hover:text-corTexto rounded-md py-3 font-semibold ease-in-out duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-corTexto text-cor-fundo rounded-full p-1"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
