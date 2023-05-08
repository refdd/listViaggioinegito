const inpuiryButton = document.querySelector(".button_moblie");
const forrmInpuiry = document.getElementById("from");

// button inqure on scroll event and on click event go to from
inpuiryButton &&
  inpuiryButton.addEventListener("click", () => {
    console.log("sdkjflkjsldjflksd");
    forrmInpuiry.scrollIntoView(false);
    setTimeout(() => {
      inpuiryButton.classList.add("close");
    }, 1500 / 2);
  });
window.addEventListener("scroll", () => {
  if (inpuiryButton.classList.contains("close")) {
    inpuiryButton.classList.remove("close");
  }
});
// reviews slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#reviewSection", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
      autoScroll: {
        speed: 2,
      },
      autoScroll: {
        speed: 1,
      },
    },
    pagination: false,
  }).mount(window.splide.Extensions);
});
