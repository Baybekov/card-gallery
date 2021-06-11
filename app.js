function slidesPlugin (active = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[active].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearAcriveClasses();
            slide.classList.add('active');
        });
    }
    
    function clearAcriveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }

}

slidesPlugin();