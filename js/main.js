const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebarMenu = document.getElementById("sidebar-menu");

const userBtn = document.getElementById("user-btn");
const closeUserBtn = document.getElementById("close-user-btn");
const userModal = document.getElementById("user-modal");

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

function openUserModal() {
  userModal.style.width = "510px";
  overlay.classList.remove("hidden");
  body.classList.add("no-scroll");
}

function closeUserModal() {
  userModal.style.width = "0";
  overlay.classList.add("hidden");
  body.classList.remove("no-scroll");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

userBtn.addEventListener("click", openUserModal);
closeUserBtn.addEventListener("click", closeUserModal);

overlay.addEventListener("click", () => {
  closeMenu();
  closeUserModal();
});