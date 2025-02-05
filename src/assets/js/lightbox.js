document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lightbox-container img").forEach((img) => {
        const dialog = document.getElementById(`lightbox-${img.dataset.id}`);

        if (!dialog) return; // Prevent errors if modal doesn't exist

        const html = document.querySelector("html");

        // Function to open modal
        const openModal = () => {
            html.classList.add("modal-is-opening");
            dialog.showModal ? dialog.showModal() : dialog.setAttribute("open", true); // Fallback for browsers without native showModal support
            setTimeout(() => {
                html.classList.remove("modal-is-opening");
                html.classList.add("modal-is-open");
            }, 350); // Adjust timeout to match Pico.css animation timing
        };

        // Function to close modal
        const closeModal = () => {
            html.classList.add("modal-is-closing");
            setTimeout(() => {
                html.classList.remove("modal-is-closing", "modal-is-open");
                dialog.close ? dialog.close() : dialog.removeAttribute("open"); // Fallback for browsers without native close support
            }, 250);
        };

        // Open modal on image click
        img.addEventListener("click", openModal);

        // Close modal when clicking close button
        dialog.querySelector(".close").addEventListener("click", closeModal);

        // Close modal when clicking outside the image
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) closeModal();
        });

        // Close modal on key press
        document.addEventListener("keydown", (event) => {
            if (html.classList.contains("modal-is-open")) {
                closeModal();
            }
        });
    });
});
