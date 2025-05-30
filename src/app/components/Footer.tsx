// components/Footer.tsx
import React from 'react';
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-8 md:px-32 lg:px-8 justify-items-center">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-40 gap-8 text-sm">
                {/* Bloc 1 : À propos */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">If We Speak</h2>
                    <p className="text-gray-400">© 2025 If We Speak. <br/> Tous droits réservés.</p>
                    {/* <p className="text-gray-400 mt-1">SIRET : 123 456 789 00012</p> */}
                </div>

                {/* Bloc 2 : Navigation */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Navigation</h2>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/mentions-legales" className="hover:underline">
                                Mentions légales
                            </Link>
                        </li>
                        <li><Link href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</Link></li>
                        <li><a href="/cookies" className="hover:underline">Gestion des cookies</a></li>
                        <li><a href="mailto:ifwespeak98@gmail.com" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Bloc 3 : Réseaux sociaux */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Réseaux sociaux</h2>
                    <div className="flex gap-4">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/if_we_speak/" target="_blank" rel="noopener noreferrer">
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>
                        </a>
                        {/* YouTube */}
                        <a href="https://www.youtube.com/channel/UC2ft9VyqgfffN_JRK37EK6w" target="_blank" rel="noopener noreferrer">
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                </svg>
                            </span>
                        </a>
                        {/* TikTok */}
                        <a href="https://www.tiktok.com/@if_we_speak" target="_blank" rel="noopener noreferrer">
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                                </svg>
                            </span>
                        </a>
                        {/* X / Twitter */}
                        <a href="https://x.com/if_we_speak" target="_blank" rel="noopener noreferrer">
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
