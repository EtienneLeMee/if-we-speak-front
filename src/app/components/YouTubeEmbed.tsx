'use client';

import React from 'react';

type YouTubeEmbedProps = {
  url: string;
};

const extractYouTubeId = (url: string): string | null => {
  const shortRegex = /(?:youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  const longRegex = /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/;
  const match = url.match(shortRegex) || url.match(longRegex);
  return match ? match[1] : null;
};

export default function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  const videoId = extractYouTubeId(url);
  if (!videoId) return <p className="text-red-500">URL YouTube invalide</p>;

  return (
    <div className="w-full flex justify-center">
      <iframe
        className="w-full h-full rounded-xl shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        style={{ maxWidth: '325px', minWidth: '325px', height: '565px;', maxHeight: '565px' }}
      ></iframe>
    </div>
  );
}
