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
        });
    });

    // Close the modal when the user clicks on the 'close' button
    closeModalButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close the modal when the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
