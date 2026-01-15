import { SubPageHero } from "@/components/sub-page-hero"
import { UserCheck, Users, Search, Briefcase, Handshake, LineChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <SubPageHero title="Services" />

      {/* Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground">Our Recruitment Services</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of recruitment solutions tailored to meet your hiring needs.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: UserCheck,
              title: "Executive Interview",
              desc: "Specialized recruitment of top-level executives and senior management.",
            },
            {
              icon: Users,
              title: "Personnel Augmentation",
              desc: "Temporary staffing solutions to meet short-term project needs.",
            },
            {
              icon: Search,
              title: "Examining Skills",
              desc: "Evaluating candidates' skills and qualifications to ensure best-fit placements.",
            },
            {
              icon: Briefcase,
              title: "Career Advice",
              desc: "Guidance and advice to help candidates navigate their career paths.",
            },
            {
              icon: Handshake,
              title: "Negotiation Support",
              desc: "Assistance in negotiating job offers and terms of employment.",
            },
            {
              icon: LineChart,
              title: "Recruitment Strategy",
              desc: "Developing customized recruitment plans aligned with business objectives.",
            },
          ].map((service, i) => (
            <div key={i} className="flex space-x-6 p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center text-primary-foreground space-y-6">
          <h2 className="text-3xl font-bold">Looking for Top Talent to Boost Your Team?</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Discover how our recruitment solutions can help your business thrive.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Services Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="aspect-[21/9] w-full overflow-hidden">
              <img
                src="/modern-bright-office-with-people-working-on-comput.jpg"
                alt="Office Environment"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-12 space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Our Recruitment Services</h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Welcome to our recruitment services page. At Hirion Service, we specialize in connecting top talent
                  with leading employers. Our goal is to help you find the perfect match for your career or business
                  needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">What We Offer</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We provide a wide range of recruitment services tailored to your specific needs. Whether you're an
                    employer looking to hire or a job seeker searching for your next opportunity, we have the expertise
                    and resources to assist you.
                  </p>

                  <div className="space-y-6 pt-4">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-primary">Permanent Staffing</h4>
                      <p className="text-sm text-muted-foreground">
                        Our permanent staffing solutions are designed to help you find long-term employees who align
                        with your company culture and contribute to your business growth.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-primary">Temporary Staffing</h4>
                      <p className="text-sm text-muted-foreground">
                        Need temporary staff for a short-term project or to cover for an employee on leave? Our
                        temporary staffing services provide you with skilled professionals ready to step in.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-primary">Executive Search</h4>
                      <p className="text-sm text-muted-foreground">
                        Our executive search services are tailored to help you find top-level executives who can lead
                        your company to new heights.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/diverse-business-team-laughing-together.jpg"
                      alt="Team 1"
                      className="rounded-2xl w-full h-48 object-cover shadow-sm"
                    />
                    <img
                      src="/professional-workspace-meeting.jpg"
                      alt="Team 2"
                      className="rounded-2xl w-full h-48 object-cover shadow-sm"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-primary">Industry-Specific Recruitment</h4>
                      <p className="text-sm text-muted-foreground">
                        We have specialized recruitment teams for various industries, including IT, healthcare, finance,
                        and more. Our industry-specific knowledge allows us to understand the unique needs of each
                        sector and find the best candidates for your roles.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-primary">Career Counseling</h4>
                      <p className="text-sm text-muted-foreground">
                        For job seekers, we offer career counseling services to help you navigate your career path. Our
                        experienced counselors provide personalized advice and support to help you achieve your
                        professional goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
