function CreateTitle(textTitle) {
	let title = document.createElement('h2');
	title.classList.add('main-title');
	title.textContent = textTitle;
	return title;
}
export default CreateTitle;