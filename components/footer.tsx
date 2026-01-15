import Link from "next/link"
import { ChevronRight, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-accent w-fit pb-1">About Us</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              We link elite candidates with top companies in a range of sectors. Our goal is to satisfy each client's
              and candidate's specific demands by offering individualized and efficient recruiting solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b-2 border-accent w-fit pb-1">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center hover:text-accent transition-colors">
                    <ChevronRight className="mr-2 h-4 w-4 text-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b-2 border-accent w-fit pb-1">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-accent" />
                Email: hrd@hirionservice.com
              </p>
              {/* <p className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-accent" />
                Phone: 022-41891247
              </p> */}
              <Link href="#" className="flex items-center text-accent hover:underline">
                <Linkedin className="mr-3 h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Subscribe Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-accent w-fit pb-1">Subscribe</h3>
            <div className="flex flex-col space-y-2">
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-accent"
                placeholder="Enter your email"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white w-full transition-transform active:scale-95">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/30 py-6 text-center text-xs text-primary-foreground/80 font-medium tracking-wide">
        <p>© Copyright 2025 | All Rights Reserved by Hirion Service | Powered by Logix Incorporations (TPRP)</p>
      </div>
    </footer>
  )
}
