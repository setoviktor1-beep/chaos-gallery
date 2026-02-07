const images = ['images/ChatGPT Image Feb 6, 2026, 10_55_15 AM.png', 'images/Gemini_Generated_Image_faxo2xfaxo2xfaxo.png', 'images/Gemini_Generated_Image_o8c0too8c0too8c0.png', 'images/Gemini_Generated_Image_p4tjbyp4tjbyp4tj (1).png', 'images/Gemini_Generated_Image_p4tjbyp4tjbyp4tj.png', 'images/Gemini_Generated_Image_rpo61arpo61arpo6.png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (1).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (2).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (3).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi.png', 'images/Gemini_Generated_Image_xwgmlcxwgmlcxwgm.png', 'images/Urban beauty in cinematic portraits.png', 'images/Whisk_728f68867ee6041a41a4a4bd4b43d4c6eg.png', 'images/Whisk_80ed6da6264229dac9a492db90751a83dr.jpeg', 'images/Whisk_89a5e3a418e948f979942311906426dedr (1).jpeg', 'images/Whisk_89a5e3a418e948f979942311906426dedr.jpeg', 'images/Whisk_9bf00ff958aafe0a139496e79b5c98c0dr (1).jpeg', 'images/Whisk_9bf00ff958aafe0a139496e79b5c98c0dr.jpeg', 'images/Whisk_fba09153ae516e1ab5a436e57d5d7cc1eg.png', 'images/Whisk_yjzijzm0mjm5etnw0sywutytcjykrtlyejmx0iy.gif'];
const container = document.getElementById('canvas-container');

if (images.length > 0 && container) {
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'floating-img';
        img.loading = 'lazy'; // Optimizacija
        
        // Saugios ribos
        const maxW = window.innerWidth || 1000;
        const maxH = window.innerHeight || 1000;

        let x = Math.random() * maxW;
        let y = Math.random() * maxH;
        let scale = 0.5 + Math.random();
        let speed = 0.002 + Math.random() * 0.005;
        let direction = Math.random() > 0.5 ? 1 : -1;
        
        img.style.left = x + 'px';
        img.style.top = y + 'px';
        img.style.transform = 'scale(' + scale + ')';
        
        // Error handling: jei nuotrauka nerasta, tiesiog jos nerodyti (be X ikoneles)
        img.onerror = function() { this.style.display = 'none'; };
        img.onload = function() { this.style.opacity = 1; }; // Rodyti tik kai užsikrauna

        container.appendChild(img);

        function animate() {
            scale += speed * direction;
            
            // Švelnus pulsavimas
            if (scale > 1.5) direction = -1;
            if (scale < 0.5) direction = 1;
            
            img.style.transform = 'scale(' + scale + ')';
            
            // Kad neuždengtu teksto visiškai
            img.style.opacity = scale > 1.2 ? 0.4 : 0.8; 
            
            requestAnimationFrame(animate);
        }
        animate();
    });
}
