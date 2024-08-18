document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.hover-container');

    containers.forEach(container => {
        const images = container.querySelectorAll('img');
        if (images.length !== 2) return;

        const [defaultImage, hoverImage] = images;
        hoverImage.style.display = 'none';

        container.addEventListener('mouseenter', () => {
            defaultImage.style.display = 'none';
            hoverImage.style.display = 'block';
        });

        container.addEventListener('mouseleave', () => {
            defaultImage.style.display = 'block';
            hoverImage.style.display = 'none';
        });
    });
});
