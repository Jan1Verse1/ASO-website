import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#121214] text-[#d7d7dc] mt-auto pt-16">
      <div className="mx-auto w-full max-w-[1160px] px-6 grid grid-cols-[1.6fr_1fr_1fr] gap-10 pb-12 max-[720px]:grid-cols-1 max-[720px]:gap-8">
        <div>
          <div className="inline-flex rounded overflow-hidden">
            <span className="flex items-center justify-center w-10 h-10 font-heading font-bold text-lg text-white bg-blue">
              A
            </span>
            <span className="flex items-center justify-center w-10 h-10 font-heading font-bold text-lg text-white bg-green">
              S
            </span>
            <span className="flex items-center justify-center w-10 h-10 font-heading font-bold text-lg text-white bg-grey">
              O
            </span>
          </div>
          <p className="max-w-[280px] text-[#a9a9b2] text-[15px] mt-4.5 mb-0">
            Driven by Purpose, powered by strategy.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-white text-lg mb-4.5">Quick Link</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/services" className="text-[#c3c3ca] text-[15px] transition-colors duration-200 hover:text-white">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#c3c3ca] text-[15px] transition-colors duration-200 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-[#c3c3ca] text-[15px] transition-colors duration-200 hover:text-white">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-white text-lg mb-4.5">Social Media</h3>
          <div className="flex gap-3.5">
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 text-white transition-colors duration-200 hover:bg-blue"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 text-white transition-colors duration-200 hover:bg-blue"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.2c2.67 0 2.99.01 4.04.06 1.05.05 1.77.22 2.4.46.65.25 1.2.6 1.75 1.15.55.55.9 1.1 1.15 1.75.24.63.41 1.35.46 2.4.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.22 1.77-.46 2.4-.25.65-.6 1.2-1.15 1.75-.55.55-1.1.9-1.75 1.15-.63.24-1.35.41-2.4.46-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.77-.22-2.4-.46-.65-.25-1.2-.6-1.75-1.15-.55-.55-.9-1.1-1.15-1.75-.24-.63-.41-1.35-.46-2.4C2.21 14.99 2.2 14.67 2.2 12s.01-2.99.06-4.04c.05-1.05.22-1.77.46-2.4.25-.65.6-1.2 1.15-1.75.55-.55 1.1-.9 1.75-1.15.63-.24 1.35-.41 2.4-.46C9.01 2.21 9.33 2.2 12 2.2Zm0 1.8c-2.62 0-2.93.01-3.97.06-.9.04-1.39.19-1.72.32-.43.17-.74.36-1.06.68-.32.32-.51.63-.68 1.06-.13.33-.28.82-.32 1.72-.05 1.04-.06 1.35-.06 3.97s.01 2.93.06 3.97c.04.9.19 1.39.32 1.72.17.43.36.74.68 1.06.32.32.63.51 1.06.68.33.13.82.28 1.72.32 1.04.05 1.35.06 3.97.06s2.93-.01 3.97-.06c.9-.04 1.39-.19 1.72-.32.43-.17.74-.36 1.06-.68.32-.32.51-.63.68-1.06.13-.33.28-.82.32-1.72.05-1.04.06-1.35.06-3.97s-.01-2.93-.06-3.97c-.04-.9-.19-1.39-.32-1.72a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.33-.13-.82-.28-1.72-.32-1.04-.05-1.35-.06-3.97-.06Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-1.99a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 text-white transition-colors duration-200 hover:bg-blue"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.24 2.75h3.31l-7.23 8.26 8.5 10.24h-6.66l-5.22-6.42-5.97 6.42H1.65l7.73-8.84L1.2 2.75h6.83l4.72 5.86 5.49-5.86Zm-1.16 16.53h1.83L7.02 4.6H5.06l12.02 14.68Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1160px] px-6 border-t border-white/10 py-5">
        <p className="m-0 text-[13px] text-[#86868f]">
          &copy; {year} ASO Estate Surveyors &amp; Valuers. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
