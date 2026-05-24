import { useEffect, useRef } from 'react';

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = 2;
            video.muted = true;
            video.play().catch((err) => {
                console.warn("Video auto-play was blocked or failed to load:", err);
            });
        }
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />
            </div>

            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                autoPlay
                muted
                playsInline
                loop
            />

            <button>Buy</button>

            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    );
};

export default Hero;
