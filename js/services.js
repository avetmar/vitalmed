document.querySelector(".buttonExpress").addEventListener("click", function () {
  const height = document.querySelector(".ekspress_implant");
  const buttonText = this.textContent.trim();

  if (buttonText === "Узнать больше") {
    height.style.maxHeight = height.scrollHeight + "px";
    this.textContent = "Скрыть";
  } else {
    height.style.maxHeight = "480px";
    this.textContent = "Узнать больше";
  }
});

document.querySelector(".buttonZygoma").addEventListener("click", function () {
  const height = document.querySelector(".zygoma");
  const buttonText = this.textContent.trim();

  if (buttonText === "Узнать больше") {
    height.style.maxHeight = height.scrollHeight + "px";
    this.textContent = "Скрыть";
  } else {
    height.style.maxHeight = "480px";
    this.textContent = "Узнать больше";
  }
});
