"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Commercial Edit",
    category: "Advertisement",
  },
  {
    title: "Creator Documentary",
    category: "YouTube",
  },
  {
    title: "Product Launch",
    category: "Social Media",
  },
  {
    title: "Brand Story",
    category: "Corporate",
  },
];

// Replace these sample URLs with your own YouTube Shorts and Instagram Reels.
const featuredVideos = [
  {
    title: "Lumohubs Talking Head",
    platform: "YouTube Short",
    embedUrl: "https://www.youtube.com/embed/KJ0yNQpOrrE/embed/",
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
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DZmxKfRgsyN/embed/",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DZpjvPyiso-/embed/",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DaiGKGDjs1W/embed/",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbA6T0jDtlw/embed/",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbGMXEQiiJd/embed/",
  },
  {
    title: "Lumohubs",
    platform: "Instagram Reel",
    embedUrl: "https://www.instagram.com/p/DbadLyiD33_/embed/",
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
        track.scrollLeft + track.clientWidth >= track.scrollWidth - distance / 2;

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
    <section
      className="showreel"
      id="work"
      aria-labelledby="showreel-heading"
    >
      <div className="carousel-heading">
        <div>
          <p className="eyebrow">View my work</p>
          <h2 id="showreel-heading">Short-form edits in motion.</h2>
        </div>

        <p>
          A selection of vertical videos created for social media, brands, and
          online communities.
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
        {featuredVideos.map((video) => (
          <article className="reel-card" key={`${video.platform}-${video.title}`}>
            <div className="reel-frame">
              <iframe
                src={video.embedUrl}
                title={video.title}
                loading="lazy"
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
              These placeholders will later become project thumbnails and video
              case studies.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <span>0{index + 1}</span>
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
                Write a short introduction here. Explain who you work with, what
                kinds of videos you edit, and what makes your approach
                different.
              </p>

              <p>
                Your full biography, software experience, and editing process
                can be added later.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Have a project?</p>

          <h2>Let&apos;s create something worth watching.</h2>

          <a href="mailto:you@example.com" className="button button-primary">
            you@example.com
          </a>
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