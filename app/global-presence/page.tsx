import { SubPageHero } from "@/components/sub-page-hero"

export default function GlobalPresencePage() {
  return (
    <div className="flex flex-col w-full">
      <SubPageHero title="Global Presence" />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <img
                src="/ceo-receiving-award-at-entmeawards-2023.jpg"
                alt="CEO Receiving Award"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 p-6 flex items-end">
                <p className="text-white text-sm font-medium">
                  Hirion Service's CEO receiving award at EntMEAwards 2023 for Best Rising E-Business in 2023
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <img
                src="/hr-team-receiving-award-at-entmeawards-2023.jpg"
                alt="HR Team Receiving Award"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 p-6 flex items-end">
                <p className="text-white text-sm font-medium">
                  HR team receiving award at EntMEAwards 2023 for Best Tech Innovations in 2023
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <p className="text-slate-600 leading-relaxed text-center italic">
                The EntMEAwards Business Excellence category is designed to honor and celebrate outstanding achievements
                in the business community international. These awards recognize businesses and professionals who have
                demonstrated exceptional performance, innovation, and contributions to the local economy as well
                globally. The Business Excellence awards aim to promote excellence in business operations, encourage
                entrepreneurial spirit, and acknowledge companies that have made significant strides in their
                industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-slate-200 rounded-2xl p-4 bg-white shadow-sm flex flex-col items-center">
                <img
                  src="/business-excellence-certificate-awarded-by-enterpr.jpg"
                  alt="Enterprise USA Certificate"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-slate-900 font-bold text-sm">
                  Business Excellence certificate awarded by Enterprise USA
                </p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-4 bg-white shadow-sm flex flex-col items-center">
                <img
                  src="/certification-of-appreciation-by-edb-singapore.jpg"
                  alt="EDB USA Certification"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-slate-900 font-bold text-sm">Certification of appreciation by EDB USA</p>
              </div>
            </div>

            <div className="bg-muted p-12 rounded-2xl space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold border-l-4 border-accent pl-4 text-foreground">
                Recognized Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We at Hirion Service are absolutely thrilled to announce that we have been awarded the Certificate of
                Appreciation from EDB USA in recognition of our outstanding Business Excellence. This prestigious
                accolade is a reflection of our unwavering commitment to exemplary business practices, stellar
                management, and exceptional client retention.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Additionally, we are deeply honored to have received the Business Excellence Award at the 2023
                EntMEAwards for Innovation in Tech industry and Rising E-business. This recognition is a testament to
                our team's hard work, dedication, and innovative spirit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
