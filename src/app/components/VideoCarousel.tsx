'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InstagramReel from './InstagramReel';
import YouTubeEmbed from './YouTubeEmbed';
import TikTokEmbed from './TikTokEmbed';
import XEmbed from './XEmbed';

type Video = {
  id: string;
  url: string;
};

type Props = {
  videos: Video[];
};

export default function VideoCarousel({ videos }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const container = carouselRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  const scroll = (direction: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.9; // Scroll presque une page entière
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    updateScrollButtons();
    container.addEventListener('scroll', updateScrollButtons);
    return () => container.removeEventListener('scroll', updateScrollButtons);
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl mt-8">
      <div className="flex items-center gap-2">
        {/* Left arrow */}
        {canScrollLeft && (
          <ChevronLeft
            className="w-20 h-20 text-white hover:cursor-pointer"
            onClick={() => scroll(-1)}
          />
        )}

        {/* Scroll container */}
        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hidden scroll-smooth flex space-x-4 px-2"
        >
          {videos.map((video) => {
            let embed;

            if (video.url.includes('instagram.com')) {
              embed = <InstagramReel url={video.url} />;
            } else if (video.url.includes('youtube.com') || video.url.includes('youtu.be')) {
              embed = <YouTubeEmbed url={video.url} />;
            } else if (video.url.includes('tiktok.com')) {
              embed = <TikTokEmbed url={video.url} />;
            } else if (video.url.includes('twitter.com') || video.url.includes('x.com')) {
              embed = <XEmbed url={video.url} />;
            } else {
              embed = (
                <div className="text-white">
                  ⚠️ Format non reconnu : <a href={video.url}>{video.url}</a>
                </div>
              );
            }

            return (
              <div
                key={video.id}
                className="
                  flex-shrink-0 flex justify-center
                  min-w-full max-w-full
                  md:min-w-1/2 md:max-w-1/2
                  lg:min-w-1/3 lg:max-w-1/3
                "
              >
                {embed}
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        {canScrollRight && (
          <ChevronRight
            className="w-20 h-20 text-white hover:cursor-pointer"
            onClick={() => scroll(1)}
          />
        )}
      </div>
    </div>
  );
}
