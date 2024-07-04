// Smooth scroll functions
function redirectToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

function redirectToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function redirectToAbout() {
    document.getElementById('about_me').scrollIntoView({ behavior: 'smooth' });
}

// Open weather app in a new tab
document.getElementById('weatherApp').addEventListener('click', function() {
    window.open('https://nono140503.github.io/WeatherApp/', '_blank');
});

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    const cardsReact = document.querySelectorAll(".card-4");
    const cardReactNative = document.querySelector(".card-5");
    const webDevSection = document.querySelector(".webdev");

    const fadeElements = [webDevSection, ...cardsReact, cardReactNative];

    // Apply fade-in effect to elements on scroll
    function fadeInElements() {
        fadeElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('fade-in')) {
                element.classList.add('fade-in');
            }
        });
    }

    // Call fadeInElements on scroll
    document.addEventListener('scroll', fadeInElements);
    fadeInElements(); // Trigger immediately on page load

    const cards = document.querySelectorAll(".card-1, .card-2, .card-3, .card-4, .card-5");
    const modal = document.getElementById("video-modal");
    const videoElement = modal.querySelector("video");
    const closeModal = modal.querySelector(".close");

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener("click", event => {
            event.stopPropagation();
            const videoSrc = card.getAttribute("data-video");
            console.log("Video Source:", videoSrc);
            videoElement.src = videoSrc;
            modal.style.display = "flex";
            videoElement.onloadedmetadata = function() {
                adjustModalSize(videoElement, modal);
            };
        });
    });

    // Close modal when close button is clicked
    closeModal.onclick = function() {
        closeModalModal();
    }

    // Close modal when clicking outside the video area
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModalModal();
        }
    }

    // Initial text toggle function
    toggleText();
    setInterval(toggleText, 7000);

    // Fade-in effect for cards and languages on scroll
    function onScroll() {
        const cards = document.querySelector('.cards');
        const languages = document.querySelectorAll('.languages');
        const headings = document.querySelectorAll('.heading');
        const hasFadedIn = new Set(); // Track elements that have faded in

        // Apply fade-in effect to cards if they haven't faded in yet
        if (isElementInViewport(cards) && !hasFadedIn.has(cards)) {
            cards.classList.add('fade-in');
            hasFadedIn.add(cards); // Mark as faded in
        }

        // Apply fade-in effect to each .languages element if they haven't faded in yet
        languages.forEach(language => {
            if (isElementInViewport(language) && !hasFadedIn.has(language)) {
                language.classList.add('fade-in');
                hasFadedIn.add(language); // Mark as faded in
            }
        });
        headings.forEach(heading => {
            if (isElementInViewport(heading) && !hasFadedIn.has(heading)) {
                heading.classList.add('fade-in');
                hasFadedIn.add(heading); // Mark as faded in
            }
        });
    }

    // Check if element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Adjust modal size based on video dimensions
    function adjustModalSize(video, modal) {
        const videoRatio = video.videoWidth / video.videoHeight;
        const maxWidth = 800; // Example maximum width in pixels
        const maxHeight = 600; // Example maximum height in pixels
        let width = maxWidth;
        let height = maxHeight;

        if (videoRatio > 1) { // landscape
            height = maxWidth / videoRatio;
        } else { // portrait
            width = maxHeight * videoRatio;
        }

        if (height > maxHeight) {
            height = maxHeight;
            width = height * videoRatio;
        }

        modal.querySelector('.modal-content').style.width = `${width}px`;
        video.style.width = `${width}px`;
        video.style.height = `${height}px`;
    }

    // Close modal and stop video playback
    function closeModalModal() {
        const modal = document.getElementById("video-modal");
        const videoElement = modal.querySelector("video");
        modal.style.display = "none";
        videoElement.pause();
        videoElement.src = "";
    }

    // Toggle text between initial and "Coming Soon!!!"
    function toggleText() {
        const tag = document.getElementById('tag');
        tag.innerHTML = '&lt;/&gt;'; // Display initial text
        setTimeout(() => {
            tag.innerHTML = '<span>&lt;Coming Soon!!! /&gt;</span>'; // Display "Coming Soon!!!" after 3 seconds
            setTimeout(() => {
                tag.innerHTML = '&lt;/&gt;'; // Display "</>"
                tag.style.transition = 'opacity 1s'; // Smooth transition for opacity
                tag.style.opacity = '1'; // Fade in "</>"
            }, 3000); // Delay before fading in "</>"
        }, 3000); // Delay before changing the text to "Coming Soon!!!"
    }

    // Fade-in effect on scroll
    document.addEventListener('scroll', onScroll);
    onScroll(); // Trigger onScroll to handle elements already in view
});
document.addEventListener("DOMContentLoaded", function() {
    const hiElement = document.querySelector('.hi');
    const nameElement = document.querySelector('.name');
    const roleElement = document.querySelector('.role');

    function typeEffect(element, text, speed = 30) {
        let index = 0;
        let char;

        function type() {
            if (index < text.length) {
                char = text.charAt(index);
                // Append the character to the element
                element.innerHTML += char;

                // Check for special characters and handle cursor
                if (char === '<') {
                    // If it's a '<', complete the HTML tag
                    const tagEndIndex = text.indexOf('>', index);
                    element.innerHTML += text.substring(index + 1, tagEndIndex + 1);
                    index = tagEndIndex;
                } else {
                    // Otherwise, append the cursor
                    element.innerHTML += '<span class="cursor"></span>';
                }

                index++;
                setTimeout(() => {
                    // Remove cursor after a short delay
                    element.innerHTML = element.innerHTML.slice(0, -'<span class="cursor"></span>'.length);
                    type();
                }, speed);
            }
        }
        type();
    }

    // Start the typing effect
    // setTimeout(() => typeEffect(hiElement, 'Nombali Mafa '), 200);
    setTimeout(() => typeEffect(nameElement, 'Explore my journey in software development! This portfolio features Node.js WhatsApp chatbots, web development, React projects, and React Native applications, showcasing my dedication to impactful solutions 👩🏾‍💻👾.'), 1500);

    setTimeout(() => typeEffect(roleElement, 'Aspiring Software Developer.'), 250);
});
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Check local storage for theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Save theme preference
    document.body.addEventListener('classlistchange', () => {
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
