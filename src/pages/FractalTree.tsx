
import React, { useRef, useEffect } from 'react';

const FractalTree: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function drawTree(x1: number, y1: number, angle: number, depth: number, branchWidth: number) {
            if (depth === 0) return;

            const length = depth * 12;
            const x2 = x1 + (Math.cos(angle * Math.PI / 180) * length);
            const y2 = y1 + (Math.sin(angle * Math.PI / 180) * length);
            
            if (!ctx) return;
            ctx.lineWidth = branchWidth;
            ctx.strokeStyle = 'white';

            let progress = 0;
            function animateBranch() {
                if (progress >= 1) {
                    drawTree(x2, y2, angle - 20, depth - 1, branchWidth * 0.8);
                    drawTree(x2, y2, angle + 20, depth - 1, branchWidth * 0.8);
                    return;
                }
                
                const currentX = x1 + (x2 - x1) * progress;
                const currentY = y1 + (y2 - y1) * progress;

                if (!ctx) return;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(currentX, currentY);
                ctx.stroke();

                progress += 0.1; // Controls the speed of the branch growing
                requestAnimationFrame(animateBranch);
            }

            animateBranch();
        }

        drawTree(canvas.width / 2, canvas.height, -90, 10, 10);
    }, []);

    return <canvas ref={canvasRef} style={{ background: '#000' }} />;
};

export default FractalTree;
