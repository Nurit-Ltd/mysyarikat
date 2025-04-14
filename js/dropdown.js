document.querySelectorAll(".dropdown-toggle").forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    const dropdownMenu = toggleBtn.nextElementSibling;
    const arrowIcon = toggleBtn.querySelector(".arrow-icon");

    const isOpen =
      dropdownMenu.style.height && dropdownMenu.style.height !== "0px";

    if (isOpen) {
      dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
      requestAnimationFrame(() => {
        dropdownMenu.style.height = "0px";
      });
      arrowIcon.classList.remove("rotate-90");
    } else {
      dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
      dropdownMenu.addEventListener("transitionend", function handler() {
        dropdownMenu.style.height = "auto";
        dropdownMenu.removeEventListener("transitionend", handler);
      });
      arrowIcon.classList.add("rotate-90");
    }
  });
});
