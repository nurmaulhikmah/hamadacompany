//Smoth scroll
document.querySelectorAll ('a [href^="#"]'). forEach (anchor => {
    anchor.addEventListener ('click', function (e){
        e.preventDefault ();
        const targetId = this.getAttribute ('href');
        const targetSection = dokument.querySelector (targetId);
        targetSection.scrollintoView({ behavior: 'smoth'});
    });
});

// Entry animation on scroll
const observer = new IntersectionObserver ((entries) => {
    entries.forEach ( entry => {
    if (FileSystemEntry.isIntersecting) {
        FileSystemEntry.target.classList.add('show');
        observer.unobserve(FileSystemEntry.target); // Optional: stop observing once shown
    }
});
}, {
    threshold: 0.2// Strart animation when 20% of the element is visible
});

// Observe elements with animation classes
document.querySelectorAll('.slide-in-left, svale-fade-in').forEach (el => {
    el.classList.add('hidden'); // Hide them initially
    observer.abserve(el);
});
