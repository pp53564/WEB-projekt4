document.addEventListener("DOMContentLoaded", function () {
    const contentToggleBtn = document.getElementById("contentToggleBtnAnatomy");
    const contentToToggle = document.getElementById("contentToToggleAnatomy");
    const dogAnatomy = document.getElementById("dogAnatomy");

    contentToToggle.style.display = "block";

    fetch('dogAnatomy.txt')
        .then(response => response.text())
        .then(data => {
            dogAnatomy.textContent = data;
        })
        .catch(error => console.error('Error fetching dog introduction:', error));

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
