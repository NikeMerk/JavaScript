let arrAllObjects = [];

function GenId(arr) {
  let id = 0;
  if (arr.length > 0) {
    id = arr[arr.length - 1].id + 1;
    return id;
  } else return id;
}

function AppTodo({
  $container,
  CreateList,
  CreateTitle,
  CreateForm,
  CreateItem,
  localKey,
}) {
  arrAllObjects = [];
  $container.innerHTML = ``;
  $container.append(CreateTitle(localKey), CreateForm().form, CreateList());

  const todoList = document.querySelector(".todo-list");
  const formButton = document.querySelector(".button-push");
  const formInput = document.querySelector(".form-input");

  if (localStorage.getItem(localKey)) {
    arrAllObjects = JSON.parse(localStorage.getItem(localKey));
    arrAllObjects.map((elem) => {
      todoList.append(CreateItem(elem, arrAllObjects, localKey));
    });
  }
  formButton.onclick = (e) => {
    e.preventDefault();
    let newObj = {
      name: formInput.value,
      id: GenId(arrAllObjects),
      done: false,
    };

    arrAllObjects.push(newObj);
    todoList.append(CreateItem(newObj, arrAllObjects, localKey));
    localStorage.setItem(localKey, JSON.stringify(arrAllObjects));
    formInput.value = "";
    formButton.disabled = true;
    localStorage.setItem(localKey, JSON.stringify(arrAllObjects));
  };
}

export default AppTodo;
