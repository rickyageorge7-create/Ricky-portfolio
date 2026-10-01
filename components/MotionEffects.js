"use client";

import { useEffect } from "react";

export default function MotionEffects({ name }) {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const intro = document.querySelector(".page-intro");
    const progress = document.querySelector(".scroll-progress");
    const hero = document.querySelector(".hero");
    const rotatingWord = document.querySelector("[data-rotating-word]");
    const words = JSON.parse(hero?.dataset.rotatingWords || "[]");
    const motionSections = document.querySelectorAll("[data-motion-section]");
    const navLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
    const cleanup = [];
    let scrollFrame = 0;
    let wordIndex = 0;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "motion-offscreen",
            !entry.isIntersecting,
          );
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed", "is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    motionSections.forEach((section) => revealObserver.observe(section));
    cleanup.push(() => revealObserver.disconnect());

    const countObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          const target = Number(node.dataset.count);
          if (!Number.isFinite(target)) {
            observer.unobserve(node);
            return;
          }
          if (reducedMotion.matches) {
            node.textContent = String(target);
            observer.unobserve(node);
            return;
          }
          const start = performance.now();
          const duration = 900;
          const frame = (now) => {
            const amount = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - amount) ** 3;
            node.textContent = String(Math.round(target * eased));
            if (amount < 1) requestAnimationFrame(frame);
            else observer.unobserve(node);
          };
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.65 },
    );

    document
      .querySelectorAll("[data-count]")
      .forEach((node) => countObserver.observe(node));
    cleanup.push(() => countObserver.disconnect());

    const updateScroll = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        progress?.style.setProperty("--scroll-progress", String(ratio));
        if (!reducedMotion.matches && hero) {
          hero.style.setProperty(
            "--hero-parallax",
            `${Math.min(window.scrollY * 0.08, 34)}px`,
          );
        }
      });
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    updateScroll();
    cleanup.push(() => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      cancelAnimationFrame(scrollFrame);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const activeId = `#${entry.target.id}`;
          navLinks.forEach((link) => {
            const active = link.getAttribute("href") === activeId;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    document
      .querySelectorAll("main section[id]")
      .forEach((section) => sectionObserver.observe(section));
    cleanup.push(() => sectionObserver.disconnect());

    let wordTimer;
    if (!reducedMotion.matches && rotatingWord && words.length > 1) {
      wordTimer = window.setInterval(() => {
        wordIndex = (wordIndex + 1) % words.length;
        rotatingWord.classList.add("word-changing");
        window.setTimeout(() => {
          rotatingWord.textContent = words[wordIndex];
          rotatingWord.classList.remove("word-changing");
        }, 180);
      }, 2000);
    }
    cleanup.push(() => window.clearInterval(wordTimer));

    const cards = document.querySelectorAll(".tilt-card");
    if (finePointer.matches && !reducedMotion.matches) {
      cards.forEach((card) => {
        const move = (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          card.style.setProperty("--tilt-x", `${(x - 0.5) * 5}deg`);
          card.style.setProperty("--tilt-y", `${(0.5 - y) * 5}deg`);
          card.style.setProperty("--light-x", `${x * 100}%`);
          card.style.setProperty("--light-y", `${y * 100}%`);
        };
        const reset = () => {
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", reset);
        cleanup.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", reset);
        });
      });
    }

    const buttons = document.querySelectorAll(".magnetic-button");
    if (finePointer.matches && !reducedMotion.matches) {
      buttons.forEach((button) => {
        const move = (event) => {
          const bounds = button.getBoundingClientRect();
          button.style.setProperty(
            "--magnet-x",
            `${(event.clientX - bounds.left - bounds.width / 2) * 0.06}px`,
          );
          button.style.setProperty(
            "--magnet-y",
            `${(event.clientY - bounds.top - bounds.height / 2) * 0.06 - 2}px`,
          );
        };
        const reset = () => {
          button.style.setProperty("--magnet-x", "0px");
          button.style.setProperty("--magnet-y", "0px");
        };
        button.addEventListener("pointermove", move);
        button.addEventListener("pointerleave", reset);
        cleanup.push(() => {
          button.removeEventListener("pointermove", move);
          button.removeEventListener("pointerleave", reset);
        });
      });
    }

    root.classList.add("motion-ready");
    if (reducedMotion.matches) {
      intro?.remove();
      root.classList.add("intro-done");
    } else {
      window.setTimeout(() => {
        intro?.classList.add("intro-finished");
        root.classList.add("intro-done");
      }, 1000);
      window.setTimeout(() => intro?.remove(), 1400);
    }

    return () => {
      cleanup.forEach((dispose) => dispose());
      root.classList.remove("motion-ready", "intro-done");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="page-intro" aria-hidden="true">
        <span>{name}</span>
      </div>
    </>
  );
}
