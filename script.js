const images = ['images/img-001.png', 'images/img-002.png', 'images/img-003.png', 'images/img-004.png', 'images/img-005.png', 'images/img-006.png', 'images/img-007.png', 'images/img-008.png', 'images/img-009.png', 'images/img-010.png', 'images/img-011.png', 'images/img-012.png', 'images/img-013.png', 'images/img-014.jpeg', 'images/img-015.jpeg', 'images/img-016.jpeg', 'images/img-017.jpeg', 'images/img-018.jpeg', 'images/img-019.png', 'images/img-020.gif'];

window.onload = function() {
    const container = document.getElementById('canvas-container');
    console.log('Images found:', images.length);

    if (images.length > 0 && container) {
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'floating-img';
            img.loading = 'eager';
            
            let x, y, z, speed, rotation, driftX, driftY, phase;

            function reset(isInitial) {
                x = (Math.random() - 0.5) * window.innerWidth * 2.0;
                y = (Math.random() - 0.5) * window.innerHeight * 2.0;
                z = isInitial ? (Math.random() * -3000) : -4000; 
                speed = 2 + Math.random() * 3;
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

                let currentX = x + Math.sin(phase) * 100 * driftX;
                let currentY = y + Math.cos(phase * 0.8) * 100 * driftY;

                if (z > 800) {
                    reset(false);
                }

                let opacity = 0;
                if (z > -2500) opacity = (z + 2500) / 1000;
                if (z > 200) opacity = (800 - z) / 600;
                if (opacity > 0.8) opacity = 0.8;

                img.style.opacity = opacity;
                
                // FIXED LINE: String concatenation instead of interpolation
                img.style.transform = 'translate(-50%, -50%) translate3d(' + currentX + 'px, ' + currentY + 'px, ' + z + 'px) rotate(' + (rotation + z/15) + 'deg)';
                
                requestAnimationFrame(animate);
            }
            animate();
        });
    }
};
