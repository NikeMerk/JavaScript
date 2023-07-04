const scrollButton = document.getElementById('scroll-button');

scrollButton.onclick = () => {setScrollToOptions()};

console.log(scrollButton)

window.onscroll = () => {
	let scrollPosition = document.documentElement.scrollTop;
	console.log(typeof scrollPosition);
	if (scrollPosition >= 100) scrollButton.classList.add('scroll-button-visible');
	else scrollButton.classList.remove('scroll-button-visible');
}

function setScrollToOptions() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
} 