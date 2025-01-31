const global = {
	currentPage: window.location.pathname,
}

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const wrapper = document.getElementById("wrapper");


btn.addEventListener("click", navToggle);

function navToggle() {
	btn.classList.toggle("open");
	menu.classList.toggle("hidden");
	document.body.classList.toggle("lock-scroll");
}

function highlightActiveLink() {
	const links = document.querySelectorAll('.nav-link');
	links.forEach(link => {
		if(global.currentPage.endsWith(link.getAttribute('href'))) {
			link.classList.add('text-secondary');
		}
		console.log(global.currentPage);
		console.log(link.getAttribute('href'));
	});
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);