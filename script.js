let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const artworkTitles = ['Premier Titre', 'Deuxième Titre'];
const artworkMaterials = ['Huile sur toile', 'Aquarelle'];
const artworkSizes = ['50x70cm', '30x40cm'];
const artworkDates = ['2021', '2022'];

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    document.getElementById('artwork-title').textContent = artworkTitles[index];
    document.getElementById('artwork-material').textContent = artworkMaterials[index];
    document.getElementById('artwork-size').textContent = artworkSizes[index];
    document.getElementById('artwork-date').textContent = artworkDates[index];
}

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide + slides.length - 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);



