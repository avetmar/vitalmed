document.querySelector(".buttonMoreExpress").addEventListener("click", function () {
  const height = document.querySelector(".ekspress_implant");
  const buttonText = document.querySelector(".buttonMoreExpress").textContent.trim();

  if (buttonText === "Узнать больше") {
    height.style.maxHeight = "inherit";
    document.querySelector(".buttonMoreExpress").textContent = "Скрыть";
  } else {
    height.style.maxHeight = "480px";
    document.querySelector(".buttonMoreExpress").textContent = "Узнать больше";
  }
  document.querySelector(".ekspress_implant").scrollIntoView({ behavior: "smooth" });
});
