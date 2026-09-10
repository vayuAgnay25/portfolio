import { useEffect, useRef } from "react";
import "./CursorInk.css";

const NUM_PARTS = 20;

export default function CursorTrail() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const trail = [];

    let mouseX = 0;
    let mouseY = 0;

    // Create circles
    for (let i = 0; i < NUM_PARTS; i++) {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      circle.setAttribute("cx", "0");
      circle.setAttribute("cy", "0");
      circle.setAttribute("r", "6");
      circle.setAttribute("fill", "black");
      circle.setAttribute("opacity", "0.8");

      svg.appendChild(circle);

      trail.push({
        elem: circle,
        x: 0,
        y: 0,
        angle: 0,
      });
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      let prevX = mouseX;
      let prevY = mouseY;

      trail.forEach((part, index) => {
        part.x += (prevX - part.x) * 0.2;
        part.y += (prevY - part.y) * 0.2;

        const dx = prevX - part.x;
        const dy = prevY - part.y;

        part.angle = Math.atan2(dy, dx) * (180 / Math.PI);

        part.elem.setAttribute(
          "transform",
          `
            translate(${part.x} ${part.y})
            rotate(${part.angle})
            scale(${1 - index / NUM_PARTS})
          `
        );

        prevX = part.x;
        prevY = part.y;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      id="cursorTrail"
      className="cursor-trail"
    />
  );
}