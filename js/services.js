document.querySelectorAll(".buttonMore").forEach((button) => {
  button.addEventListener("click", function () {
    let height;
    let maxHeight;
    if (this.classList.contains("buttonExpress")) {
      height = document.querySelector(".ekspress_implant");
      maxHeight = "480px";
    } else if (this.classList.contains("buttonZygoma")) {
      height = document.querySelector(".zygoma");
      maxHeight = "480px";
    } else if (this.classList.contains("buttonBazal")) {
      height = document.querySelector(".bazal");
      maxHeight = "580px";
    } else if (this.classList.contains("buttonFullImplant")) {
      height = document.querySelector(".fullImplant");
      maxHeight = "580px";
    }

    const buttonText = this.textContent.trim();
    if (buttonText === "Узнать больше") {
      height.style.maxHeight = height.scrollHeight + "px";
      this.textContent = "Скрыть";
    } else {
      height.style.maxHeight = maxHeight;
      // Get the element's position and adjust by 200px
      const elementPosition = height.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      this.textContent = "Узнать больше";
    }
  });
});
