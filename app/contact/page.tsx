import { SubPageHero } from "@/components/sub-page-hero"
import { Phone, MapPin, Mail, Clock, Linkedin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <SubPageHero title="Contact Us" />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            {/* Map Placeholder */}
            <div className="relative h-[400px] lg:h-full bg-muted min-h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 space-y-4">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-muted-foreground font-medium italic">Interactive Map View Placeholder</p>
                  <p className="text-xs text-muted-foreground/60">USA Headquarters & India Branch Locations</p>
                </div>
              </div>
              {/* Overlay elements like the image */}
              <div className="absolute top-8 left-8 bg-white p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Our Location</p>
                <p className="text-xs text-slate-600">4th Floor, Piramal Tower, Peninsula Corporate Park,
                    Off Senapati Bapat Marg, Lower Parel West, Mumbai - 400013.</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-900">Contact With Us</h2>
                <p className="text-slate-500">If you have any questions please feel free to contact with us.</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-muted/50 border-border" />
                  <Input placeholder="Email" type="email" className="bg-muted/50 border-border" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Phone" className="bg-muted/50 border-border" />
                  <Input placeholder="Subject" className="bg-muted/50 border-border" />
                </div>
                <Textarea placeholder="Your Message" className="bg-muted/50 border-border min-h-[150px]" />
                <Button className="bg-primary hover:bg-primary/90 w-full md:w-fit px-12 h-12 rounded-md">Send</Button>
              </form>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <Card className="bg-[#835c3a] text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl tracking-tight">Phone:</h3>
                  <div className="text-primary-foreground/70 text-sm space-y-1">
                    <p>022-41892251</p>
                    {/* <p>08448399673 (WhatsApp)</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#835c3a]/95 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl tracking-tight">Office Hours:</h3>
                  <div className="text-primary-foreground/70 text-sm space-y-1">
                    <p>Mon - Sat: 10 AM-8 PM</p>
                    <p>Sunday Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#835c3a]/85 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Building className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl tracking-tight">Headquarter:</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    7950 Legacy Drive, Suite 400, Plano TX, USA 75024
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#835c3a]/80 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl tracking-tight">Indian Branch:</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    4th Floor, Piramal Tower, Peninsula Corporate Park,
                    Off Senapati Bapat Marg, Lower Parel West, Mumbai - 400013.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#835c3a]/75 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl tracking-tight">Email Address:</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">hrd@hirionservice.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#835c3a]/70 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl tracking-tight">LinkedIn:</h3>
                  <a href="https://www.linkedin.com/company/hirion-service/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 text-sm leading-relaxed underline cursor-pointer">
                    Follow us on LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
