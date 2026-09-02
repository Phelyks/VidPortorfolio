import Image from "next/image";

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

        <section className="showreel" aria-label="Video showreel">
          <div className="video-placeholder">
            <button type="button" aria-label="Play showreel">
              ▶
            </button>

            <p>Showreel coming soon</p>
          </div>
        </section>

        <section className="section" id="work">
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