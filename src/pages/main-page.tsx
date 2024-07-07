import { WhatsappLogo } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'

import { ExitPopup } from '@/components/modal'
import { NavBar } from '@/components/navBar'
import { Faq } from '@/sections/FAQ'
import { Footer } from '@/sections/footer'
import { ContactForm } from '@/sections/form'
import { Hero } from '@/sections/hero'
import { Home } from '@/sections/home'
import { HowWork } from '@/sections/howWorking'
import { Services } from '@/sections/services'
import { Topics } from '@/sections/topics'

export function MainPage() {
  // const [showPopup, setShowPopup] = useState(false)

  // useEffect(() => {
  //   const handleMouseLeave = (event: MouseEvent) => {
  //     if (
  //       event.clientY <= 0 ||
  //       event.clientX <= 0 ||
  //       event.clientX >= window.innerWidth ||
  //       event.clientY >= window.innerHeight
  //     ) {
  //       setShowPopup(true)
  //     }
  //   }

  //   document.addEventListener('mouseleave', handleMouseLeave)

  //   return () => {
  //     document.removeEventListener('mouseleave', handleMouseLeave)
  //   }
  // }, [])

  return (
    <div className="font-roboto antialiased">
      <Toaster richColors />
      <NavBar />
      <main className="bg-slate-700 w-full h-full pt-[4.5rem]">
        <Hero />
        <Services />
        <Home link="faq" />
        <Topics />
        <HowWork />
        <Faq />
        <ContactForm />
        <Footer />
      </main>
      {/* <ExitPopup showPopup={showPopup} onClose={() => setShowPopup(false)} /> */}
      <button className="fixed bottom-5 right-5 z-50 p-[0.30rem] rounded-full bg-green-400 flex items-center justify-center">
        <a
          href="https://wa.me/5511970696009?text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20negociar%20minha%20d%C3%ADvida"
          target="_blank"
          rel="noreferrer"
        >
          <span className="p-[0.30rem] absolute bg-red-500 rounded-full right-0 top-0 animate-ping"></span>
          <span className="p-[0.30rem] absolute bg-red-500 rounded-full right-0 top-0 opacity-75"></span>
          <WhatsappLogo className="text-white" size={32} weight="fill" />
        </a>
      </button>
    </div>
  )
}
