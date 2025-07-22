import React from "react";
import "./FloatingBubblesBackground.css";



const PARTICLES = Array.from({ length: 60 });

export default function GoldenParticles() {
    return (
        <div className="golden-particles-bg">
            {PARTICLES.map((_, i) => {
                const size = Math.random() * 8 + 4;
                const left = Math.random() * 100;
                const delay = Math.random() * 10;
                const duration = 8 + Math.random() * 8;

                const style = {
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                };

                return <div key={i} className="golden-particle" style={style}></div>;
            })}
        </div>
    );
}
