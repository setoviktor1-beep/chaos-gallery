const images = ['images/ChatGPT Image Feb 6, 2026, 10_55_15 AM.png', 'images/Gemini_Generated_Image_faxo2xfaxo2xfaxo.png', 'images/Gemini_Generated_Image_o8c0too8c0too8c0.png', 'images/Gemini_Generated_Image_p4tjbyp4tjbyp4tj (1).png', 'images/Gemini_Generated_Image_p4tjbyp4tjbyp4tj.png', 'images/Gemini_Generated_Image_rpo61arpo61arpo6.png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (1).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (2).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi (3).png', 'images/Gemini_Generated_Image_uhgiupuhgiupuhgi.png', 'images/Gemini_Generated_Image_xwgmlcxwgmlcxwgm.png', 'images/Urban beauty in cinematic portraits.png', 'images/Whisk_728f68867ee6041a41a4a4bd4b43d4c6eg.png', 'images/Whisk_80ed6da6264229dac9a492db90751a83dr.jpeg', 'images/Whisk_89a5e3a418e948f979942311906426dedr (1).jpeg', 'images/Whisk_89a5e3a418e948f979942311906426dedr.jpeg', 'images/Whisk_9bf00ff958aafe0a139496e79b5c98c0dr (1).jpeg', 'images/Whisk_9bf00ff958aafe0a139496e79b5c98c0dr.jpeg', 'images/Whisk_fba09153ae516e1ab5a436e57d5d7cc1eg.png', 'images/Whisk_yjzijzm0mjm5etnw0sywutytcjykrtlyejmx0iy.gif'];
window.onload = function() {
    const container = document.getElementById('canvas-container');
    console.log('Rasta nuotrauku:', images.length);

    if (images.length > 0 && container) {
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'floating-img';
            
            let x, y, z, speed, rotation, driftX, driftY, phase;

            function reset(isInitial) {
                x = (Math.random() - 0.5) * window.innerWidth * 2.2;
                y = (Math.random() - 0.5) * window.innerHeight * 2.2;
                // Jei tai pradžia, išmetome jas per visa gyli, kad nereiketu laukti
                z = isInitial ? (Math.random() * -3000) : -3000; 
                speed = 2 + Math.random() * 3;
                rotation = Math.random() * 360;
                driftX = (Math.random() - 0.5) * 1.5;
                driftY = (Math.random() - 0.5) * 1.5;
                phase = Math.random() * Math.PI * 2;
            }

            reset(true);
            container.appendChild(img);

            function animate() {
                z += speed;
                phase += 0.005;

                let currentX = x + Math.sin(phase) * 150 * driftX;
                let currentY = y + Math.cos(phase * 0.8) * 150 * driftY;

                if (z > 1000) {
                    reset(false);
                }

                let opacity = 0;
                if (z > -2500) opacity = (z + 2500) / 1000;
                if (z > 500) opacity = (1000 - z) / 500;
                if (opacity > 0.7) opacity = 0.7;

                img.style.opacity = opacity;
                img.style.transform = \	ranslate(-50%, -50%) translate3d(\px, \px, \px) rotate(\deg)\;
                
                requestAnimationFrame(animate);
            }
            animate();
        });
    }
};
