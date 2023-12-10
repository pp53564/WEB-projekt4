document.addEventListener("DOMContentLoaded", function () {
   const contentToggleBtn = document.getElementById("contentToggleBtnTexts");
   const contentToToggle = document.getElementById("contentToToggleTexts");
   const dogAnatomy1 = document.getElementById("dogInformation1");
   const dogAnatomy2 = document.getElementById("dogInformation2");
   contentToToggle.style.display = "block";

   fetch('dogInformation1.txt')
      .then(response => response.text())
      .then(data => {
         dogAnatomy1.textContent = data;
      })
      .catch(error => console.error('Error fetching dog introduction:', error));
   fetch('dogInformation2.txt')
      .then(response => response.text())
      .then(data => {
         dogAnatomy2.textContent = data;
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
