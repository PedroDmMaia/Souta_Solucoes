import { Toaster } from 'sonner'

import { NavBar } from './components/navBar'
import { Faq } from './sections/FAQ'
import { Footer } from './sections/footer'
import { ContactForm } from './sections/form'
import { Hero } from './sections/hero'
import { Home } from './sections/home'
import { HowWork } from './sections/howWorking'
import { Services } from './sections/services'
import { Topics } from './sections/topics'

export function App() {
  return (
    <div className="font-roboto antialiased">
      <Toaster richColors />
      <NavBar />
      <main className="bg-slate-700 w-full h-full pt-[4.5rem]">
        <Hero />
        <Topics />
        <Home />
        <Services />
        <HowWork />
        <Faq />
        <ContactForm />
        <Footer />
      </main>
    </div>
  )
}
