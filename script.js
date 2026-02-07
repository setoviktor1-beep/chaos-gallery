const images = ['images/img-001.png', 'images/img-002.png', 'images/img-003.png', 'images/img-004.png', 'images/img-005.png', 'images/img-006.png', 'images/img-007.png', 'images/img-008.png', 'images/img-009.png', 'images/img-010.png', 'images/img-011.png', 'images/img-012.png', 'images/img-013.png', 'images/img-014.jpeg', 'images/img-015.jpeg', 'images/img-016.jpeg', 'images/img-017.jpeg', 'images/img-018.jpeg', 'images/img-019.png', 'images/img-020.gif'];

function initChaos() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'floating-img';
        
        let x, y, z, speed, rotation, driftX, driftY, phase;

        function reset(isInitial) {
            x = (Math.random() - 0.5) * window.innerWidth * 2.5;
            y = (Math.random() - 0.5) * window.innerHeight * 2.5;
            z = isInitial ? (Math.random() * -4000) : -4000;
            speed = 2 + Math.random() * 4;
            rotation = Math.random() * 360;
            driftX = (Math.random() - 0.5) * 2;
            driftY = (Math.random() - 0.5) * 2;
            phase = Math.random() * Math.PI * 2;
        }

        reset(true);
        container.appendChild(img);

        function animate() {
            z += speed;
            phase += 0.005;

            let curX = x + Math.sin(phase) * 150 * driftX;
            let curY = y + Math.cos(phase * 0.8) * 150 * driftY;

            if (z > 1000) reset(false);

            let op = 0;
            if (z > -3000) op = (z + 3000) / 1500;
            if (z > 400) op = (1000 - z) / 600;
            if (op > 0.8) op = 0.8;

            img.style.opacity = op;
            img.style.transform = `translate(-50%, -50%) translate3d(${curX}px, ${curY}px, ${z}px) rotate(${rotation + z/10}deg)`;
            
            requestAnimationFrame(animate);
        }
        animate();
    });
}

// Paleidžiame iškart
initChaos();