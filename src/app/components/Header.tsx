// components/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isSmMenuVisible, setSmMenuIsVisible] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-white">
        <nav className="flex items-center justify-between lg:px-8 p-5" aria-label="Global">
          <div className="flex lg:flex-1 lg:justify-start">
            <Link href="/">
              <span className="sr-only">If We Speak</span>
              <img className="h-10 lg:h-14 w-auto" src="/logo-iws-without-bg-sm.png" alt="" />
            </Link>
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
            <Link href="/#recentes" className="text-sm/6 lg:text-base font-semibold text-white relative transition duration-200 ease-in-out hover:text-gray-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">Nos vidéos</Link>
            <Link href="/notre-histoire" className="text-sm/6 lg:text-base font-semibold text-white relative transition duration-200 ease-in-out hover:text-gray-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">Note histoire</Link>
            <Link href="/notre-equipe" className="text-sm/6 lg:text-base font-semibold text-white relative transition duration-200 ease-in-out hover:text-gray-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">Notre équipe</Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 lg:text-base font-semibold text-white">Connexion<span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>

        <div className={`lg:hidden`} role="dialog" aria-modal="true">
          <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out ${isSmMenuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">If We Speak</span>
                <img className="h-14 w-auto rounded-xl" src="logo-iws.png" alt="" />
              </Link>
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
                  <Link href="/#recentes" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100" onClick={() => setSmMenuIsVisible(false)}>Nos vidéos</Link>
                  <Link href="/notre-histoire" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100" onClick={() => setSmMenuIsVisible(false)}>Notre histoire</Link>
                  <Link href="/notre-equipe" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100" onClick={() => setSmMenuIsVisible(false)}>Notre équipe</Link>

                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-100">Connexion</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
