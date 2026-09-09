/* ==========================================================================
   INTERACTIVE ELECTRICAL SCHEMATIC VISUALIZER (CANVAS ANIMATION)
   ========================================================================== */

(function () {
    const canvas = document.getElementById('circuitCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    function resizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit traces & nodes definition
    const traces = [
        // Left side traces entering IC chip
        { points: [{ x: 30, y: 50 }, { x: 120, y: 50 }, { x: 160, y: 90 }], speed: 1.2, progress: 0 },
        { points: [{ x: 20, y: 90 }, { x: 140, y: 90 }], speed: 1.5, progress: 0.3 },
        { points: [{ x: 40, y: 130 }, { x: 100, y: 130 }, { x: 150, y: 110 }], speed: 1.0, progress: 0.6 },
        { points: [{ x: 30, y: 170 }, { x: 140, y: 170 }], speed: 1.4, progress: 0.2 },
        { points: [{ x: 50, y: 210 }, { x: 120, y: 210 }, { x: 160, y: 170 }], speed: 1.1, progress: 0.8 },

        // Right side traces leaving IC chip
        { points: [{ x: 300, y: 90 }, { x: 360, y: 50 }, { x: 430, y: 50 }], speed: 1.3, progress: 0.1 },
        { points: [{ x: 320, y: 130 }, { x: 440, y: 130 }], speed: 1.6, progress: 0.5 },
        { points: [{ x: 300, y: 170 }, { x: 350, y: 210 }, { x: 420, y: 210 }], speed: 1.2, progress: 0.7 }
    ];

    // Node test points
    const nodes = [
        { x: 30, y: 50, label: "TP-1 (12V)" },
        { x: 20, y: 90, label: "TP-2 (SCADA)" },
        { x: 40, y: 130, label: "TP-3 (PWM)" },
        { x: 50, y: 210, label: "TP-4 (GND)" },
        { x: 430, y: 50, label: "TP-5 (4-20mA)" },
        { x: 440, y: 130, label: "TP-6 (CT/VT)" },
        { x: 420, y: 210, label: "TP-7 (RS485)" }
    ];

    // Draw blueprint background grid inside viewport
    function drawGrid() {
        ctx.strokeStyle = "rgba(0, 240, 255, 0.07)";
        ctx.lineWidth = 1;

        const step = 20;
        for (let x = 0; x < canvas.width; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += step) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
    }

    // Main animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();

        // Render traces
        traces.forEach(trace => {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
            ctx.lineWidth = 1.5;

            ctx.moveTo(trace.points[0].x, trace.points[0].y);
            for (let i = 1; i < trace.points.length; i++) {
                ctx.lineTo(trace.points[i].x, trace.points[i].y);
            }
            ctx.stroke();

            // Update signal pulse progress
            trace.progress += trace.speed * 0.008;
            if (trace.progress > 1) trace.progress = 0;

            // Draw glowing signal pulse along path
            const p1 = trace.points[0];
            const p2 = trace.points[trace.points.length - 1];
            const currentX = p1.x + (p2.x - p1.x) * trace.progress;
            const currentY = p1.y + (p2.y - p1.y) * trace.progress;

            ctx.beginPath();
            ctx.arc(currentX, currentY, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = "#00f0ff";
            ctx.shadowColor = "#00f0ff";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0; // Reset
        });

        // Render test node points
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "#090e18";
            ctx.strokeStyle = "#00f0ff";
            ctx.lineWidth = 2;
            ctx.fill();
            ctx.stroke();
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
})();
