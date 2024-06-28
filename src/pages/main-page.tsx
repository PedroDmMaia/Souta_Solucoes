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
        <Home />
        <Topics />
        <HowWork />
        <Faq />
        <ContactForm />
        <Footer />
      </main>
      <ExitPopup showPopup={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}
