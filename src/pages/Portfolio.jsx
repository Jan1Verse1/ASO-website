import { portfolioProjects } from '../data/content.js'
import heroSkyline from '../assets/images/hero-skyline.jpg'
import officeBuilding from '../assets/images/office-building.jpg'
import houseExterior from '../assets/images/house-exterior.jpg'

const categoryImages = {
  'Property Valuation': houseExterior,
  'Facility Management': officeBuilding,
  'Investment Advisory': heroSkyline,
  'Estate Surveying': officeBuilding,
}

function Portfolio() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center py-16 pb-14 text-white"
        style={{ backgroundImage: `url(${heroSkyline})` }}
      >
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto w-full max-w-site px-6">
          <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-[#9db0ff]">
            Our Portfolio
          </span>
          <h1 className="text-white text-[clamp(32px,4vw,44px)] mb-3">
            Selected work across valuation, advisory &amp; management
          </h1>
          <p className="text-[#c7c8d3] text-[17px] max-w-[620px] m-0">
            A sample of the engagements ASO has supported. Project details below are
            placeholders and will be updated with real case studies.
          </p>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto w-full max-w-site px-6">
          <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
            {portfolioProjects.map((project) => (
              <div className="border border-border rounded-lg overflow-hidden" key={project.title}>
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${categoryImages[project.category] ?? officeBuilding})` }}
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
        </div>
      </section>
    </div>
  )
}

export default Portfolio
