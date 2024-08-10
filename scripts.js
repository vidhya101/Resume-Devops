document.addEventListener('DOMContentLoaded', () => {
    // Get the modal and its elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const closeModalButton = document.querySelector(".close");

    // Add click event listeners to all elements with the 'modal-trigger' class
    document.querySelectorAll('.modal-trigger').forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = image.src;
            modal.classList.add('fade-in'); // Add fade-in class
        });
    });

    // Close the modal when the user clicks on the 'close' button
    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('fade-in'); // Remove fade-in class
        modal.classList.add('fade-out'); // Add fade-out class
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove('fade-out'); // Remove fade-out class
        }, 300); // Duration matches CSS transition
    });

    // Close the modal when the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('fade-in');
            modal.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove('fade-out');
            }, 300);
        }
    });

    // Close the modal when the user presses the Esc key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === "block") {
            modal.classList.remove('fade-in');
            modal.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove('fade-out');
            }, 300);
        }
    });
});
