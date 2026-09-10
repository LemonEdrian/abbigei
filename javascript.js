document.addEventListener('DOMContentLoaded', () => {

    // --- Galería dinámica de imágenes para probar la interactividad ---
    const images = [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // Tecnología / Circuitos
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80", // Retro Gaming
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80", // Gaming / Setup
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"  // Laptop / Código
    ];

    let currentImgIndex = 0;
    const featuredImg = document.getElementById('featured-image');
    const changeImgBtn = document.getElementById('btn-change-img');

    if (changeImgBtn && featuredImg) {
        changeImgBtn.addEventListener('click', () => {
            // Cambiar el índice de la imagen
            currentImgIndex = (currentImgIndex + 1) % images.length;
            
            // Efecto suave de transición
            featuredImg.style.opacity = '0.3';
            
            setTimeout(() => {
                featuredImg.src = images[currentImgIndex];
                featuredImg.style.opacity = '1';
            }, 200);
        });
    }

    // --- Efecto de clic en etiquetas de gustos ---
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active');
            if(tag.classList.contains('active')) {
                tag.style.backgroundColor = "var(--primary-color)";
                tag.style.color = "#fff";
            } else {
                tag.style.backgroundColor = "rgba(56, 189, 248, 0.1)";
                tag.style.color = "var(--accent-color)";
            }
        });
    });

});