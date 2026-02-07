const images = ['images/img-001.png', 'images/img-002.png', 'images/img-003.png', 'images/img-004.png', 'images/img-005.png', 'images/img-006.png', 'images/img-007.png', 'images/img-008.png', 'images/img-009.png', 'images/img-010.png', 'images/img-011.png', 'images/img-012.png', 'images/img-013.png', 'images/img-014.jpeg', 'images/img-015.jpeg', 'images/img-016.jpeg', 'images/img-017.jpeg', 'images/img-018.jpeg', 'images/img-019.png', 'images/img-020.gif'];

function initChaos() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'floating-img';
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let dx = (Math.random() - 0.5) * 1.5;
        let dy = (Math.random() - 0.5) * 1.5;
        let rot = Math.random() * 360;
        let rotSpeed = (Math.random() - 0.5) * 0.5;

        img.style.position = 'absolute';
        img.style.width = '300px'; // Didesnės nuotraukos
        img.style.opacity = '0.6';
        
        container.appendChild(img);

        function animate() {
            x += dx;
            y += dy;
            rot += rotSpeed;

            // Atšokimas nuo sienų
            if (x < -100 || x > window.innerWidth - 200) dx *= -1;
            if (y < -100 || y > window.innerHeight - 200) dy *= -1;

            img.style.left = x + 'px';
            img.style.top = y + 'px';
            img.style.transform = 'rotate(' + rot + 'deg)';
            
            requestAnimationFrame(animate);
        }
        animate();
    });
}

// Paleidžiame iškart, bet užtikriname, kad DOM yra
if (document.readyState === 'complete') {
    initChaos();
} else {
    window.addEventListener('load', initChaos);
}
