export const fx = {
  neon: {
    primary: "#6BB7FF",
    secondary: "#D6B26F",
    haze: "#0F1115"
  },
  bloom: {
    intensity: 0.25,
    threshold: 0.65,
    smoothing: 0.15
  },
  cursor: {
    shaderPoints: 16,
    curvePoints: 80,
    curveLerp: 0.5,
    radius1: 5,
    radius2: 30,
    velocityThreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
  },
  dpr: {
    min: 1,
    max: 1.5
  },
  particles: {
    min: 30,
    max: 80,
    size: 0.03,
    field: {
      width: 6,
      height: 4,
      depth: 4
    }
  },
  grid: {
    size: 12,
    divisions: 40,
    opacity: 0.2
  }
};
