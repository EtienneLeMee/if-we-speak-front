'use client'

import { useState } from 'react'

export default function Home() {
  const [isSmMenuVisible, setSmMenuIsVisible] = useState(false)

  return (
    <div className="absolute bg-repeat bg-center"
      style={{ backgroundImage: "url('/bg-iws.png')" }}>
      <header className="absolute inset-x-0 top-0 z-50 border-white">
        <nav className="flex items-center justify-between lg:px-8 p-5" aria-label="Global">
          <div className="flex lg:flex-1 lg:justify-start">
            <a href="#">
              <span className="sr-only">If We Speak</span>
              <img className="h-10 lg:h-14 w-auto" src="/logo-iws-without-bg-sm.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setSmMenuIsVisible(true)}>
              <span className="sr-only">Ouvrir le menu</span>
              <svg className="size-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 lg:text-base font-semibold text-white relative transition duration-200 ease-in-out hover:text-gray-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">Nos vidéos</a>
            <a href="#" className="text-sm/6 lg:text-base font-semibold text-white relative transition duration-200 ease-in-out hover:text-gray-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">Note histoire</a>
            <a href="#" className="text-sm/6 lg:text-base font-semibold text-white relative transition duration-200 ease-in-out hover:text-gray-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">Notre équipe</a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-white">Connexion<span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>

        <div className={`${isSmMenuVisible ? 'visible' : 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
          <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out ${isSmMenuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">If We Speak</span>
                <img className="h-14 w-auto rounded-xl" src="logo-iws.png" alt="" />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setSmMenuIsVisible(false)}>
                <span className="sr-only">Fermer le menu</span>
                <svg className="size-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Vidéos</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">L&#39;équipe</a>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Connexion</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative isolate px-8 pt-16 pb-16">
        {/*Hero*/}
        <div className="relative mx-auto max-w-4xl my-8 p-8 sm:my-48 sm:py- lg:my-24 lg:py-24 bg-white/15 backdrop-blur-sm rounded-4xl shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl lg:text-6xl font-semibold tracking-tight text-balance text-white">
              LE MEDIA 100% SPORT !
            </h1>
            <p className="mt-4 lg:mt-8 text-md lg:text-xl font-ultralight italic text-gray-100">
              Storytelling, Reportages, Micro-trottoirs et + encore.
            </p>
          </div>
        </div>

        <div className='relative mx-auto max-w-7xl mt-8 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8'>
          <iframe className='rounded-xl max-w-1xl min-w-1xl min-h-120 lg:max-w-1xl lg:min-w-1xl lg:min-h-120' src="https://www.tiktok.com/player/v1/7504293465581178134?&music_info=1&description=1" allow="fullscreen" title="test"></iframe>
          <iframe className='rounded-xl max-w-1xl min-w-1xl min-h-120 lg:max-w-1xl lg:min-w-1xl lg:min-h-120' src="https://www.tiktok.com/player/v1/7504293465581178134?&music_info=1&description=1" allow="fullscreen" title="test"></iframe>
          <iframe className='rounded-xl max-w-1xl min-w-1xl min-h-120 lg:max-w-1xl lg:min-w-1xl lg:min-h-120' src="https://www.tiktok.com/player/v1/7504293465581178134?&music_info=1&description=1" allow="fullscreen" title="test"></iframe>

        </div>

      </div>
      <footer className="bg-gray-900 text-white py-12 px-8 md:px-32 lg:px-8 justify-items-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-40 gap-8 text-sm">
          {/* Bloc 1 : À propos */}
          <div>
            <h2 className="text-lg font-semibold mb-2">If We Speak</h2>
            <p className="text-gray-400">© 2025 If We Speak. Tous droits réservés.</p>
            {/*<p className="text-gray-400 mt-1">SIRET : 123 456 789 00012</p>*/}
          </div>

          {/* Bloc 2 : Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Navigation</h2>
            <ul className="space-y-1">
              <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
              <li><a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a></li>
              <li><a href="/cookies" className="hover:underline">Gestion des cookies</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Bloc 3 : Réseaux */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Réseaux sociaux</h2>
            <div className='flex gap-4'>
              <a href="https://www.instagram.com/if_we_speak/" target="_blank" rel="noopener noreferrer">
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
              <a href="https://www.youtube.com/channel/UC2ft9VyqgfffN_JRK37EK6w" target="_blank" rel="noopener noreferrer">
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
              </a>
              <a href="https://www.tiktok.com/@if_we_speak" target="_blank" rel="noopener noreferrer">
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                </span>
              </a>
              <a href="https://x.com/if_we_speak" target="_blank" rel="noopener noreferrer">
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512">
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
}
