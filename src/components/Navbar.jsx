import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/aso-logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-border">
      <div className="mx-auto w-full max-w-[1160px] px-6 flex items-center justify-between h-[84px]">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="ASO logo" className="h-9 w-auto rounded-[3px]" />
          <span className="flex flex-col font-heading font-bold text-xl text-ink leading-[1.1]">
            ASO
            <small className="font-body font-medium text-[11px] tracking-[0.06em] uppercase text-text-muted">
              Estate Surveyors &amp; Valuers
            </small>
          </span>
        </NavLink>

        <button
          className="hidden max-[860px]:flex flex-col justify-center gap-[5px] w-8 h-8 bg-none border-none p-0"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 bg-ink transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`block h-0.5 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 bg-ink transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>

        <nav
          className={`flex items-center gap-8
            max-[860px]:fixed max-[860px]:top-[84px] max-[860px]:inset-x-0 max-[860px]:bottom-0 max-[860px]:bg-white
            max-[860px]:flex-col max-[860px]:items-start max-[860px]:p-7 max-[860px]:gap-6
            max-[860px]:overflow-y-auto max-[860px]:transition-transform max-[860px]:duration-250
            ${open ? 'max-[860px]:translate-x-0' : 'max-[860px]:translate-x-full'}`}
        >
          <ul className="flex items-center gap-7 max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-5 max-[860px]:w-full">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-medium text-[15px] py-1.5 border-b-2 transition-colors duration-200 max-[860px]:text-lg ${
                      isActive ? 'text-ink border-blue' : 'text-text border-transparent hover:text-blue-dark'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold border border-ink text-ink rounded px-[22px] py-2.5 text-sm transition-colors duration-200 hover:bg-ink hover:text-white max-[860px]:w-full"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
