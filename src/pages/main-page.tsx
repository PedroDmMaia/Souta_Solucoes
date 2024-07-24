import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'

// eslint-disable-next-line import/no-absolute-path
import WhatsappLogo from '/whatsApp.png'
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
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (
        event.clientY <= 0 ||
        event.clientX <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      ) {
        setShowPopup(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

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
      <ExitPopup showPopup={showPopup} onClose={() => setShowPopup(false)} />
      <button className="fixed bottom-5 right-5 z-50">
        <a href="https://wa.me/5511970696009?text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20negociar%20minha%20d%C3%ADvida">
          <img className="w-16" src={WhatsappLogo} alt="" />
        </a>
      </button>
    </div>
  )
}
