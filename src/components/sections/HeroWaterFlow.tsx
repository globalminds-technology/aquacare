"use client";

import React, { useRef, useEffect } from "react";

interface HeroWaterFlowProps {
  className?: string;
}

export const HeroWaterFlow: React.FC<HeroWaterFlowProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle systems
    interface StreamParticle {
      x: number;
      y: number;
      vy: number;
      vx: number;
      length: number;
      width: number;
      alpha: number;
    }

    interface Bubble {
      x: number;
      y: number;
      r: number;
      vy: number;
      wobbleSpeed: number;
      wobbleAmp: number;
      phase: number;
      alpha: number;
      depth: number;
    }

    interface SplashDrop {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      life: number;
      maxLife: number;
    }

    interface Ripple {
      x: number;
      y: number;
      rx: number;
      ry: number;
      alpha: number;
      speed: number;
    }

    interface Glint {
      x: number;
      y: number;
      size: number;
      phase: number;
      speed: number;
    }

    // Initialize Stream Particles (vertical water flow ribbons)
    const streamParticles: StreamParticle[] = Array.from({ length: 38 }, () => ({
      x: 0,
      y: Math.random(),
      vy: Math.random() * 0.04 + 0.025,
      vx: (Math.random() - 0.5) * 0.002,
      length: Math.random() * 0.08 + 0.03,
      width: Math.random() * 3 + 1.2,
      alpha: Math.random() * 0.6 + 0.3,
    }));

    // Initialize Rising Bubbles inside the Glass
    const bubbles: Bubble[] = Array.from({ length: 55 }, () => ({
      x: 0,
      y: Math.random() * 0.35 + 0.58, // Inside glass region
      r: Math.random() * 3.5 + 1.2,
      vy: -(Math.random() * 0.0025 + 0.0012),
      wobbleSpeed: Math.random() * 0.08 + 0.03,
      wobbleAmp: Math.random() * 0.004 + 0.001,
      phase: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.65 + 0.25,
      depth: Math.random(),
    }));

    // Dynamic Splashes & Ripples
    const splashDrops: SplashDrop[] = [];
    const ripples: Ripple[] = [];

    // Glistening Light Stars on the Glass Rim & Water Droplets
    const glints: Glint[] = [
      { x: 0.722, y: 0.528, size: 4, phase: 0, speed: 0.04 },
      { x: 0.792, y: 0.531, size: 5, phase: 1.5, speed: 0.035 },
      { x: 0.758, y: 0.536, size: 6, phase: 3.0, speed: 0.05 },
      { x: 0.706, y: 0.72, size: 3.5, phase: 2.1, speed: 0.03 },
      { x: 0.808, y: 0.68, size: 4, phase: 4.2, speed: 0.045 },
      { x: 0.757, y: 0.265, size: 5.5, phase: 0.8, speed: 0.06 }, // Spout tip glint
    ];

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Coordinates in normalized percentages of the background image:
      // Spout: x ~ 0.757, y ~ 0.265
      // Water impact on glass: x ~ 0.757, y ~ 0.535
      // Glass body: x from 0.705 to 0.810, y from 0.535 to 0.935
      const spoutX = width * 0.757;
      const spoutY = height * 0.265;
      const impactX = width * 0.757;
      const impactY = height * 0.535;

      const glassLeft = width * 0.705;
      const glassRight = width * 0.81;
      const glassTop = height * 0.535;
      const glassBottom = height * 0.935;
      const glassWidth = glassRight - glassLeft;

      // -------------------------------------------------------------
      // 1. ANIMATED DOWNWARD WATER JET (Spout to Glass)
      // -------------------------------------------------------------
      const streamTop = spoutY;
      const streamBottom = impactY;
      const streamHeight = streamBottom - streamTop;

      // 1A. Glowing Water Caustic Column Base
      ctx.save();
      const colGrad = ctx.createLinearGradient(spoutX - 8, streamTop, spoutX + 8, streamTop);
      colGrad.addColorStop(0, "rgba(0, 210, 255, 0.08)");
      colGrad.addColorStop(0.3, "rgba(221, 245, 255, 0.45)");
      colGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.85)");
      colGrad.addColorStop(0.7, "rgba(140, 232, 255, 0.55)");
      colGrad.addColorStop(1, "rgba(0, 184, 230, 0.08)");

      ctx.fillStyle = colGrad;
      // Slight oscillating fluid waist
      const waistSway = Math.sin(frame * 0.08) * 1.5;
      ctx.beginPath();
      ctx.moveTo(spoutX - 6, streamTop);
      ctx.quadraticCurveTo(spoutX - 4 + waistSway, streamTop + streamHeight * 0.5, impactX - 7, streamBottom);
      ctx.lineTo(impactX + 7, streamBottom);
      ctx.quadraticCurveTo(spoutX + 4 + waistSway, streamTop + streamHeight * 0.5, spoutX + 6, streamTop);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 1B. Rushing Light Refractions running DOWN the water stream
      ctx.save();
      streamParticles.forEach((p) => {
        p.y += p.vy;
        if (p.y > 1) {
          p.y = 0;
          p.x = (Math.random() - 0.5) * 6;
          p.alpha = Math.random() * 0.6 + 0.3;
        }

        const py = streamTop + p.y * streamHeight;
        const px = spoutX + p.x + Math.sin(frame * 0.1 + p.y * 5) * 0.8;
        const pLen = p.length * streamHeight;

        const pGrad = ctx.createLinearGradient(px, py, px, py + pLen);
        pGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        pGrad.addColorStop(0.5, `rgba(255, 255, 255, ${p.alpha})`);
        pGrad.addColorStop(1, "rgba(140, 232, 255, 0)");

        ctx.strokeStyle = pGrad;
        ctx.lineWidth = p.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, py + pLen);
        ctx.stroke();
      });
      ctx.restore();

      // -------------------------------------------------------------
      // 2. WATER IMPACT, FOAM & DANCING SPLASH DROPLETS
      // -------------------------------------------------------------
      // Spawn new splash droplets periodically at impact point
      if (frame % 3 === 0) {
        splashDrops.push({
          x: impactX + (Math.random() - 0.5) * 12,
          y: impactY + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 2.2,
          vy: -(Math.random() * 3.2 + 1.2),
          r: Math.random() * 1.8 + 0.6,
          alpha: 0.9,
          life: 0,
          maxLife: Math.floor(Math.random() * 22 + 14),
        });
      }

      // Spawn impact ripple rings
      if (frame % 9 === 0) {
        ripples.push({
          x: impactX,
          y: impactY + 2,
          rx: 3,
          ry: 1,
          alpha: 0.75,
          speed: 0.7,
        });
      }

      // Render & Update Ripples
      ctx.save();
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.rx += rip.speed * 1.4;
        rip.ry += rip.speed * 0.45;
        rip.alpha *= 0.94;

        if (rip.alpha < 0.02 || rip.rx > 38) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(221, 245, 255, ${rip.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(rip.x, rip.y, rip.rx, rip.ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // Render & Update Splash Drops
      ctx.save();
      for (let i = splashDrops.length - 1; i >= 0; i--) {
        const drop = splashDrops[i];
        drop.x += drop.vx;
        drop.y += drop.vy;
        drop.vy += 0.22; // Gravity pulling splash back into glass
        drop.life++;
        drop.alpha = 1 - drop.life / drop.maxLife;

        if (drop.life >= drop.maxLife || drop.y > impactY + 8) {
          splashDrops.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${drop.alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 2C. Impact Foam Plume
      ctx.save();
      const foamGrad = ctx.createRadialGradient(impactX, impactY, 2, impactX, impactY, 14);
      foamGrad.addColorStop(0, "rgba(255, 255, 255, 0.75)");
      foamGrad.addColorStop(0.4, "rgba(180, 240, 255, 0.4)");
      foamGrad.addColorStop(1, "rgba(0, 184, 230, 0)");
      ctx.fillStyle = foamGrad;
      ctx.beginPath();
      ctx.ellipse(impactX, impactY, 14, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // -------------------------------------------------------------
      // 3. REALISTIC EFFERVESCENT BUBBLES INSIDE THE GLASS
      // -------------------------------------------------------------
      ctx.save();
      bubbles.forEach((b) => {
        b.y += b.vy;
        b.phase += b.wobbleSpeed;

        // Reset bubble when reaching the top water surface in glass
        if (b.y < 0.54) {
          b.y = Math.random() * 0.35 + 0.58;
          b.phase = Math.random() * Math.PI * 2;
          b.depth = Math.random();
        }

        // Horizontal sinusoidal wobble as bubble rises
        const wobbleX = Math.sin(b.phase) * (b.wobbleAmp * width);
        // Center of glass column with horizontal variance
        const bubbleX = glassLeft + (b.depth * 0.8 + 0.1) * glassWidth + wobbleX;
        const bubbleY = b.y * height;

        // Draw 3D Spherical Translucent Water Bubble with Specular Highlight
        ctx.beginPath();
        ctx.arc(bubbleX, bubbleY, b.r, 0, Math.PI * 2);

        // Spherical radial gradient
        const bubbleGrad = ctx.createRadialGradient(
          bubbleX - b.r * 0.35,
          bubbleY - b.r * 0.35,
          b.r * 0.1,
          bubbleX,
          bubbleY,
          b.r
        );
        bubbleGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        bubbleGrad.addColorStop(0.45, `rgba(180, 240, 255, ${b.alpha * 0.7})`);
        bubbleGrad.addColorStop(0.85, `rgba(0, 184, 230, ${b.alpha * 0.4})`);
        bubbleGrad.addColorStop(1, "rgba(0, 119, 217, 0.1)");

        ctx.fillStyle = bubbleGrad;
        ctx.fill();

        // Delicate outer rim sheen
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
      ctx.restore();

      // -------------------------------------------------------------
      // 4. REFRACTIVE LIQUID CAUSTICS DANCING IN GLASS
      // -------------------------------------------------------------
      ctx.save();
      const causticIntensity = (Math.sin(frame * 0.05) + 1) * 0.5;
      const causticGrad = ctx.createLinearGradient(glassLeft, glassTop, glassRight, glassBottom);
      causticGrad.addColorStop(0, `rgba(0, 210, 255, ${0.04 + causticIntensity * 0.04})`);
      causticGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.03 + causticIntensity * 0.05})`);
      causticGrad.addColorStop(1, `rgba(0, 119, 217, ${0.05 + causticIntensity * 0.03})`);

      ctx.fillStyle = causticGrad;
      ctx.beginPath();
      ctx.moveTo(glassLeft + 4, glassTop + 10);
      ctx.lineTo(glassRight - 4, glassTop + 10);
      ctx.lineTo(glassRight - 10, glassBottom - 8);
      ctx.lineTo(glassLeft + 10, glassBottom - 8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // -------------------------------------------------------------
      // 5. GLISTENING LIGHT STARS (Glints on Glass Rim & Spout)
      // -------------------------------------------------------------
      ctx.save();
      glints.forEach((g) => {
        g.phase += g.speed;
        const shimmer = (Math.sin(g.phase) + 1) * 0.5;
        if (shimmer < 0.1) return;

        const gx = g.x * width;
        const gy = g.y * height;
        const gSize = g.size * (0.6 + shimmer * 0.6);

        // Draw 4-point light star
        ctx.fillStyle = `rgba(255, 255, 255, ${shimmer * 0.9})`;
        ctx.beginPath();
        ctx.arc(gx, gy, gSize * 0.35, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(221, 245, 255, ${shimmer * 0.75})`;
        ctx.lineWidth = 1;
        // Horizontal ray
        ctx.beginPath();
        ctx.moveTo(gx - gSize, gy);
        ctx.lineTo(gx + gSize, gy);
        ctx.stroke();
        // Vertical ray
        ctx.beginPath();
        ctx.moveTo(gx, gy - gSize);
        ctx.lineTo(gx, gy + gSize);
        ctx.stroke();
      });
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
    />
  );
};

