"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils/reducedMotion";
import { motion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  y?: number;
  stagger?: number;
  duration?: number;
};

export const useGsapReveal = (
  containerRef: RefObject<HTMLElement>,
  options: Options = {}
) => {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const elements = Array.from(container.querySelectorAll("[data-reveal]"));
    const targets = elements.length ? elements : [container];
    const headings = targets.filter((el) =>
      ["H1", "H2", "H3"].includes(el.tagName)
    );
    const bodies = targets.filter((el) => el.tagName === "P");
    const cards = targets.filter(
      (el) => el.classList.contains("rounded-2xl") || el.getAttribute("data-card")
    );
    const others = targets.filter(
      (el) => !headings.includes(el) && !bodies.includes(el) && !cards.includes(el)
    );
    const timeline = gsap.timeline({ paused: true });

    if (headings.length) {
      gsap.set(headings, {
        opacity: 0,
        y: options.y ?? motion.reveal.y,
        scale: motion.reveal.scale
      });
      timeline.fromTo(
        headings,
        { opacity: 0, y: options.y ?? motion.reveal.y, scale: motion.reveal.scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? motion.duration.md,
          stagger: options.stagger ?? motion.reveal.stagger,
          ease: motion.ease.crisp
        }
      );
    }

    const isSafari =
      typeof window !== "undefined" &&
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const blurValue = isSafari ? 0 : motion.reveal.blur;

    if (bodies.length) {
      gsap.set(bodies, {
        opacity: 0,
        y: motion.reveal.y,
        filter: `blur(${blurValue}px)`
      });
      timeline.fromTo(
        bodies,
        { opacity: 0, y: motion.reveal.y, filter: `blur(${blurValue}px)` },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: motion.duration.md,
          ease: motion.ease.smooth
        },
        motion.reveal.delayStep
      );
    }

    if (cards.length) {
      gsap.set(cards, {
        opacity: 0,
        y: motion.reveal.y,
        scale: motion.reveal.scale
      });
      timeline.fromTo(
        cards,
        { opacity: 0, y: motion.reveal.y, scale: motion.reveal.scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: motion.duration.lg,
          stagger: motion.reveal.stagger,
          ease: motion.ease.smooth
        },
        motion.reveal.delayStep * 2
      );
    }

    if (others.length) {
      gsap.set(others, {
        opacity: 0,
        y: motion.reveal.y
      });
      timeline.fromTo(
        others,
        { opacity: 0, y: motion.reveal.y },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.md,
          stagger: motion.reveal.stagger,
          ease: motion.ease.smooth
        },
        motion.reveal.delayStep * 1.5
      );
    }

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 75%",
      once: true,
      onEnter: () => timeline.play()
    });

    return () => {
      trigger.kill();
      timeline.kill();
    };
  }, [containerRef, options.duration, options.stagger, options.y]);
};
