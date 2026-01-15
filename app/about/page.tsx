import { SubPageHero } from "@/components/sub-page-hero"
import { Users, Trophy, Globe, Settings, ShieldCheck, HeadphonesIcon } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <SubPageHero title="About Us" />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground tracking-tight">About Hirion Service</h2>
              <div className="w-20 h-1.5 bg-primary"></div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Hirion Service, where we are redefining the recruitment industry with our unwavering
                  commitment to connecting top-tier talent with leading organizations across a vast spectrum of
                  industries.
                </p>
                <p>
                  Since our inception in 2018, Hirion Service has been at the vanguard of revolutionizing the
                  recruitment landscape, meticulously bridging gaps between employers and job seekers, and fostering an
                  environment where success is not just an aspiration but a guaranteed outcome on a global scale.
                </p>
                <p>
                  Headquartered in the dynamic business hub of USA, Hirion Service is strategically positioned to
                  harness the opportunities within Asia and beyond. In recognition of the growing demand for our
                  services, we have proudly expanded our operations into India, further solidifying our footprint in one
                  of the world's most vibrant and fast-growing markets.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-professional-business-office-meeting-group.jpg"
                  alt="Professional Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">5+</div>
                <div className="text-sm font-medium uppercase tracking-wider">Years of Experience</div>
              </div>
            </div>
          </div>

          <div className="mt-20 space-y-8 text-muted-foreground leading-relaxed">
            <p>
              At Hirion Service, our mission goes beyond mere recruitment; we are dedicated to transforming the entire
              hiring process. We strive to deliver streamlined, highly effective solutions that are not only tailored to
              the unique needs of both employers and job seekers but are also in harmony with the rapidly changing
              dynamics of today's job market.
            </p>
            <p>
              Our extensive network, coupled with our profound industry expertise, enables us to leverage cutting-edge
              strategies and innovative tools to deliver exceptional results consistently. We empower organizations to
              build high-performing, cohesive teams that drive success and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">We stand out in the recruitment industry for several reasons:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Experienced Team",
                desc: "Our team consists of experienced recruitment specialists who understand the nuances of various industries.",
              },
              {
                icon: Trophy,
                title: "Proven Track Record",
                desc: "We have a proven track record of successfully placing candidates in reputable organizations.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "With a global presence, we can connect employers with the best talent from around the world.",
              },
              {
                icon: Settings,
                title: "Tailored Solutions",
                desc: "We offer customized recruitment solutions that cater to the specific needs of our clients.",
              },
              {
                icon: ShieldCheck,
                title: "Commitment To Quality",
                desc: "Quality is at the core of everything we do. We adhere to the highest standards in recruitment.",
              },
              {
                icon: HeadphonesIcon,
                title: "Exceptional Support",
                desc: "Our support doesn't end with placement. We provide ongoing support to both employers and candidates.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex space-x-6">
                <div className="h-12 w-12 shrink-0 rounded-full bg-card flex items-center justify-center text-white shadow-sm border border-white/10">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
