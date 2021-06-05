import "./styles.css";
import "./styles.scss";
console.log("hello world!");
const menu = document.querySelector(".menu");
const icono = document.querySelector(".icono--menu");
const enlaceMenu = document.querySelectorAll(".enlace__menu");
function grande() {
	icono.addEventListener("click", () => {
		menu.classList.toggle("mas");
		icono.classList.toggle("cruz");
	});
	enlaceMenu.addEventListener("click", () => {
		menu.classList.toggle("menos");
	});
}
grande();
