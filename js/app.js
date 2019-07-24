const navBtn_div = document.querySelector('.nav-btn');
const headerNav_div = document.querySelector('#header-nav');

navBtn_div.addEventListener('click', _ => {
	navBtn_div.classList.toggle('active');
	headerNav_div.classList.toggle('active');
});

const header = document.querySelector('[data-header]');

if (innerWidth <= 415) {
	header.style = `width: ${innerWidth}px`;
	window.addEventListener('resize', _ => {
		header.style = `width: ${innerWidth}px`;
	});
}

if (innerWidth >= 360 || innerWidth <= 375) {
	header.style = `width: ${innerWidth}px`;
	console.log('ok');
	window.addEventListener('resize', _ => {
		header.style = `width: ${innerWidth}px`;
	});
}
