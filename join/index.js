const body = document.querySelector("body");

function toggleTheme() {
	body.classList.toggle("dark-mode");
}

const themeBtn = document.querySelector("#toggle-theme");
themeBtn.addEventListener("click", toggleTheme);
