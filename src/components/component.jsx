import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
          <Image
          src="/placeholder.png"  
          alt="Top Music Logo"
          width={200}
          height={200}
          className="rounded-full"
          />
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
  <Button variant="ghost" asChild>
    <Link href="/instruments" className="text-lg">Instruments</Link>
  </Button>
  <Button variant="ghost" asChild>
    <Link href="/equipment" className="text-lg">Equipment</Link>
  </Button>
  <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
    <ShoppingCart className="mr-2 h-4 w-4" />
    Add to Cart
  </Button>
</nav>

      </header>

      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            The best in musical instruments and amplifiers is at Top Music
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Discover premium quality instruments and top-notch amplifiers for musicians of all levels
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Wide range of instruments from renowned brands",
              "High-performance amplifiers for every genre",
              "Expert advice from experienced musicians",
              "Competitive prices and flexible financing options"
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/shop">Explore Our Collection</Link>
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://excursionesnuevayork.net/wp-content/uploads/2019/03/Tour-por-Nueva-York.png"
            alt="Top Music Store in New York"
            width={1280}
            height={675}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-2xl font-bold">
          Your Ultimate Destination for <span className="text-primary">Musical Excellence</span>
        </p>
      </footer>
    </div>
  )
}