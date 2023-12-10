document.addEventListener("DOMContentLoaded", function () {
   const main = document.querySelector("main");
   const headings = main.querySelectorAll("h2,h3");

   const toc = document.createElement("div");
   toc.className = "toc";
   toc.innerHTML = "<h2>Table of Contents</h2><ul></ul>";
   main.parentElement.insertBefore(toc, main);

   const tocList = toc.querySelector("ul");

   headings.forEach(function (heading) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = heading.textContent;
      link.href = `#${heading.id}`;


      li.appendChild(link);
      tocList.appendChild(li);
   });

});

