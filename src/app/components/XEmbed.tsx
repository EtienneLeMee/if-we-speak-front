'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: (element?: HTMLElement | null) => void;
            };
        }
    }
}

type XEmbedProps = {
    url: string;
};

export default function XEmbed({ url }: XEmbedProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const renderTweet = () => {
            if (window.twttr?.widgets) {
                window.twttr.widgets.load(containerRef.current);
            }
        };

        const existingScript = document.querySelector(
            'script[src="https://platform.twitter.com/widgets.js"]'
        );

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.onload = renderTweet;
            document.body.appendChild(script);
        } else {
            renderTweet();
        }
    }, [url]);

    return (
        <div
            ref={containerRef}
            className="w-full flex justify-center scrollbar-custom"
            style={{
                height: '565px',
                maxHeight: '565px',
                overflowY: 'auto',
                overflowX: 'hidden',
                borderRadius: '0.75rem', // = rounded-xl
                maxWidth: '325px',
                minWidth: '325px',
            }}
        >
            <blockquote className="twitter-tweet">
                <a href={url.replace('x.com', 'twitter.com')}></a>
            </blockquote>
        </div>
    );
}
