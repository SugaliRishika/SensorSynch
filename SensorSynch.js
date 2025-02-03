// document.addEventListener('DOMContentLoaded', () => {
//     const cards = document.querySelectorAll('.use-card');
//     const section = document.querySelector('#website-use'); // Section to trigger the animation

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Add class when the section is in view
//                 cards.forEach((card, index) => {
//                     card.classList.add('animate-card');
//                     card.style.animationDelay = `${index * 0.2}s`; // Stagger delay
//                 });
//             }
//         });
//     }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

//     observer.observe(section); // Observe the section
// });

// // Get the IoT card and description
// const iotCard = document.getElementById('iot-card');
// const iotDescription = document.getElementById('iot-description');

// // Add event listener for click
// iotCard.addEventListener('click', () => {
//     // Toggle the visibility of the description
//     iotDescription.classList.toggle('show-description');
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let slides = document.querySelector(".slides");
//     let index = 0;
//     const totalSlides = document.querySelectorAll(".slide-image").length;

//     function showNextImage() {
//         index = (index + 1) % totalSlides;
//         let newTransformValue = `translateX(-${index * 100}%)`;
//         slides.style.transform = newTransformValue;
//     }

//     setInterval(showNextImage, 3000); // Change image every 3 seconds
// });

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         // If the element is in viewport
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//     });
// }, {
//     threshold: 0.1 // Trigger when at least 10% of the element is visible
// });

// // Observe all cards
// document.querySelectorAll('.card').forEach(card => {
//     observer.observe(card);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const cards = document.querySelectorAll('.use-card');
//     const section = document.querySelector('#website-use'); // Check if the section exists

//     if (section) {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     cards.forEach((card, index) => {
//                         card.classList.add('animate-card');
//                         card.style.animationDelay = `${index * 0.2}s`; // Stagger delay
//                     });
//                 }
//             });
//         }, { threshold: 0.5 });

//         observer.observe(section);
//     }

//     // Fix for multiple IoT cards
//     const iotCards = document.querySelectorAll('.competency-card');
//     iotCards.forEach(card => {
//         card.addEventListener('click', () => {
//             const description = card.querySelector('p'); // Find the description inside the clicked card
//             description.classList.toggle('show-description');
//         });
//     });

//     // Fixing Image Slideshow
//     let slides = document.querySelector(".slides");
//     if (slides) {
//         let index = 0;
//         const totalSlides = document.querySelectorAll(".slide-image").length;

//         function showNextImage() {
//             index = (index + 1) % totalSlides;
//             slides.style.transform = `translateX(-${index * 100}%)`;
//         }

//         setInterval(showNextImage, 3000);
//     }

//     // General Intersection Observer Fix
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, { threshold: 0.1 });

//     document.querySelectorAll('.card').forEach(card => {
//         observer.observe(card);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    // Selecting elements
    const cards = document.querySelectorAll(".use-card");
    const section = document.querySelector(".container");
    const iotCards = document.querySelectorAll(".iot-card");
    const competencyCards = document.querySelectorAll(".competency-card");
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide-image").length;
    let index = 0;
    let slideshowInterval;

    // Intersection Observer for Card Animations
    if (section) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    cards.forEach((card, index) => {
                        card.classList.add("animate-card");
                        card.style.animationDelay = `${index * 0.2}s`; // Staggered animation
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(section);
    } else {
        console.error("❌ Element with class 'container' not found!");
    }

    // IoT Card Click Toggle
    iotCards.forEach((card) => {
        card.addEventListener("click", function () {
            let description = this.querySelector("p");
            if (description) {
                description.classList.toggle("show-description");
            }
        });
    });

    // Competency Card Click Toggle
    competencyCards.forEach((card) => {
        card.addEventListener("click", function () {
            let description = this.querySelector("p");
            if (description) {
                description.classList.toggle("show-description");
            }
        });
    });

    // Slideshow Logic
    function startSlideshow() {
        slideshowInterval = setInterval(() => {
            index = (index + 1) % totalSlides; // Loop to the first slide after the last
            slides.style.transform = `translateX(-${index * 100}%)`;  // Move slide by 100%
        }, 3000); // Change image every 3 seconds
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    if (slides && totalSlides > 0) {
        startSlideshow();

        // Pause Slideshow on Hover
        slides.addEventListener("mouseenter", stopSlideshow);
        slides.addEventListener("mouseleave", startSlideshow);
    } else {
        console.error("❌ Slideshow elements not found!");
    }

    // General Animation Observer for other elements
    const generalObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe all .card elements
    document.querySelectorAll(".card").forEach((card) => {
        generalObserver.observe(card);
    });
});

