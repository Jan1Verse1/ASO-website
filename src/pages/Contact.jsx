import { useState } from 'react'
import consultation from '../assets/images/consultation.jpg'

const initialForm = { name: '', email: '', phone: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div>
      <section
        className="relative bg-cover bg-center py-16 pb-14 text-white"
        style={{ backgroundImage: `url(${consultation})` }}
      >
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto w-full max-w-site px-6">
          <span className="mb-3 inline-block font-semibold text-[13px] tracking-[0.14em] uppercase text-[#9db0ff]">
            Contact Us
          </span>
          <h1 className="text-white text-[clamp(32px,4vw,44px)] mb-3">Let's talk about your property</h1>
          <p className="text-[#c7c8d3] text-[17px] max-w-[620px] m-0">
            Reach out for valuation, management, or advisory enquiries.
          </p>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto w-full max-w-site px-6 grid grid-cols-[1fr_1.4fr] gap-14 max-[860px]:grid-cols-1">
          <div className="flex flex-col gap-7">
            <div>
              <h3 className="font-body text-[13px] font-bold tracking-[0.06em] uppercase text-blue-dark mb-1.5">
                Office Address
              </h3>
              <p className="m-0 text-text text-base">Block 57, LSDPC Estate, Glover Street, Adekunle, Yaba, Lagos.</p>
            </div>
            <div>
              <h3 className="font-body text-[13px] font-bold tracking-[0.06em] uppercase text-blue-dark mb-1.5">
                Phone
              </h3>
              <p className="m-0 text-text text-base">+234 810 395 5455, +234 805 741 5400</p>
            </div>
            <div>
              <h3 className="font-body text-[13px] font-bold tracking-[0.06em] uppercase text-blue-dark mb-1.5">
                Email
              </h3>
              <p className="m-0 text-text text-base">asopropertiescustodian@gmail.com; asoconsulting@aso.co.ng </p>
            </div>
            <div>
              <h3 className="font-body text-[13px] font-bold tracking-[0.06em] uppercase text-blue-dark mb-1.5">
                Office Hours
              </h3>
              <p className="m-0 text-text text-base">Monday – Friday, 9:00am – 5:00pm</p>
            </div>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5 max-[560px]:grid-cols-1">
              <label className="flex flex-col gap-2 text-sm font-semibold text-text">
                Full Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="font-body text-[15px] font-normal px-3.5 py-3 rounded border border-border bg-bg-soft resize-y focus:outline-none focus:border-blue focus:bg-white"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-text">
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="font-body text-[15px] font-normal px-3.5 py-3 rounded border border-border bg-bg-soft resize-y focus:outline-none focus:border-blue focus:bg-white"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-semibold text-text">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="font-body text-[15px] font-normal px-3.5 py-3 rounded border border-border bg-bg-soft resize-y focus:outline-none focus:border-blue focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-text">
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="font-body text-[15px] font-normal px-3.5 py-3 rounded border border-border bg-bg-soft resize-y focus:outline-none focus:border-blue focus:bg-white"
              />
            </label>
            <button
              type="submit"
              className="self-start inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded bg-ink text-white border border-transparent transition-colors duration-200 hover:bg-blue-dark"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green font-semibold text-sm">Thanks — your message has been noted.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
