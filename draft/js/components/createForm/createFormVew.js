let arr = []

export const createForm = () => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');

  form.classList.add("form")
  input.classList.add("input")
  button.classList.add("button")

  button.textContent = "Create";
  button.type = "button"

  button.disabled = true;

  input.addEventListener("input", () => {
    input.value ? button.disabled = false : button.disabled = true ;
  })

  button.addEventListener("click", () => {
    const obj = {
      name: input.value,
      owner: document.querySelector(".title").textContent,
      done: false,
      id: crypto.randomUUID()
    }
    arr.push(obj)

    localStorage.setItem(obj.owner, JSON.stringify(arr))

  })

  form.append(input, button)

  return form
}