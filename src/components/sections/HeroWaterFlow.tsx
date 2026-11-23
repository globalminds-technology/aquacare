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

    // Particle & Wave interfaces
    interface Bubble {
      xNorm: number;
      yNorm: number;
      r: number;
      vy: number;
      wobbleSpeed: number;
      wobbleAmp: number;
      phase: number;
      alpha: number;
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

    interface StreamGlider {
      yNorm: number;
      speed: number;
      width: number;
      length: number;
      strand: number;
      alpha: number;
    }

    // High-speed water flow beads along the stream
    const gliders: StreamGlider[] = Array.from({ length: 30 }, () => ({
      yNorm: Math.random(),
      speed: Math.random() * 0.038 + 0.026,
      width: Math.random() * 2.8 + 1.2,
      length: Math.random() * 0.09 + 0.04,
      strand: Math.floor(Math.random() * 3),
      alpha: Math.random() * 0.65 + 0.35,
    }));

    // Rising effervescent bubbles inside the glass
    const bubbles: Bubble[] = Array.from({ length: 65 }, () => ({
      xNorm: Math.random() * 0.8 + 0.1,
      yNorm: Math.random() * 0.38 + 0.56,
      r: Math.random() * 3.5 + 1.2,
      vy: -(Math.random() * 0.0032 + 0.0016),
      wobbleSpeed: Math.random() * 0.09 + 0.04,
      wobbleAmp: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.75 + 0.25,
    }));

    const splashDrops: SplashDrop[] = [];
    const ripples: Ripple[] = [];

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // -----------------------------------------------------------------------
      // Exact CSS Object-Cover Alignment Math for 2048 x 982 reference image
      // -----------------------------------------------------------------------
      const imgW = 2048;
      const imgH = 982;
      const imgAspect = imgW / imgH;
      const containerAspect = width / height;

      let renderedW = 0;
      let renderedH = 0;
      let offsetX = 0;
      let offsetY = 0;

      if (containerAspect > imgAspect) {
        renderedW = width;
        renderedH = width / imgAspect;
        offsetX = 0;
        offsetY = (height - renderedH) / 2;
      } else {
        renderedH = height;
        renderedW = height * imgAspect;
        // Desktop uses object-center, mobile uses object-right
        if (width >= 1024) {
          offsetX = (width - renderedW) / 2;
        } else {
          offsetX = width - renderedW;
        }
        offsetY = 0;
      }

      // Exact pixel coordinates mapped through object-cover
      const spoutX = offsetX + 0.7568 * renderedW;
      const spoutY = offsetY + 0.2648 * renderedH;
      const impactX = offsetX + 0.7568 * renderedW;
      const impactY = offsetY + 0.5346 * renderedH;
      const glassLeft = offsetX + 0.7031 * renderedW;
      const glassRight = offsetX + 0.8105 * renderedW;
      const glassTop = offsetY + 0.5346 * renderedH;
      const glassBottom = offsetY + 0.9369 * renderedH;
      const glassWidth = glassRight - glassLeft;

      const streamTop = spoutY;
      const streamBottom = impactY;
      const streamHeight = streamBottom - streamTop;

      // Stream half-width scales proportionally with rendered image
      const halfW = Math.max(5.5, renderedW * 0.0052);

      // -----------------------------------------------------------------------
      // 1. DYNAMIC FLOWING WATER STREAM (Exact match to user's attached image)
      //    Zero frozen shapes! Continuous downward flowing helical caustics & jet.
      // -----------------------------------------------------------------------
      const segments = 60;
      const stepY = streamHeight / segments;
      const flowSpeed = time * 0.32;

      const leftEdge: { x: number; y: number }[] = [];
      const rightEdge: { x: number; y: number }[] = [];
      const strand1: { x: number; y: number }[] = [];
      const strand2: { x: number; y: number }[] = [];
      const strand3: { x: number; y: number }[] = [];

      for (let i = 0; i <= segments; i++) {
        const sy = streamTop + i * stepY;
        const progress = i / segments;
        const currentHalfW = halfW * (1.0 - progress * 0.12);

        // Continuous downward helical phase
        const phaseA = sy * 0.065 - flowSpeed;
        const phaseB = phaseA + Math.PI;
        const phaseC = sy * 0.045 - flowSpeed * 1.15 + 1.2;

        const centerOffset = Math.sin(phaseA * 0.4) * 0.6;
        const cx = spoutX + centerOffset;

        leftEdge.push({ x: cx - currentHalfW, y: sy });
        rightEdge.push({ x: cx + currentHalfW, y: sy });

        // Internal twisting liquid caustics (double-helix refraction as in user photo)
        strand1.push({ x: cx + Math.sin(phaseA) * (currentHalfW * 0.65), y: sy });
        strand2.push({ x: cx + Math.sin(phaseB) * (currentHalfW * 0.65), y: sy });
        strand3.push({ x: cx + Math.sin(phaseC) * (currentHalfW * 0.35), y: sy });
      }

      // 1B. Moving Fluid Water Body Fill
      ctx.save();
      const waveOffset = (time * 9) % 45;
      const streamGrad = ctx.createLinearGradient(0, streamTop + waveOffset, 0, streamTop + waveOffset + 45);
      streamGrad.addColorStop(0, "rgba(255, 255, 255, 0.45)");
      streamGrad.addColorStop(0.25, "rgba(180, 240, 255, 0.75)");
      streamGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
      streamGrad.addColorStop(0.75, "rgba(140, 230, 255, 0.65)");
      streamGrad.addColorStop(1, "rgba(255, 255, 255, 0.45)");

      ctx.beginPath();
      ctx.moveTo(leftEdge[0].x, leftEdge[0].y);
      for (let i = 1; i < leftEdge.length; i++) {
        ctx.lineTo(leftEdge[i].x, leftEdge[i].y);
      }
      for (let i = rightEdge.length - 1; i >= 0; i--) {
        ctx.lineTo(rightEdge[i].x, rightEdge[i].y);
      }
      ctx.closePath();

      ctx.fillStyle = "rgba(160, 230, 255, 0.35)";
      ctx.fill();

      ctx.shadowColor = "rgba(0, 210, 255, 0.85)";
      ctx.shadowBlur = 9;
      ctx.fillStyle = streamGrad;
      ctx.globalAlpha = 0.55;
      ctx.fill();
      ctx.restore();

      // 1C. Outer Boundary Specular Light Lines
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(leftEdge[0].x, leftEdge[0].y);
      for (let i = 1; i < leftEdge.length; i++) {
        ctx.lineTo(leftEdge[i].x, leftEdge[i].y);
      }
      ctx.stroke();

      ctx.strokeStyle = "rgba(200, 245, 255, 0.85)";
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(rightEdge[0].x, rightEdge[0].y);
      for (let i = 1; i < rightEdge.length; i++) {
        ctx.lineTo(rightEdge[i].x, rightEdge[i].y);
      }
      ctx.stroke();
      ctx.restore();

      // 1D. Twisting Internal Helical Refraction Strands (Exact Visual from Attached Image!)
      ctx.save();
      // Strand 1: Pure White Helical Cord
      ctx.strokeStyle = "rgba(255, 255, 255, 0.96)";
      ctx.lineWidth = 1.6;
      ctx.shadowColor = "rgba(255, 255, 255, 0.85)";
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.moveTo(strand1[0].x, strand1[0].y);
      for (let i = 1; i < strand1.length; i++) {
        ctx.lineTo(strand1[i].x, strand1[i].y);
      }
      ctx.stroke();

      // Strand 2: Counter-Twisting Cyan Cord
      ctx.strokeStyle = "rgba(190, 245, 255, 0.9)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(strand2[0].x, strand2[0].y);
      for (let i = 1; i < strand2.length; i++) {
        ctx.lineTo(strand2[i].x, strand2[i].y);
      }
      ctx.stroke();

      // Strand 3: Central Glistening Cord
      ctx.strokeStyle = "rgba(255, 255, 255, 0.78)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(strand3[0].x, strand3[0].y);
      for (let i = 1; i < strand3.length; i++) {
        ctx.lineTo(strand3[i].x, strand3[i].y);
      }
      ctx.stroke();
      ctx.restore();

      // 1E. High-Speed Liquid Specular Gliders Rushing Down the Stream
      ctx.save();
      gliders.forEach((g) => {
        g.yNorm += g.speed;
        if (g.yNorm > 1) {
          g.yNorm = 0;
          g.speed = Math.random() * 0.038 + 0.026;
          g.alpha = Math.random() * 0.65 + 0.35;
          g.strand = Math.floor(Math.random() * 3);
        }

        const idx = Math.min(segments, Math.floor(g.yNorm * segments));
        const refStrand = g.strand === 0 ? strand1 : g.strand === 1 ? strand2 : strand3;
        const pt = refStrand[idx];

        const glLen = g.length * streamHeight;
        const glGrad = ctx.createLinearGradient(pt.x, pt.y, pt.x, pt.y + glLen);
        glGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        glGrad.addColorStop(0.5, `rgba(255, 255, 255, ${g.alpha})`);
        glGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = glGrad;
        ctx.lineWidth = g.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.lineTo(pt.x, pt.y + glLen);
        ctx.stroke();
      });
      ctx.restore();

      // 1F. Glowing Nozzle Exit Aperture
      ctx.save();
      const exitGrad = ctx.createRadialGradient(spoutX, spoutY + 1, 1, spoutX, spoutY + 1, halfW * 1.5);
      exitGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      exitGrad.addColorStop(0.5, "rgba(140, 230, 255, 0.7)");
      exitGrad.addColorStop(1, "rgba(0, 184, 230, 0)");
      ctx.fillStyle = exitGrad;
      ctx.beginPath();
      ctx.ellipse(spoutX, spoutY + 1, halfW * 1.4, 3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // -----------------------------------------------------------------------
      // 2. DYNAMIC IMPACT SPLASHES, EXPANDING RIPPLES & AERATION FOAM
      // -----------------------------------------------------------------------
      if (time % 3 === 0) {
        splashDrops.push({
          x: impactX + (Math.random() - 0.5) * 10,
          y: impactY + (Math.random() - 0.5) * 3,
          vx: (Math.random() - 0.5) * 2.2,
          vy: -(Math.random() * 3.5 + 1.2),
          r: Math.random() * 1.6 + 0.6,
          alpha: 0.95,
          life: 0,
          maxLife: Math.floor(Math.random() * 20 + 12),
        });
      }

      if (time % 8 === 0) {
        ripples.push({
          x: impactX,
          y: impactY + 1.5,
          rx: 2.5,
          ry: 0.8,
          alpha: 0.8,
          speed: 0.75,
        });
      }

      // Render Ripples
      ctx.save();
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.rx += rip.speed * 1.5;
        rip.ry += rip.speed * 0.45;
        rip.alpha *= 0.93;

        if (rip.alpha < 0.02 || rip.rx > 36) {
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

      // Render Splash Drops
      ctx.save();
      for (let i = splashDrops.length - 1; i >= 0; i--) {
        const drop = splashDrops[i];
        drop.x += drop.vx;
        drop.y += drop.vy;
        drop.vy += 0.22;
        drop.life++;
        drop.alpha = 1 - drop.life / drop.maxLife;

        if (drop.life >= drop.maxLife || drop.y > impactY + 6) {
          splashDrops.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${drop.alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Impact Foam Plume
      ctx.save();
      const foamGrad = ctx.createRadialGradient(impactX, impactY, 1, impactX, impactY, 12);
      foamGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
      foamGrad.addColorStop(0.4, "rgba(180, 245, 255, 0.45)");
      foamGrad.addColorStop(1, "rgba(0, 184, 230, 0)");
      ctx.fillStyle = foamGrad;
      ctx.beginPath();
      ctx.ellipse(impactX, impactY, 12, 4.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // -----------------------------------------------------------------------
      // 3. REALISTIC 3D EFFERVESCENT BUBBLES RISING INSIDE THE GLASS
      // -----------------------------------------------------------------------
      ctx.save();
      bubbles.forEach((b) => {
        b.yNorm += b.vy;
        b.phase += b.wobbleSpeed;

        if (b.yNorm < 0.538) {
          b.yNorm = Math.random() * 0.38 + 0.56;
          b.phase = Math.random() * Math.PI * 2;
          b.xNorm = Math.random() * 0.8 + 0.1;
        }

        const wobbleX = Math.sin(b.phase) * (b.wobbleAmp * renderedW);
        const bubbleX = glassLeft + b.xNorm * glassWidth + wobbleX;
        const bubbleY = offsetY + b.yNorm * renderedH;

        ctx.beginPath();
        ctx.arc(bubbleX, bubbleY, b.r, 0, Math.PI * 2);

        // 3D Spherical Glint
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

        ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha * 0.55})`;
        ctx.lineWidth = 0.5;
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
