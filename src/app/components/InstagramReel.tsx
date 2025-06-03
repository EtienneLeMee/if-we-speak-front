import { useEffect, useRef } from 'react';

interface InstagramEmbed {
  Embeds: {
    process: () => void;
  };
}

declare global {
  interface Window {
    instgrm?: InstagramEmbed;
  }
}

type InstagramReelProps = {
  url: string; // ex: "https://www.instagram.com/reel/C1xY2Z1KABC/"
};

export default function InstagramReel({ url }: InstagramReelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Charger le script Instagram une seule fois
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm?.Embeds?.process) {
  window.instgrm.Embeds.process();
}
  }, [url]);

  return (
    <div ref={containerRef} className="w-full flex justify-center rounded-xl">
      <blockquote
        className="instagram-media rounded-xl"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
            maxWidth: '325px', minWidth: '325px', height: '565px',
            margin: '0 auto',
        }}
      ></blockquote>
    </div>
  );
}
