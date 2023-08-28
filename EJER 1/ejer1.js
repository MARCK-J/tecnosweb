const colorChangeDiv = document.getElementById("colorChangeDiv");

colorChangeDiv.addEventListener("mouseenter", () => {
  colorChangeDiv.style.backgroundColor = "#2ecc71";
});

colorChangeDiv.addEventListener("mouseleave", () => {
  colorChangeDiv.style.backgroundColor = "#3498db";
});
