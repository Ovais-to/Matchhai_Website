"use client";

import { useEffect, useRef } from "react";
import { fx } from "@/lib/fx";
import { prefersCoarsePointer, prefersReducedMotion } from "@/lib/utils/reducedMotion";

export const NeonCursorFX = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    if (prefersReducedMotion() || prefersCoarsePointer()) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const init = async () => {
      const module = await import("threejs-toys");
      if (cancelled || !container) {
        return;
      }
      const neonCursor = module.neonCursor as (config: Record<string, unknown>) => unknown;
      const instance = neonCursor({
        el: container,
        eventsEl: document.body,
        shaderPoints: fx.cursor.shaderPoints,
        curvePoints: fx.cursor.curvePoints,
        curveLerp: fx.cursor.curveLerp,
        radius1: fx.cursor.radius1,
        radius2: fx.cursor.radius2,
        velocityTreshold: fx.cursor.velocityThreshold,
        sleepRadiusX: fx.cursor.sleepRadiusX,
        sleepRadiusY: fx.cursor.sleepRadiusY,
        sleepTimeCoefX: fx.cursor.sleepTimeCoefX,
        sleepTimeCoefY: fx.cursor.sleepTimeCoefY
      });

      if (typeof instance === "function") {
        cleanup = instance as () => void;
      } else if (instance && typeof (instance as { dispose?: () => void }).dispose === "function") {
        cleanup = () => (instance as { dispose: () => void }).dispose();
      }

      const canvases = Array.from(container.querySelectorAll("canvas"));
      const canvas = canvases[canvases.length - 1] ?? null;
      if (canvas) {
        canvas.style.display = "block";
        canvas.style.position = "absolute";
        canvas.style.inset = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
      }
    };

    init();

    return () => {
      cancelled = true;
      if (cleanup) {
        cleanup();
      }
      const canvases = Array.from(container.querySelectorAll("canvas"));
      canvases.forEach((canvas) => {
        if (canvas.parentElement) {
          canvas.parentElement.removeChild(canvas);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
};
