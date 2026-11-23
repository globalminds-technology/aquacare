"use client";

import React, { useRef, useEffect } from "react";

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Aeration bubbles and floating water droplets
    interface Droplet {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      alpha: number;
      phase: number;
    }

    const droplets: Droplet[] = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4 + 1.5,
      speedY: -(Math.random() * 1.2 + 0.4),
      speedX: (Math.random() - 0.5) * 0.6,
      alpha: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    let step = 0;

    const render = () => {
      step += 0.025;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw flowing animated water curve behind / around product
      ctx.save();
      const waveGrad = ctx.createLinearGradient(0, height * 0.4, width, height * 0.9);
      waveGrad.addColorStop(0, "rgba(0, 184, 230, 0.15)");
      waveGrad.addColorStop(0.5, "rgba(0, 119, 217, 0.2)");
      waveGrad.addColorStop(1, "rgba(221, 245, 255, 0.05)");

      ctx.fillStyle = waveGrad;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.6 + Math.sin(step) * 15);
      for (let x = 0; x <= width; x += 30) {
        const y = height * 0.65 + Math.sin(x * 0.008 + step) * 20 + Math.cos(x * 0.005 - step) * 15;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 2. Draw rising aeration water bubbles
      droplets.forEach((d) => {
        d.y += d.speedY;
        d.x += Math.sin(d.phase + step) * 0.5 + d.speedX;
        if (d.y < 0) {
          d.y = height + 10;
          d.x = Math.random() * width;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        const radGrad = ctx.createRadialGradient(
          d.x - d.radius * 0.3,
          d.y - d.radius * 0.3,
          d.radius * 0.1,
          d.x,
          d.y,
          d.radius
        );
        radGrad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        radGrad.addColorStop(0.6, `rgba(0, 184, 230, ${d.alpha})`);
        radGrad.addColorStop(1, "rgba(0, 119, 217, 0.05)");
        ctx.fillStyle = radGrad;
        ctx.fill();
        ctx.restore();
      });

      // 3. Central ambient light spotlight behind purifier
      ctx.save();
      const spotGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        20,
        width * 0.5,
        height * 0.45,
        width * 0.55
      );
      spotGrad.addColorStop(0, "rgba(0, 184, 230, 0.25)");
      spotGrad.addColorStop(0.5, "rgba(221, 245, 255, 0.15)");
      spotGrad.addColorStop(1, "rgba(247, 252, 255, 0)");
      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

