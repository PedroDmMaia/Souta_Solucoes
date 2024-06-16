import { Toaster } from 'sonner'

import { NavBar } from './components/navBar'
import { Faq } from './sections/FAQ'
import { Footer } from './sections/footer'
import { ContactForm } from './sections/form'
import { Hero } from './sections/hero'
import { Home } from './sections/home'
import { Topics } from './sections/topics'

export function App() {
  return (
    <>
      <Toaster richColors />
      <NavBar />
      <main className="bg-white w-full h-full pt-[4.5rem]">
        <Hero />
        <Topics />
        <Home />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
