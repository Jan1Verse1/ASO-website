import { Link } from 'react-router-dom'
import { services } from '../data/content.js'
import officeBuilding from '../assets/images/office-building.jpg'

function Services() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center py-16 pb-14 text-white"
        style={{ backgroundImage: `url(${officeBuilding})` }}
      >
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto w-full max-w-site px-6">
          <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-[#9db0ff]">
            Our Services
          </span>
          <h1 className="text-white text-[clamp(32px,4vw,44px)] mb-3">
            Estate surveying services built on precision and trust
          </h1>
          <p className="text-[#c7c8d3] text-[17px] max-w-[620px] m-0">
            From valuation to facility oversight, ASO supports clients through every stage of
            owning, managing, and investing in real estate.
          </p>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto w-full max-w-site px-6">
          <div className="flex flex-col max-w-[780px]">
            {services.map((service, index) => (
              <div
                className="grid grid-cols-[64px_1fr] gap-6 py-9 border-b border-border first:pt-0 max-[560px]:grid-cols-1 max-[560px]:gap-2"
                key={service.title}
              >
                <span className="font-heading text-[28px] text-tan">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="text-2xl mb-2">{service.title}</h2>
                  <p className="text-text-muted m-0 max-w-[560px]">{service.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-18 text-center">
        <div className="mx-auto w-full max-w-site px-6">
          <h2 className="text-white text-[clamp(26px,3vw,32px)]">Not sure which service you need?</h2>
          <p className="text-[#c7c8d3] mb-7">
            Reach out and we'll help you find the right fit for your property.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded bg-transparent border border-white/50 text-inherit transition-colors duration-200 hover:bg-white/12"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
