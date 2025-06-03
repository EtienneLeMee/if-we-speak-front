import { useEffect, useRef } from 'react';

export default function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef} className="">
      <blockquote
        className="instagram-media rounded-xl shadow-lg"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          padding: 0,
          maxWidth: '325px', minWidth: '325px', height: '565px'
        }}
      ></blockquote>
    </div>
  );
}
