import {
  contactDetails,
  currentlyBuilding,
  finalCallToAction,
  navItems,
  portfolioImages,
  projects,
  services,
  skillGroups,
  site,
  socialLinks,
  stats,
  techStack,
} from "../data";
import ContactForm from "../components/ContactForm";
import ImageSlot from "../components/ImageSlot";
import MotionEffects from "../components/MotionEffects";
import SectionHeading from "../components/SectionHeading";
import ThemeToggle from "../components/ThemeToggle";

export default function HomePage() {
  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0];
  const otherProjects = projects.filter((project) => !project.featured);
  const whatsappLink = (message) =>
    `${contactDetails.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <MotionEffects name={site.name} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav-wrap">
          <nav className="nav" aria-label="Main navigation">
            <a href="#home" className="brand" aria-label="Ricky A. George home">
              Ricky<span>.</span>
            </a>

            <div className="nav-links">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section
          id="home"
          className="hero section hero-with-background"
          data-motion-section
          data-rotating-words={JSON.stringify(site.rotatingWords)}
        >
          <div className="hero-orbs" aria-hidden="true">
            <span className="hero-orb hero-orb--navy" />
            <span className="hero-orb hero-orb--blue" />
            <span className="hero-orb hero-orb--red" />
          </div>
          <div className="hero-background-slot" aria-hidden="true">
            <ImageSlot
              src={portfolioImages.heroBackground}
              alt=""
              className="hero-background-image"
              label="Add hero background"
              fallbackLetter="BG"
              variant="background"
              loading="eager"
            />
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Liberia-based builder</span>
              <h1>{site.name}</h1>
              <p className="headline">{site.oneLineHeadline}</p>
              <p className="rotating-headline">
                I build <span data-rotating-word>{site.rotatingWords[0]}</span>
              </p>
              <p className="lede">{site.story}</p>

              <div className="cta-row">
                <a href="#projects" className="button primary">
                  View my work
                </a>
                <a href="#contact" className="button secondary">
                  Contact me
                </a>
              </div>
            </div>

            <div
              className="hero-visual"
              aria-label="Portrait photo of Ricky A. George"
            >
              <div className="hero-stage">
                <div className="avatar-card floating-frame">
                  <ImageSlot
                    src={portfolioImages.profile}
                    alt="Portrait of Ricky A. George"
                    className="avatar-image"
                    label="Profile photo"
                    fallbackLetter="RG"
                    variant="profile"
                    loading="eager"
                  />
                  <div className="avatar-badge">RG</div>
                  <div className="avatar-meta">
                    <span>{site.name}</span>
                    <small>{site.tagline}</small>
                  </div>
                </div>
                <div
                  className="rigza-phone"
                  role="img"
                  aria-label="Decorative RIGZA-style app screen"
                >
                  <div className="phone-island" />
                  <div className="phone-screen">
                    <div className="phone-topline">
                      <span>RIGZA</span>
                      <span>•••</span>
                    </div>
                    <p className="phone-greeting">Your campus, at a glance.</p>
                    <div className="phone-feature">
                      <span>Campus guide</span>
                      <b>Explore</b>
                    </div>
                    <div className="phone-shortcuts">
                      <i>⌂</i>
                      <i>▦</i>
                      <i>◷</i>
                    </div>
                    <div className="phone-list">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="phone-nav">
                      <i>⌂</i>
                      <i>⌕</i>
                      <i>◉</i>
                    </div>
                  </div>
                </div>
                {site.heroChips.map((chip, index) => (
                  <span
                    key={chip}
                    className={`hero-chip hero-chip--${index + 1}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="tech-strip"
          aria-label="Technology stack"
          data-motion-section
        >
          <div className="tech-marquee">
            {[0, 1].map((copy) => (
              <div className="tech-row" key={copy} aria-hidden={copy === 1}>
                {techStack.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section" data-motion-section>
          <div className="container">
            <SectionHeading
              eyebrow="About me"
              title="A student, builder and small-business owner"
              description="I am building skills and products in a way that matches where I am today and what I want to create next."
            />

            <div className="stats-grid">
              {stats.map((stat) => (
                <article key={stat.label} className="stat-card tilt-card">
                  <span
                    className="stat-value"
                    data-count={
                      typeof stat.value === "number" ? stat.value : undefined
                    }
                  >
                    {stat.value ?? "Not set"}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </article>
              ))}
            </div>

            <div className="about-copy">
              <p>
                My full name is {site.name}. I am {site.age} years old and I
                live in {site.location}. I am a student at Starz University in
                the Bachelor of Information Technology programme, and I want my
                work to solve real problems in my community.
              </p>
              <p>{site.story}</p>
            </div>

            <div className="about-copy" style={{ marginTop: "1.25rem" }}>
              <p>
                <strong>Where I want to be in 5 years:</strong>{" "}
                {site.fiveYearVision}
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section muted-section"
          data-motion-section
        >
          <div className="container">
            <SectionHeading
              eyebrow="Skills"
              title="Growing the mix of technical and practical ability"
              description="I learn by building, testing and improving the tools I need for real work."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-card tilt-card">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="section muted-section"
          data-motion-section
        >
          <div className="container">
            <SectionHeading
              eyebrow="Services"
              title="Practical help with tech"
              description="Get in touch about a website, a phone issue or a student tech question."
            />
            <div className="services-grid">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="service-card card-surface tilt-card"
                >
                  <span className="service-mark" aria-hidden="true">
                    +
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    className="button primary magnetic-button"
                    href={whatsappLink(service.whatsappText)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section" data-motion-section>
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work and experiments"
              description="These projects reflect my learning, my interests and the kind of products I want to build next."
            />

            <article className="featured-project card-surface tilt-card">
              <div className="project-visual project-visual-featured">
                {featuredProject.video ? (
                  <video
                    className="project-image"
                    src={featuredProject.video}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`${featuredProject.name} demo video`}
                  />
                ) : (
                  <ImageSlot
                    src={featuredProject.image}
                    alt={`${featuredProject.name} preview`}
                    className="project-image"
                    label={`Add ${featuredProject.shortName || featuredProject.name} screenshot`}
                    fallbackLetter={featuredProject.visual.charAt(0) || "P"}
                    variant="card"
                    loading="lazy"
                  />
                )}
                <span className="project-visual-label">
                  {featuredProject.visual}
                </span>
              </div>

              <div className="project-copy">
                <div className="project-kicker">Featured project</div>
                <h3>{featuredProject.name}</h3>
                <p>{featuredProject.description}</p>
                <div className="tag-row">
                  {featuredProject.tools.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProject.link}
                  className="button primary magnetic-button featured-live-demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </div>
            </article>

            <div className="projects-grid">
              {otherProjects.map((project) => (
                <article
                  key={project.name}
                  className="project-card card-surface tilt-card"
                >
                  <div className="project-visual">
                    <ImageSlot
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="project-image"
                      label={`Add ${project.shortName || project.name} image`}
                      fallbackLetter={project.visual.charAt(0) || "P"}
                      variant="card"
                      loading="lazy"
                    />
                    <span className="project-visual-label">
                      {project.visual}
                    </span>
                  </div>

                  <div className="project-copy">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tools.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="building"
          className="section building-section"
          data-motion-section
        >
          <div className="container">
            <div className="building-strip card-surface">
              <div className="building-intro">
                <span className="eyebrow">In progress</span>
                <h2>Currently building</h2>
              </div>
              <div className="building-items">
                {currentlyBuilding.map((item) => (
                  <div className="building-item" key={item.title}>
                    <div className="building-item-heading">
                      <h3>{item.title}</h3>
                      <span>
                        {typeof item.progress === "number"
                          ? `${item.progress}%`
                          : "Progress not set"}
                      </span>
                    </div>
                    <div
                      className="progress-track"
                      role="progressbar"
                      aria-label={`${item.title} progress`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow={
                        typeof item.progress === "number"
                          ? Math.max(0, Math.min(100, item.progress))
                          : undefined
                      }
                    >
                      <span
                        style={{
                          "--progress-scale":
                            typeof item.progress === "number"
                              ? Math.max(0, Math.min(100, item.progress)) / 100
                              : 0,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section muted-section"
          data-motion-section
        >
          <div className="container contact-grid">
            <div className="contact-panel">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something useful together"
                description="I am open to conversations, collaboration and opportunities to create practical digital products."
              />

              <div className="contact-list">
                <a
                  href={`tel:${contactDetails.phonePrimary.replace(/\s+/g, "")}`}
                >
                  Phone: {contactDetails.phonePrimary}
                </a>
                <a
                  href={`tel:${contactDetails.phoneSecondary.replace(/\s+/g, "")}`}
                >
                  Alternate: {contactDetails.phoneSecondary}
                </a>
                <a href={`mailto:${site.email}`}>Email: {site.email}</a>
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {contactDetails.phonePrimary}
                </a>
              </div>

              <div className="social-row">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="form-panel card-surface">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <section className="final-cta" data-motion-section>
        <div className="container final-cta-inner">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>{finalCallToAction.title}</h2>
            <p>{finalCallToAction.description}</p>
          </div>
          <a
            className="button primary magnetic-button"
            href={whatsappLink(finalCallToAction.whatsappText)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp me
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Built in Liberia, for practical tech and real-world impact.</p>
        </div>
      </footer>
    </>
  );
}
