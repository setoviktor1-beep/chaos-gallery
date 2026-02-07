const images = ['images/ChatGPT Image Feb 6, 2026, 10_55_15 AM.png', 'images/Gemini_Generated_Image_faxo2xfaxo2xfaxo.png', 'images/Gemini_Generated_Image_o8c0too8c0too8c0.png', 'images/Gemini_Generated_Image_p4tjbyp4tjbyp4tj (1).png', 'images/Gemini_Generated_Image_p4tjbyp4tjbyp4tj.png', 'images/Gemini_Generated_Image_rpo61arpo61arpo6.png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (1).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (2).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (3).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi.png', 'images/Gemini_Generated_Image_xwgmlcxwgmlcxwgm.png', 'images/Urban beauty in cinematic portraits.png', 'images/Whisk_728f68867ee6041a41a4a4bd4b43d4c6eg.png', 'images/Whisk_80ed6da6264229dac9a492db90751a83dr.jpeg', 'images/Whisk_89a5e3a418e948f979942311906426dedr (1).jpeg', 'images/Whisk_89a5e3a418e948f979942311906426dedr.jpeg', 'images/Whisk_9bf00ff958aafe0a139496e79b5c98c0dr (1).jpeg', 'images/Whisk_9bf00ff958aafe0a139496e79b5c98c0dr.jpeg', 'images/Whisk_fba09153ae516e1ab5a436e57d5d7cc1eg.png', 'images/Whisk_yjzijzm0mjm5etnw0sywutytcjykrtlyejmx0iy.gif'];
const container = document.getElementById('canvas-container');

if (images.length > 0) {
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'floating-img';
        
        let x = Math.random() * (window.innerWidth - 250);
        let y = Math.random() * (window.innerHeight - 250);
        let dx = (Math.random() - 0.5) * 1.5;
        let dy = (Math.random() - 0.5) * 1.5;
        let rotation = Math.random() * 360;
        
        img.style.position = 'absolute';
        img.style.left = x + 'px';
        img.style.top = y + 'px';
        img.style.transform = 'rotate(' + rotation + 'deg)';
        
        container.appendChild(img);

        function animate() {
            x += dx;
            y += dy;
            
            if (x < -100 || x > window.innerWidth - 150) dx *= -1;
            if (y < -100 || y > window.innerHeight - 150) dy *= -1;
            
            img.style.left = x + 'px';
            img.style.top = y + 'px';
            
            requestAnimationFrame(animate);
        }
        animate();
    });
}

document.addEventListener('mousemove', (e) => {
    const floaters = document.querySelectorAll('.floating-img');
    floaters.forEach((img, i) => {
        const speed = (i % 5 + 1) * 0.02;
        const xMove = (e.clientX - window.innerWidth / 2) * speed;
        const yMove = (e.clientY - window.innerHeight / 2) * speed;
        img.style.transform += ' translate(' + xMove + 'px, ' + yMove + 'px)';
    });
});
