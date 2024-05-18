import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { BsGithub , BsTelephone, BsDribbble } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer
      container
      className='border border-t-8 border-stroke-1'
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link 
              to={"/"} 
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-current hover:text-stroke-1 transition-colors'
            >
              <span 
                className='px-2 py-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg text-white'
              >
                AkWebDev
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title='About'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AkWebDev Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Krejzy23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <hr className="my-6 w-full border-stroke-1 sm:mx-auto lg:my-8"/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright 
            href="#" 
            by="AkWebDev Blog" 
            year={new Date().getFullYear()}
          />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon className="text-current dark:hover:text-stroke-1 hover:text-stroke-1 transition-colors" href="https://github.com/Krejzy23" target="_blank" icon={ BsGithub }/>
              <Footer.Icon className="text-current dark:hover:text-stroke-1 hover:text-stroke-1 transition-colors" href="https://wa.me/420777936810" target="_blank" icon={ FaWhatsapp }/>
              <Footer.Icon className="text-current dark:hover:text-stroke-1 hover:text-stroke-1 transition-colors" href="tel:+420777936810" target="_blank" icon={ BsTelephone }/>
              <Footer.Icon className="text-current dark:hover:text-stroke-1 hover:text-stroke-1 transition-colors" href="mailto:ak-webdev@seznam.cz" target="_blank" icon={ FaEnvelope }/>
              <Footer.Icon className="text-current dark:hover:text-stroke-1 hover:text-stroke-1 transition-colors" href="#" target="_blank" icon={ BsDribbble }/>
            </div>
        </div>
      </div>
    </Footer>
  )
}