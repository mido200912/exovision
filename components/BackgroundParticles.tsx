import React, { useRef, useEffect } from 'react';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    // نجوم
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5,
      o: Math.random(),
    }));

    // كواكب
    const planets = [
      { r: 40, dist: 0, color: "#ffdd00" }, // Sun
      { r: 6, dist: 70, color: "#d4b483" },
      { r: 9, dist: 110, color: "#c4a484" },
      { r: 10, dist: 150, color: "#4f93c0" },
      { r: 8, dist: 190, color: "#d94b28" },
      { r: 14, dist: 240, color: "#d4b16a", ring: true },
      { r: 12, dist: 290, color: "#b4c7e7" },
      { r: 11, dist: 330, color: "#1f75fe" },
    ];

    let angle = 0;

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.fillRect(0, 0, w, h);

      // النجوم
      stars.forEach((s) => {
        s.o += (Math.random() - 0.5) * 0.05;
        if (s.o < 0.2) s.o = 0.2;
        if (s.o > 1) s.o = 1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.fill();
      });

      // الكواكب
      const cx = w / 2,
        cy = h / 2;
      angle += 0.005;

      planets.forEach((p, i) => {
        const x = cx + Math.cos(angle * (i + 1) / 2) * p.dist;
        const y = cy + Math.sin(angle * (i + 1) / 2) * p.dist;

        // المدار
        ctx.beginPath();
        ctx.arc(cx, cy, p.dist, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.stroke();

        // الكوكب
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // حلقات زحل
        if (p.ring) {
          ctx.strokeStyle = "rgba(200,200,200,0.5)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(x, y, p.r + 6, p.r + 2, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // المذنب
      const cometX = (Date.now() / 40) % w;
      const cometY = h / 3 + Math.sin(Date.now() / 1000) * 100;
      const gradient = ctx.createLinearGradient(cometX - 100, cometY, cometX, cometY);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(1, "white");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cometX - 100, cometY);
      ctx.lineTo(cometX, cometY);
      ctx.stroke();

      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default SpaceBackground;
