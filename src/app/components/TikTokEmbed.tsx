'use client'

export default function TikTokEmbed({ videoId }: { videoId: string }) {
  return (
    <div>
      <blockquote
        className="tiktok-embed rounded-xl shadow-lg"
        cite={`https://www.tiktok.com/@ifwespeak/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: '325px', minWidth: '225px', height: '565px'}}
      >
<section className="absolute inset-0 flex items-center justify-center text-white">  
        </section>      </blockquote>
    </div>
  )
}
