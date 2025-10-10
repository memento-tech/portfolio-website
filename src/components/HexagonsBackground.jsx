import React, { useRef, useEffect } from "react";

const HexagonsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawHexagon = (x, y, radius, opacity) => {
      const angleStep = (Math.PI * 2) / 6;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = i * angleStep;
        const dx = x + radius * Math.cos(angle);
        const dy = y + radius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(dx, dy);
        } else {
          ctx.lineTo(dx, dy);
        }
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    };

    class Hexagon {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = Math.random() * 25 + 1;
        this.opacity = Math.random() * 0.6;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        drawHexagon(this.x, this.y, this.radius, this.opacity);
      }
    }

    const hexagons = [];
    const numHexagons = 40;
    for (let i = 0; i < numHexagons; i++) {
      hexagons.push(new Hexagon());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hexagons.forEach((hexagon) => {
        hexagon.update();
        hexagon.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#121212",
      }}
    />
  );
};

export default HexagonsBackground;
