import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-orange-100 text-foreground">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.png"
              alt="Top Music Logo"
              width={100}
              height={100}
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
          <Button variant="default" 
          className="bg-purple-300 text-primary-foreground hover:bg-purple-400 rounded-md border border-yellow-300 px-6 py-3 text-lg font-semibold">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            The best in musical instruments and amplifiers is at Top Music
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
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
                <Image
                  src="/claveSol.png"
                  alt="Feature Icon"
                  width={24}
                  height={24}
                />
                <span className="text-xl">{item}</span>
              </li>
            ))}
          </ul>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md border border-yellow-300 px-6 py-3 text-lg font-semibold" 
            asChild
          >
          <Link href="/shop">Explore Our Collection</Link>
        </Button>

        </div>
        <div className="flex-1">
          <Image
            src="https://excursionesnuevayork.net/wp-content/uploads/2019/03/Tour-por-Nueva-York.png"
            alt="Top Music Store in New York"
            width={1280}
            height={675}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
  <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-500 to-pink-500 shadow-lg border-b-4 border-primary pb-2 transition-transform transform hover:scale-105">
    Your Ultimate Destination for <span className="text-primary">Musical Excellence</span>
  </p>
</footer>


    </div>
  )
}
