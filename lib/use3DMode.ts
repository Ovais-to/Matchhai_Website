"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/utils/reducedMotion";

const STORAGE_KEY = "matchhai_3d_mode";

const isWebGLAvailable = () => {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
};

const isLowEndGpu = () => {
  if (typeof window === "undefined") {
    return true;
  }
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return true;
  }
  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    : "";
  const text = String(renderer).toLowerCase();
  const patterns = [
    "swiftshader",
    "mali-3",
    "mali-4",
    "powervr",
    "vivante",
    "adreno (tm) 3",
    "intel hd graphics 4000"
  ];
  return patterns.some((pattern) => text.includes(pattern));
};

export const use3DMode = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const cached = window.localStorage.getItem(STORAGE_KEY);
    if (cached) {
      setEnabled(cached === "true");
      return;
    }
    const connection = (navigator as Navigator & {
      connection?: { effectiveType?: string };
    }).connection;
    const effectiveType = connection?.effectiveType ?? "";
    const lowEnd =
      prefersReducedMotion() ||
      !isWebGLAvailable() ||
      isLowEndGpu() ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
      ((navigator as { deviceMemory?: number }).deviceMemory &&
        (navigator as { deviceMemory?: number }).deviceMemory! < 4) ||
      effectiveType === "slow-2g" ||
      effectiveType === "2g";
    const nextValue = !lowEnd;
    window.localStorage.setItem(STORAGE_KEY, String(nextValue));
    setEnabled(nextValue);
  }, []);

  return enabled;
};
