import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold mr-6">
            HENRY
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1">
                <span>Para estudiantes</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1">
                <span>Para empresas</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Ingresar
          </Link>
          <Link
            href="/apply"
            className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Aplicar
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Comienza o acelera tu carrera en tecnología
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Estudia Desarrollo Full Stack, Data Science o Data Analytics.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Online, en vivo y flexible</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Basado en proyectos</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Basado en cohortes</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Garantía de Empleo</span>
            </li>
          </ul>
          <Link
            href="/apply"
            className="bg-yellow-400 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-colors inline-block"
          >
            Aplicar
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Estudiante trabajando en computadora"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-2xl font-bold">
          Bootcamp <span className="text-purple-600">#1</span> de Latam
        </p>
      </footer>
    </div>
  )
}