/**
 * Aqua Care - Interactive Liquid Water & Brands Navigation Engine
 * Real-time fluid ripple physics, underwater bubbles, automatic acoustics,
 * and seamless navigation between clean Hero Water and Brands Showcase.
 */

class WaterEngine {
  constructor() {
    this.canvas = document.getElementById('water-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.universe = document.querySelector('.water-universe');
    this.brandsView = document.getElementById('brands-showcase-view');
    
    // Wave ripple particles / rings system
    this.ripples = [];
    this.maxRipples = 45;
    
    // Mouse state
    this.lastMouseX = null;
    this.lastMouseY = null;
    
    // Audio engine state (ENABLED BY DEFAULT)
    this.audioInitialized = false;
    this.audioCtx = null;
    this.ambientStreamGain = null;
    
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Mouse & Touch interaction
    this.setupInteractions();

    // Setup Auto Raindrops
    this.setupRaindrops();

    // Setup 3D Rising Air Bubbles
    this.setupBubbles();

    // Setup Navbar Brands Navigation
    this.setupNavbarBrandsTrigger();

    // Initial welcoming splash
    setTimeout(() => {
      this.addDrop(window.innerWidth * 0.5, window.innerHeight * 0.45, 28, 0.9);
      this.addDrop(window.innerWidth * 0.7, window.innerHeight * 0.6, 20, 0.7);
    }, 400);

    // Animation loop
    requestAnimationFrame(() => this.renderLoop());
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  // ----------------------------------------------------------------
  // Audio Engine: Ambient Water Stream + Realistic Droplets
  // Enabled by default on first interaction (no option/prompt asked)
  // ----------------------------------------------------------------
  initAudio() {
    if (this.audioInitialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.startAmbientWaterStream();
      this.audioInitialized = true;
    } catch (e) {
      console.warn('Audio auto-init note:', e);
    }
  }

  startAmbientWaterStream() {
    if (!this.audioCtx) return;

    const sampleRate = this.audioCtx.sampleRate;
    const bufferSize = sampleRate * 3;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const data = noiseBuffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.025 * white) / 1.025;
      data[i] = lastOut * 3.5;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 480;
    filter.Q.value = 1.4;

    const lfo = this.audioCtx.createOscillator();
    const lfoGain = this.audioCtx.createGain();
    lfo.frequency.value = 0.35;
    lfoGain.gain.value = 140;
    lfo.connect(filter.frequency);
    lfo.start();

    this.ambientStreamGain = this.audioCtx.createGain();
    this.ambientStreamGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    this.ambientStreamGain.gain.exponentialRampToValueAtTime(0.08, this.audioCtx.currentTime + 1.5);

    noise.connect(filter);
    filter.connect(this.ambientStreamGain);
    this.ambientStreamGain.connect(this.audioCtx.destination);

    noise.start();
  }

  playWaterDropSound(intensity = 1.0) {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      const startFreq = 650 + Math.random() * 320;
      const endFreq = 230 + Math.random() * 80;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.11);

      const volume = Math.min(0.18, 0.05 + intensity * 0.1);
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  // ----------------------------------------------------------------
  // Ripple Physics & Visual Caustics Engine
  // ----------------------------------------------------------------
  addDrop(x, y, initialRadius = 15, intensity = 0.8) {
    this.ripples.push({
      x,
      y,
      radius: initialRadius,
      maxRadius: 130 + Math.random() * 80,
      opacity: intensity,
      speed: 1.8 + Math.random() * 1.2,
      lineWidth: 2.5 + Math.random() * 1.5,
      aspect: 0.55
    });

    setTimeout(() => {
      this.ripples.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 6,
        radius: initialRadius * 0.5,
        maxRadius: 95 + Math.random() * 60,
        opacity: intensity * 0.7,
        speed: 1.5 + Math.random() * 0.8,
        lineWidth: 1.8,
        aspect: 0.55
      });
    }, 120);

    if (this.ripples.length > this.maxRipples) {
      this.ripples.shift();
    }

    this.playWaterDropSound(intensity);
  }

  setupInteractions() {
    const handleMove = (x, y) => {
      this.initAudio();

      if (this.lastMouseX !== null) {
        const dx = x - this.lastMouseX;
        const dy = y - this.lastMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 22) {
          const intensity = Math.min(dist / 80, 0.75);
          this.addDrop(x, y, 8, intensity);
          this.lastMouseX = x;
          this.lastMouseY = y;
        }
      } else {
        this.lastMouseX = x;
        this.lastMouseY = y;
      }
    };

    window.addEventListener('mousemove', (e) => {
      handleMove(e.clientX, e.clientY);
    });

    window.addEventListener('mousedown', (e) => {
      this.initAudio();
      this.addDrop(e.clientX, e.clientY, 24, 1.0);
    });

    window.addEventListener('touchstart', (e) => {
      this.initAudio();
      if (e.touches.length > 0) {
        const t = e.touches[0];
        this.addDrop(t.clientX, t.clientY, 24, 1.0);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        handleMove(t.clientX, t.clientY);
      }
    }, { passive: true });
  }

  setupRaindrops() {
    setInterval(() => {
      const rx = Math.random() * this.width;
      const ry = Math.random() * this.height;
      const intensity = 0.55 + Math.random() * 0.4;
      this.addDrop(rx, ry, 12, intensity);
    }, 2200);
  }

  // ----------------------------------------------------------------
  // 3D Air Bubbles System
  // ----------------------------------------------------------------
  setupBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;

    for (let i = 0; i < 22; i++) {
      this.createSingleBubble(container);
    }
  }

  createSingleBubble(container) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = 12 + Math.random() * 26;
    let posX = Math.random() * window.innerWidth;
    let posY = window.innerHeight + Math.random() * 150;
    const speed = 0.9 + Math.random() * 1.4;
    const wobbleSpeed = 0.015 + Math.random() * 0.02;
    const wobbleAmp = 12 + Math.random() * 22;
    let wobbleOffset = Math.random() * 100;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${posX}px`;
    bubble.style.top = `${posY}px`;

    container.appendChild(bubble);

    const popBubble = () => {
      this.initAudio();
      bubble.classList.add('pop');
      this.addDrop(posX + size / 2, posY + size / 2, size * 0.6, 0.85);
      setTimeout(() => {
        bubble.remove();
        this.createSingleBubble(container);
      }, 220);
    };

    bubble.addEventListener('click', popBubble);
    bubble.addEventListener('mouseenter', () => {
      if (Math.random() > 0.35) popBubble();
    });

    const animateBubble = () => {
      posY -= speed;
      wobbleOffset += wobbleSpeed;
      const currentX = posX + Math.sin(wobbleOffset) * wobbleAmp;

      bubble.style.top = `${posY}px`;
      bubble.style.left = `${currentX}px`;

      if (posY < -50) {
        bubble.remove();
        this.createSingleBubble(container);
      } else {
        requestAnimationFrame(animateBubble);
      }
    };

    requestAnimationFrame(animateBubble);
  }

  // ----------------------------------------------------------------
  // Real-Time Canvas Wave Rendering
  // ----------------------------------------------------------------
  renderLoop() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.radius += r.speed;
      r.opacity *= 0.965;

      if (r.opacity < 0.01 || r.radius > r.maxRadius) {
        this.ripples.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.ellipse(r.x, r.y, r.radius, r.radius * r.aspect, 0, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(180, 240, 255, ${r.opacity * 0.75})`;
      this.ctx.lineWidth = r.lineWidth;
      this.ctx.shadowColor = 'rgba(0, 210, 255, 0.9)';
      this.ctx.shadowBlur = 14;
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.ellipse(r.x, r.y, r.radius * 1.08, r.radius * 1.08 * r.aspect, 0, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(0, 210, 255, ${r.opacity * 0.4})`;
      this.ctx.lineWidth = r.lineWidth * 1.6;
      this.ctx.shadowBlur = 8;
      this.ctx.stroke();

      if (r.radius < 25) {
        this.ctx.beginPath();
        this.ctx.arc(r.x, r.y, Math.max(1, 4 - r.radius * 0.15), 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${r.opacity})`;
        this.ctx.shadowColor = '#ffffff';
        this.ctx.shadowBlur = 10;
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.renderLoop());
  }

  // ----------------------------------------------------------------
  // Navbar Brands Trigger & View Toggle
  // ----------------------------------------------------------------
  setupNavbarBrandsTrigger() {
    const brandsNavBtn = document.getElementById('nav-hotspot-brands');
    const closeBrandsBtn = document.getElementById('btn-close-brands');
    const brandsBackHotspot = document.getElementById('btn-brands-back');

    const showBrands = (e) => {
      if (e) {
        e.preventDefault();
        this.addDrop(e.clientX, e.clientY, 35, 1.0);
      }
      this.initAudio();
      this.universe.classList.add('brands-active');
      this.brandsView.classList.add('active');
    };

    const hideBrands = (e) => {
      if (e) {
        e.preventDefault();
        this.addDrop(e.clientX, e.clientY, 25, 0.85);
      }
      this.universe.classList.remove('brands-active');
      this.brandsView.classList.remove('active');
    };

    if (brandsNavBtn) {
      brandsNavBtn.addEventListener('click', showBrands);
    }

    if (closeBrandsBtn) {
      closeBrandsBtn.addEventListener('click', hideBrands);
    }

    if (brandsBackHotspot) {
      brandsBackHotspot.addEventListener('click', hideBrands);
    }

    // Carousel buttons on brands section
    const prevBtn = document.getElementById('btn-brands-prev');
    const nextBtn = document.getElementById('btn-brands-next');
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        this.addDrop(e.clientX, e.clientY, 25, 0.9);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        this.addDrop(e.clientX, e.clientY, 25, 0.9);
      });
    }

    // Escape key to exit brands view
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        hideBrands();
      }
    });
  }
}

// Instantiate on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  window.aquaWaterEngine = new WaterEngine();
});
