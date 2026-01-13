import { useEffect } from "react";

export default function useHomeEffects() {
  useEffect(() => {
    /* =============================
       CUSTOM CURSOR
    ============================= */
    const cursor = document.getElementById("cursor");

    const moveCursor = (e) => {
      if (!cursor) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    /* =============================
       PRELOADER FIX (IMPORTANT)
    ============================= */
    const preloader = document.getElementById("preloader");
    const progress = document.getElementById("loader-progress");

    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 15;

      if (progress) {
        progress.style.width = `${Math.min(value, 100)}%`;
      }

      if (value >= 100) {
        clearInterval(interval);

        // Small delay for smooth exit
        setTimeout(() => {
          if (preloader) {
            preloader.classList.add("loaded");
          }
        }, 300);
      }
    }, 120);

    /* =============================
       REVEAL ANIMATION ON SCROLL
    ============================= */
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    /* =============================
       CLEANUP (IMPORTANT)
    ============================= */
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);
}

