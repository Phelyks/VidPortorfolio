"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Commercial Edit",
    category: "Advertisement",
    embedUrl: "https://www.youtube.com/embed/xIhFUg3wBLw",
  },
  {
    title: "Creator Documentary",
    category: "YouTube",
    embedUrl: "https://www.youtube.com/embed/CAuiLeZK6_8",
  },
  {
    title: "Product Launch",
    category: "Social Media",
    embedUrl: "https://www.youtube.com/embed/BOPLHJKyBZ8",
  },
  {
    title: "Brand Story",
    category: "Corporate",
    embedUrl: "https://www.youtube.com/embed/jPbF9YeUfL8",
  },
];

// Replace these sample URLs with your own YouTube Shorts and Instagram Reels.
const featuredVideos = [
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/KJ0yNQpOrrE",
  },
  {
    title: "Social media reel",
    platform: "Lumohubs IG Reel",
    embedUrl: "https://www.instagram.com/p/DbdpALtFXLr/embed/",
  },
  {
    title: "Story-driven vertical edit",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/NrME6dfC_qo",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbLxByQkmhy/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/LYjuFH1GEs8",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbA6T0jDtlw/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/OTrjvIZx7Ao",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DZ5DKhrguIp/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/Y8vvjql2fBA",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DZmxKfRgsyN/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/miNkxmhYlKo",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DZpjvPyiso-/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/Zo_wwan7nXY",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DaiGKGDjs1W/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/kNNLZvY2sYs",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbA6T0jDtlw/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/1hZpWk-ZuaI",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbGMXEQiiJd/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/btZz8u9rCqQ",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbadLyiD33_/embed/",
  },
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/TsVAGF4WguY",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbVaqdejKRH/embed/",
  },
];

function WorkCarousel() {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const [autoScrollActive, setAutoScrollActive] = useState(true);

  const stopAutoScroll = useCallback(() => {
    setAutoScrollActive(false);

    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const moveCarousel = useCallback(
    (direction) => {
      stopAutoScroll();

      const track = trackRef.current;
      if (!track) return;

      const card = track.querySelector(".reel-card");
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      const distance = (card?.getBoundingClientRect().width || 320) + gap;

      track.scrollBy({
        left: direction * distance,
        behavior: "smooth",
      });
    },
    [stopAutoScroll],
  );

  useEffect(() => {
    if (!autoScrollActive) return undefined;

    timerRef.current = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const card = track.querySelector(".reel-card");
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      const distance = (card?.getBoundingClientRect().width || 320) + gap;
      const endReached =
        track.scrollLeft + track.clientWidth >=
        track.scrollWidth - distance / 2;

      track.scrollTo({
        left: endReached ? 0 : track.scrollLeft + distance,
        behavior: "smooth",
      });
    }, 3500);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [autoScrollActive]);

  return (
    <section className="showreel" id="work" aria-labelledby="showreel-heading">
      <div className="carousel-heading">
        <div>
          <p className="eyebrow">View my work</p>
          <h2 id="showreel-heading">Short Form Videos | Reels</h2>
        </div>

        <p>
          A selection of vertical videos created for social media, brands, and
          content creators.
        </p>
      </div>

      <div
        className="reel-track"
        ref={trackRef}
        onPointerDown={stopAutoScroll}
        onTouchStart={stopAutoScroll}
        onWheel={stopAutoScroll}
        aria-label="Featured video carousel"
      >
        {featuredVideos.map((video, index) => (
          <article className="reel-card" key={`${video.embedUrl}-${index}`}>
            <div
              className={`reel-frame ${
                video.platform.toLowerCase().includes("instagram")
                  ? "instagram-frame"
                  : ""
              }`}
            >
              <iframe
                src={video.embedUrl}
                title={video.title}
                loading="lazy"
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="reel-details">
              <h3>{video.title}</h3>
              <p>{video.platform}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-controls" aria-label="Carousel controls">
        <button
          type="button"
          onClick={() => moveCarousel(-1)}
          aria-label="Show previous video"
        >
          <span aria-hidden="true">←</span>
        </button>

        <button
          type="button"
          onClick={() => moveCarousel(1)}
          aria-label="Show next video"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a href="#" className="logo">
          PHELYKS
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Video Editor &amp; Storyteller</p>

            <h1>I turn raw footage into stories people remember.</h1>

            <p className="hero-description">
              I create engaging videos for brands, businesses, and online
              creators.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                View my work
              </a>

              <a href="#contact" className="button button-secondary">
                Contact me
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-glow" />

            <Image
              src="/images/phelyks-hero.png"
              alt="Phelyks, video editor and storyteller"
              width={1122}
              height={1402}
              className="portrait-image"
              priority
            />
          </div>
        </section>

        <WorkCarousel />

        <section className="section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>A few projects I&apos;m proud of.</h2>
            </div>

            <p>
              A selection of long-form edits, interviews, webinars, and brand
              stories.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-video">
                  {project.embedUrl ? (
                    <iframe
                      src={project.embedUrl}
                      title={project.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="project-video-placeholder">
                      <span>0{index + 1}</span>
                      <p>Add YouTube video</p>
                    </div>
                  )}
                </div>

                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">About me</p>

          <div className="about-content">
            <h2>Editing with purpose, rhythm, and attention to detail.</h2>

            <div>
              <p>
                I’m a video editor who turns webinars, interviews, and raw ideas
                into clear, engaging stories. My work with LumoHubs and AWIThub
                spans long-form event recaps, speaker-led content, YouTube
                videos, Reels, Shorts, and promotional edits designed for
                different platforms.
              </p>
              <p>
                I combine thoughtful storytelling, clean pacing, subtitles,
                sound, and AI-assisted creative workflows to get more value from
                every recording. Whether it’s a 90-second social clip or a full
                webinar, my focus is simple: keep the message clear and the
                audience watching.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Have a project?</p>

          <h2>Let&apos;s create something worth watching.</h2>

          <div className="contact-buttons">
            <a
              href="mailto:flexxmosh@gmail.com"
              className="button button-primary"
            >
              Email me
            </a>

            <a
              href="https://wa.me/254728312868"
              className="button button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp me
            </a>

            <a
              href="https://t.me/flexxmosh"
              className="button button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram me
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Phelyks</p>

        <div className="social-links">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
