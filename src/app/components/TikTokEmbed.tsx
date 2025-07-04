'use client'

type TikTokEmbedProps = {
  url: string;
};

export default function TikTokEmbed({ url }: TikTokEmbedProps) {
  return (
    <blockquote className="tiktok-embed" cite={url} data-video-id="" style={{ maxWidth: '325px', minWidth: '325px', minHeight: '565px' }}>
      <section>Chargement TikTok…</section>
    </blockquote>
  );
}

/*export default function TikTokEmbed({ videoId }: { videoId: string }) {
  return (
    <div>
      <blockquote
        className="tiktok-embed rounded-xl shadow-lg"
        cite={`https://www.tiktok.com/@ifwespeak/video/${videoId}&rel=0`}
        data-video-id={videoId}
        style={{ maxWidth: '325px', minWidth: '225px', height: '565px' }}>
        <section className="absolute inset-0 flex items-center justify-center text-white">
        </section>
      </blockquote>
    </div>
  )
}*/
