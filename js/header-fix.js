    document.addEventListener("DOMContentLoaded", function () {
      const header = document.querySelector(".header");
      const offset = header.offsetTop;

      window.addEventListener("scroll", function () {
        if (window.scrollY > offset) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
      });
    });
