
export async function getTodoList(owner) {
	let result = await fetch(`http://localhost:3000/api/todos?owner=${owner}`);
	return await result.json();
}

export function changeObj(change, id) {
	fetch(`http://localhost:3000/api/todos/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({done : change}),
		headers : {"content-type": "application/json"}
	})
}

export function deletePost(id) {
	fetch(`http://localhost:3000/api/todos/${id}`, {method: 'DELETE'})
}

export async function postObjOnServer(obj) {
  const response = await fetch('http://localhost:3000/api/todos', { 
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
			'Content-Type': 'application/json',
		}
	})
	return await response.json();
}