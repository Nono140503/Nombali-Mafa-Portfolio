function redirectToProjects() {
    // Assuming your projects container has an id "projects-container"
    let projectsContainer = document.getElementById('projects');
      projectsContainer.scrollIntoView({ behavior: 'smooth' });
}
function redirectToContact() {
    let contacts = document.getElementById('contact');
      contacts.scrollIntoView({ behavior: 'smooth' });
}
function redirectToAbout() {
  let about_me = document.getElementById('about_me');
    about_me.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".cards #card");
  const modal = document.getElementById("video-modal");
  const videoElement = modal.querySelector("video");
  const closeModal = modal.querySelector(".close");

  cards.forEach(card => {
      card.addEventListener("click", () => {
          const videoSrc = card.getAttribute("data-video");
          videoElement.src = videoSrc;
          modal.style.display = "flex";
          videoElement.onloadedmetadata = function() {
            adjustModalSize(videoElement, modal);
        };
      });
  });

  closeModal.onclick = function() {
      modal.style.display = "none";
      videoElement.pause();
      videoElement.src = "";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          videoElement.pause();
          videoElement.src = "";
      }
  }
});
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
document.addEventListener('DOMContentLoaded', function() {
  
  const tag = document.getElementById('tag');

  // Function to toggle between initial and "Coming Soon!!!" text
  function toggleText() {
      tag.innerHTML = '&lt;/&gt;'; // Display initial text
      setTimeout(() => {
          tag.innerHTML = '<span>&lt;Coming Soon!!! /&gt;</span>'; // Display "Coming Soon!!!" after 2 seconds
          setTimeout(() => {
              tag.innerHTML = '&lt;/&gt;'; // Display "</>"
              tag.style.transition = 'opacity 1s'; // Smooth transition for opacity
              tag.style.opacity = '1'; // Fade in "</>"
          }, 3000); // Delay before fading in "</>"
      }, 3000); // Delay before changing the text to "Coming Soon!!!"
  }

  // Call the toggleText function initially
  toggleText();

  // Repeat the toggleText function every 4 seconds
  setInterval(toggleText, 7000);
});
document.addEventListener('scroll', function onScroll() {
    var cards = document.querySelector('.cards');
    var scrollPosition = window.scrollY;
    var fadeInPosition = 500; // Adjust this value based on your preference
  
    // Get the offset position of the .cards element
    var cardsOffsetTop = cards.offsetTop;
  
    if (scrollPosition + window.innerHeight > cardsOffsetTop) {
        cards.classList.add('fade-in');
        // Remove the event listener after adding the fade-in class
        document.removeEventListener('scroll', onScroll);
    }
  });
  



