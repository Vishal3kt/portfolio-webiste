import React, { useState, useEffect } from "react";
import "./MouseAura.scss";

const MouseAura = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let animationFrame;

        const handleMouseMove = (event) => {
            animationFrame = requestAnimationFrame(() => {
                setMousePosition({ x: event.clientX, y: event.clientY });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            className="mouse-aura"
            style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
            }}
        ></div>
    );
};

export default MouseAura;
