export default function CreateList() {
	let list = document.createElement('ul');
	list.classList.add('todo-list');
	return list;
}