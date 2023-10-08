const $btnOpenModal = document.querySelector('.button');
const $container = document.querySelector('.container');
let promiseCss = null;

$btnOpenModal.onclick = () => {
	openModal()
}

function loadStyleCss() {
	// check - if styleCss already loaded in head - return
	if (promiseCss) return promiseCss;

	// create and loading styleCss in HTML/head	
	promiseCss = new Promise(resolve => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = '/promise/lessen-skillbox/css/style.css';
		console.log('first i loading style css');
		link.onload = () => {
			resolve();
		}
		console.log('then i loading style in HTML head');
		document.head.append(link);
	})
	return promiseCss;
}

async function openModal() {
	// waiting 
	await loadStyleCss();
	
	$container.innerHTML = `
	<div class="modal-root">
		<div class="modal-win">
			<p class="text">What are you want?</p>
			<button class="button-yes">Yes</button>
			<button class="button-no">No</button>
		</div>
	</div>`

	const modal = document.querySelector('.modal-root');
	modal.onclick = () => {	$container.innerHTML = ``}
}

