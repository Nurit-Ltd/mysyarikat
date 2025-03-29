const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const overlay = document.getElementById("overlay");
    const body = document.body;

    function openMenu() {
      sidebarMenu.style.width = "80%";
      overlay.classList.remove("hidden");
      body.classList.add("no-scroll");
    }

    function closeMenu() {
      sidebarMenu.style.width = "0";
      overlay.classList.add("hidden");
      body.classList.remove("no-scroll");
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);