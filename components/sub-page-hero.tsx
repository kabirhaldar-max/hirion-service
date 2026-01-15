import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface SubPageHeroProps {
  title: string
  breadcrumb?: string
}

export function SubPageHero({ title, breadcrumb }: SubPageHeroProps) {
  return (
    <section className="relative h-[350px] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/professional-office-team-corporate-background.jpg')` }}
      />
      <div className="absolute inset-0 bg-primary/70 z-10" />

      <div className="relative z-20 text-center text-white px-4 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">{title}</h1>
        <div className="flex items-center justify-center space-x-3 text-sm font-medium bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full w-fit mx-auto">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-primary-foreground/60" />
          <span className="text-primary-foreground/80">{breadcrumb || title}</span>
        </div>
      </div>
    </section>
  )
}
