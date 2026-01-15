"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Global Presence", href: "/global-presence" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center group transition-transform hover:scale-105">
            <div className="relative h-18 w-20 overflow-hidden rounded-lg flex items-center justify-center">
              <img src="/hirion_logo.png" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary leading-none uppercase">Hirion</span>
              <span className="text-[10px] font-medium tracking-[0.4em] text-muted-foreground uppercase">Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary relative py-1",
                  pathname === item.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-muted-foreground after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block text-base font-medium transition-colors hover:text-primary py-2",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
