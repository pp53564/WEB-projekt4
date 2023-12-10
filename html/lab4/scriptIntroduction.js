document.addEventListener("DOMContentLoaded", function () {
    const contentToggleBtn = document.getElementById("contentToggleBtn");
    const contentToToggle = document.getElementById("contentToToggle");
    const dogInfo = document.getElementById("dogInfo");

    contentToToggle.style.display = "block";

    fetch('dogIntroduction.txt')
        .then(response => response.text())
        .then(data => {
            dogInfo.textContent = data;
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
