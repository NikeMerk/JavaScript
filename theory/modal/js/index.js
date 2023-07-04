
const $modalContent = document.getElementById('modal-content')
const $container = document.querySelector('.container');
const $btnModal = document.querySelector('.open-modal');
const $btnModalOk = document.querySelector('.button-ok')
const $btnModalClose = document.querySelector('.button-close');
const $modal = document.getElementById($btnModal.dataset.target)

$btnModal.onclick = () => {
	openCloseModal();
}

$modalContent.onclick = (e) => {
	e._clickOnModal = true;
}

$modal.onclick = (e) => {
	if (e._clickOnModal) return
	openCloseModal();
}

// ----------------------------------------------------------------

$btnModalClose.onclick = () => {
	$container.classList.remove('container-disabled')
	$modal.classList.toggle('modal-visible');
	body.classList.remove('page-change');
}; 
function openCloseModal() {
	$modal.classList.toggle('modal-visible');
	$modalContent.classList.add('modal-content-down')
	$container.classList.remove('container-disabled')
}
$btnModalOk.onclick = () => {
	const audio = new Audio();
	audio.src = '/modal/what.mp3'
	audio.play();
}
$btnModalOk.onmouseenter = () => {
	const audio = new Audio();
	audio.src = '/modal/no-dont-do-it.mp3'
	audio.play();
}