document.addEventListener("DOMContentLoaded", function () {
    const contentToggleBtn = document.getElementById("contentToggleBtnPictures");
    const contentToToggle = document.getElementById("contentToTogglePictures");

    // Initially hide the content
    contentToToggle.style.display = "block";

    contentToggleBtn.addEventListener("click", function () {
        if (contentToToggle.style.display === "none" || contentToToggle.style.display === "") {
            contentToToggle.style.display = "block";
            contentToggleBtn.textContent = "Hide";
        } else {
            contentToToggle.style.display = "none";
            contentToggleBtn.textContent = "Show";
        }
    });
});
