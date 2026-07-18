import { Link } from 'react-router-dom'
import { services, credentials, portfolioProjects } from '../data/content.js'
import { credentialLogos } from '../data/logos.js'
import heroSkyline from '../assets/images/hero-skyline.jpg'
import officeBuilding from '../assets/images/office-building.jpg'
import houseExterior from '../assets/images/house-exterior.jpg'

const portfolioImages = [officeBuilding, houseExterior, heroSkyline]

function Home() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center py-30 pb-25 text-white"
        style={{ backgroundImage: `url(${heroSkyline})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1c22]/95 via-ink/90 to-[#202244]/80" />
        <div className="relative mx-auto w-full max-w-site px-6">
          <div className="max-w-[700px]">
            <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-[#9db0ff]">
              Estate Surveyors &amp; Valuers
            </span>
            <h1 className="text-white text-[clamp(36px,5vw,54px)] mb-5">
              Trusted property expertise,
              <br />
              delivered with precision.
            </h1>
            <p className="text-[#c7c8d3] text-[17px] max-w-[560px]">
              ASO is a Nigerian estate surveying and valuation firm helping individuals and
              businesses make confident decisions about their property assets — from valuation
              and facility management to investment advisory.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded bg-ink text-white border border-transparent transition-colors duration-200 hover:bg-blue-dark"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded bg-transparent border border-white/50 text-inherit transition-colors duration-200 hover:bg-white/12"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-bg-soft border-b border-border py-7"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex w-max items-center gap-16 animate-[marquee-ltr_28s_linear_infinite]">
          {[...credentials, ...credentials].map((c, index) => (
            <img
              key={`${c.name}-${index}`}
              src={credentialLogos[c.initials]}
              alt={c.name}
              className="h-10 w-auto object-contain shrink-0"
            />
          ))}
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto w-full max-w-site px-6">
          <div className="max-w-[680px]">
            <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-blue">
              About The Firm
            </span>
            <h2 className="text-[clamp(26px,3vw,34px)]">
              Led by Abdul Samuel, a registered estate surveyor and valuer.
            </h2>
            <p className="text-text-muted text-base mb-7">
              With expertise spanning general practice, property valuation, facility
              management, and investment advisory, Abdul Samuel has built ASO on a foundation
              of professional discipline and client-first thinking — mentored since 2003 by
              FNIVS, RSV Adefila Kola of Adefila &amp; Partners.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded border border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
            >
              Meet the Principal
            </Link>
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-soft">
        <div className="mx-auto w-full max-w-site px-6">
          <div className="max-w-[640px] mb-12 mx-auto text-center">
            <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-blue">
              What We Do
            </span>
            <h2>Comprehensive estate surveying services</h2>
          </div>
          <div className="grid grid-cols-4 gap-6 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
            {services.map((service) => (
              <div className="bg-white border border-border rounded-lg p-7 px-6" key={service.title}>
                <h3 className="text-[19px] mb-2.5">{service.title}</h3>
                <p className="text-text-muted text-[14.5px] m-0">{service.summary}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded border border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto w-full max-w-site px-6">
          <div className="max-w-[640px] mb-12 mx-auto text-center">
            <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-blue">
              Our Work
            </span>
            <h2>A snapshot of our portfolio</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-1">
            {portfolioProjects.slice(0, 3).map((project, index) => (
              <div className="border border-border rounded-lg overflow-hidden" key={project.title}>
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${portfolioImages[index % portfolioImages.length]})` }}
                  aria-hidden="true"
                />
                <div className="p-5">
                  <span className="text-xs font-semibold tracking-[0.06em] uppercase text-blue">
                    {project.category}
                  </span>
                  <h3 className="text-lg mt-2 mb-1">{project.title}</h3>
                  <p className="text-text-muted text-sm m-0">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded border border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-18 text-center">
        <div className="mx-auto w-full max-w-site px-6">
          <h2 className="text-white text-[clamp(26px,3vw,32px)]">Let's discuss your property needs.</h2>
          <p className="text-[#c7c8d3] mb-7">
            Get in touch for a consultation on valuation, management, or advisory services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded bg-transparent border border-white/50 text-inherit transition-colors duration-200 hover:bg-white/12"
          >
            Contact ASO
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
