'use client'

import { useEffect, useState } from 'react';
import InstagramEmbed from './components/InstagramEmbed';
import VideoCarousel from './components/VideoCarousel';

type Video = {
  id: string;
  url: string;
  created_at: string; // si tu l’as en base
};


export default function Home() {
  const [sixLastVideos, setSixLastVideos] = useState<Video[]>([]);


  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const fetchSixLastVideos = async () => {
      if (!supabaseKey) {
        console.error('Supabase key missing');
        return;
      }

      const headers = {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      };

      const res = await fetch(`${supabaseUrl}/rest/v1/videos?select=*&order=created_at.desc&limit=6`, {
        headers,
      });

      if (!res.ok) {
        console.error('Failed to fetch sixLastVideos');
        return;
      }

      const data: Video[] = await res.json();
      setSixLastVideos(data); // ✅ OK maintenant
    };

    fetchSixLastVideos();
  }, []);

  return (
    <div className="relative isolate px-8 pt-16 pb-16">
      {/*Hero*/}
      <div className="relative mx-auto max-w-4xl my-8 p-8 sm:my-48 lg:my-24 lg:py-24 bg-white/15 backdrop-blur-sm rounded-4xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl lg:text-6xl font-semibold tracking-tight text-balance text-white">
            LE MEDIA 100% SPORT !
          </h1>
          <p className="mt-4 lg:mt-8 text-md lg:text-xl font-ultralight italic text-gray-100">
            Storytelling, Reportages, Micro-trottoirs et + encore.
          </p>
        </div>
      </div>
      {/*Vidéos récentes*/}
      <div id="recentes">
        <div className='text-white'>
          <h3 className='flex row'>Nos vidéos récentes
            <svg className="w-4 h-4 text-gray-800 dark:text-white ml-4 self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
          </h3>
        </div>
        <VideoCarousel videos={sixLastVideos} />
      </div>





      {/*Vidéos football*/}
      <div className='pt-16'>
        <div className='text-white'>
          <h3 className='flex row'>Nos vidéos football
            <svg className="w-4 h-4 text-gray-800 dark:text-white ml-4 self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
          </h3>
        </div>
        <div className='relative mx-auto max-w-7xl mt-8 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8'>
          {/*<TikTokEmbed videoId="7504293465581178134" />*/}
          <InstagramEmbed url="https://www.instagram.com/reel/DIeHb_wC4fy/" />
        </div>
      </div>



    </div>
  );
}
