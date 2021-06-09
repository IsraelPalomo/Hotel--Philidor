import "./styles.css";
import "./styles.scss";
import "./static/habitacion-fischer.jpg";
import "./static/habitacion-magnus.jpg";
import "./static/habitacion-kasparov.jpg";
console.log("hello world!");
const menu = document.querySelector(".menu");
const icono = document.querySelector(".icono--menu");
const enlaceMenu1 = document.querySelector(".link1");
const enlaceMenu2 = document.querySelector(".link2");
const enlaceMenu3 = document.querySelector(".link3");
const enlaceMenu4 = document.querySelector(".link4");
const enlaceMenu5 = document.querySelector(".link5");

function grande() {
	icono.addEventListener("click", () => {
		menu.classList.toggle("mas");
		icono.classList.toggle("cruz");
		menu.classList.remove("menos");
	});
	enlaceMenu1.addEventListener("click", () => {
		menu.classList.toggle("menos");
		icono.classList.remove("cruz");
		menu.classList.toggle("mas");
	});
	enlaceMenu2.addEventListener("click", () => {
		menu.classList.toggle("menos");
		icono.classList.remove("cruz");
		menu.classList.toggle("mas");
	});
	enlaceMenu3.addEventListener("click", () => {
		menu.classList.toggle("menos");
		icono.classList.remove("cruz");
		menu.classList.toggle("mas");
	});
	enlaceMenu4.addEventListener("click", () => {
		menu.classList.toggle("menos");
		icono.classList.remove("cruz");
		menu.classList.toggle("mas");
	});
	enlaceMenu5.addEventListener("click", () => {
		menu.classList.toggle("menos");
		icono.classList.remove("cruz");
		menu.classList.toggle("mas");
	});
}
grande();
AOS.init();
