import { expertise, credentials } from '../data/content.js'
import officeBuilding from '../assets/images/office-building.jpg'

function About() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center py-16 pb-14 text-white"
        style={{ backgroundImage: `url(${officeBuilding})` }}
      >
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto w-full max-w-site px-6">
          <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-[#9db0ff]">
            About Us
          </span>
          <h1 className="text-white text-[clamp(32px,4vw,44px)] mb-3">Meet the Principal Partner</h1>
          <p className="text-[#c7c8d3] text-[17px] max-w-[620px] m-0">
            ASO is built on the professional discipline and client-first philosophy of its
            principal, Abdul Samuel — a registered estate surveyor and valuer.
          </p>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto w-full max-w-site px-6 grid grid-cols-[240px_1fr] gap-12 items-start max-[860px]:grid-cols-1">
          <div
            className="w-[240px] h-[280px] rounded-lg text-white flex items-center justify-center font-heading text-5xl font-bold bg-[linear-gradient(150deg,var(--color-blue)_0%,var(--color-ink)_100%)] max-[860px]:w-40 max-[860px]:h-[190px]"
            aria-hidden="true"
          >
            AS
          </div>
          <div>
            <h2 className="text-[clamp(28px,3vw,36px)] mb-1.5">Abdul Samuel</h2>
            <p className="text-blue-dark font-semibold text-[15px] mb-5">
              Principal Partner, ASO Estate Surveyors &amp; Valuers
            </p>
            <p className="text-text-muted">
              Abdul Samuel leads ASO with expertise spanning general practice, property
              valuation, facility management, and investment advisory. He is adept at guiding
              clients through the critical decisions involved in acquiring, leasing, and
              managing real estate assets, and has built strong capabilities in overseeing
              building operations — ensuring functionality, safety, and efficiency, particularly
              for commercial and industrial properties.
            </p>
            <p className="text-text-muted">
              Since 2003, he has been mentored by FNIVS, RSV Adefila Kola, the principal
              partner at Adefila &amp; Partners, a distinguished estate surveying and real
              estate services firm — a relationship that continues to shape ASO's standards of
              professionalism and client service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-soft">
        <div className="mx-auto w-full max-w-site px-6">
          <div className="max-w-[640px] mb-12 mx-auto text-center">
            <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-blue">
              Areas of Expertise
            </span>
            <h2>What Abdul brings to every engagement</h2>
          </div>
          <div className="grid grid-cols-4 gap-5 max-[860px]:grid-cols-2 max-[520px]:grid-cols-1">
            {expertise.map((item) => (
              <div className="bg-white border border-border rounded-lg py-6.5 px-5.5" key={item.title}>
                <h3 className="text-lg mb-2.5">{item.title}</h3>
                <p className="text-sm text-text-muted m-0">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto w-full max-w-site px-6">
          <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-blue">
            Awards
          </span>
          <h2 className="text-[clamp(34px,5vw,52px)] mb-10">
            Awards &amp;
            <br />
            <em className="italic text-tan">Recognition</em>
          </h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-7 max-[860px]:grid-cols-1">
            {credentials.map((c) => (
              <div className="flex items-center gap-4 pb-5 border-b border-border" key={c.name}>
                <div className="shrink-0 w-14 h-14 rounded-full bg-bg-soft border border-border flex items-center justify-center font-bold text-[13px] text-blue-dark">
                  {c.initials}
                </div>
                <div>
                  <h4 className="font-body text-[15px] font-bold text-ink mb-1 m-0">{c.name}</h4>
                  <p className="text-[13.5px] text-text-muted m-0">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
