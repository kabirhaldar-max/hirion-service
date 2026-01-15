"use client"

import Link from "next/link"
import {
  Users,
  Target,
  Clock,
  Search,
  Briefcase,
  LineChart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Handshake,
  UserCheck,
} from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const HERO_SLIDES = [
  {
    image: "/corporate-business-team-professional-group-smiling.jpg",
    title: (
      <>
        Discover <span className="text-accent">Top Talent</span> for Your Company!
      </>
    ),
    description: "Hirion Service provides expert recruitment solutions to help you find the best candidates globally.",
    cta: "About Us",
    link: "/about",
  },
  {
    image: "/modern-office-workspace-teamwork.jpg",
    title: (
      <>
        Empowering Your <span className="text-accent">Business Growth</span>
      </>
    ),
    description: "We connect you with industry leaders and specialized professionals to drive innovation.",
    cta: "Our Services",
    link: "/services",
  },
  {
    image: "/professional-office-team-corporate-background.jpg",
    title: (
      <>
        Global <span className="text-accent">Career Opportunities</span>
      </>
    ),
    description: "Unlock your potential with our personalized career guidance and international network.",
    cta: "Contact Us",
    link: "/contact",
  },
]

const brands = [
  {
    url: "https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo-tumb.png",
    title: "Jio",
  },
  {
    url: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-tumb.png",
    title: "LG",
  },
    {
    url: "https://1000logos.net/wp-content/uploads/2021/08/Reliance-Industries-Limited-RIL-Logo-tumb.png",
    title: "Reliance",
  },
      {
    url: "https://1000logos.net/wp-content/uploads/2016/10/Bosch-Logo-500x312.png",
    title: "Bosch",
  },
        {
    url: "https://1000logos.net/wp-content/uploads/2021/08/Saudi-Aramco-Logo-tumb.png",
    title: "Aramco",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out ${
                index === currentSlide ? "scale-100" : "scale-110"
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-primary/40 z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
              <div
                className={`max-w-2xl space-y-6 transition-all duration-700 delay-300 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">{slide.title}</h1>
                <p className="text-lg text-white/90 max-w-lg">{slide.description}</p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 transition-all hover:scale-105 active:scale-95"
                >
                  <Link href={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel controls (Visual only) */}
        <div className="absolute inset-y-0 left-4 flex items-center z-30 hidden md:flex">
          <button
            onClick={prevSlide}
            className="h-10 w-10 rounded-full bg-primary/50 flex items-center justify-center text-white hover:bg-primary transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center z-30 hidden md:flex">
          <button
            onClick={nextSlide}
            className="h-10 w-10 rounded-full bg-primary/50 flex items-center justify-center text-white hover:bg-primary transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Floating Info Cards */}
      <section className="container mx-auto px-4 -mt-16 relative z-30 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary text-white border-none shadow-2xl transition-transform hover:-translate-y-2 duration-300">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-accent" />
                Our Services
              </h3>
              <p className="text-sm text-primary-foreground/70">
                Our services designed to meet the unique requirements of both employers and job seekers.
              </p>
              <Link href="/services" className="text-accent text-sm font-medium flex items-center hover:underline">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-primary/90 text-white border-none shadow-2xl transition-transform hover:-translate-y-2 duration-300">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <Target className="mr-3 h-6 w-6 text-accent" />
                Our Mission
              </h3>
              <p className="text-sm text-primary-foreground/70">
                We bridge the gap between skilled professionals and prominent companies through personalized guidance.
              </p>
              <Link href="/about" className="text-accent text-sm font-medium flex items-center hover:underline">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-primary/80 text-white border-none shadow-2xl transition-transform hover:-translate-y-2 duration-300">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <Clock className="mr-3 h-6 w-6 text-accent" />
                Office Hours
              </h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Monday - Saturday</span>
                  <span>10.00 AM - 8.00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Sunday</span>
                  <span className="text-accent">Closed</span>
                </div>
              </div>
              <Link href="/contact" className="text-accent text-sm font-medium flex items-center hover:underline">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, value: "19000", label: "Jobs Placed" },
              { icon: UserCheck, value: "98%", label: "Placement Success Rate" },
              { icon: Users, value: "5000+", label: "Happy Clients" },
              { icon: Clock, value: "12+", label: "Years in Business" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 bg-card p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-white"
              >
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We're Always Ready To Assist You In Landing Your Ideal Position
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">
              Connecting job seekers with top employers to create successful careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Search,
                title: "Help with your job search",
                desc: "We help you find the right job that matches your skills and career goals.",
              },
              {
                icon: Users,
                title: "Tailored Guidance on Careers",
                desc: "Our experts provide personalized guidance to help you advance in your career.",
              },
              {
                icon: Handshake,
                title: "Employer Relationships",
                desc: "We connect you with top employers in your industry to maximize your opportunities.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex space-x-6">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('/modern-office-workspace-teamwork.jpg')` }}
        />
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
            Looking for Top Talent to Boost Your Team?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discover how our recruitment solutions can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 h-12">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-white border-white hover:bg-white/10 px-8 h-12 bg-transparent"
            >
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Our Clients</h2>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {brands.map((brand) => (
              <div key={brand.url} className="text-3xl font-black text-slate-400 tracking-widest">
                <img src={brand.url} className="h-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Services Overview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Recruitment Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">
              Explore our comprehensive range of recruitment solutions tailored to meet your hiring needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card
                key={i}
                className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card text-white"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="h-16 w-16 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-white hover:text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
