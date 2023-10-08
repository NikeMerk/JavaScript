function CreateItem(obj, arrAllObjects, localKey) {
  let item = document.createElement("li");
  let text = document.createElement("p");
  let buttonBlock = document.createElement("div");
  let buttonDone = document.createElement("button");
  let buttonDelete = document.createElement("button");

  item.classList.add("todo-item", "flex");
  text.classList.add("todo-item__text");
  buttonBlock.classList.add("todo-item__block-button");
  buttonDone.classList.add("button", "button-done");
  buttonDelete.classList.add("button", "button-delete");

  text.textContent = obj.name;
  buttonDone.textContent = "done";
  buttonDelete.textContent = "delete";

  if (obj.done === true) {
    item.classList.add("item-done");
  }

  buttonDone.onclick = () => {
    for (let elem of arrAllObjects) {
      if (elem.id === obj.id) {
        elem.done = !elem.done;
        item.classList.toggle("item-done");
      }
    }
    localStorage.setItem(localKey, JSON.stringify(arrAllObjects));
  };

  buttonDelete.onclick = () => {
    if (confirm("Sure - delete?")) {
      for (let i = 0; i < arrAllObjects.length; i++) {
        if (arrAllObjects[i].id === obj.id) {
          arrAllObjects.splice(i, 1);
        }
      }
      item.remove();
    }
    localStorage.setItem(localKey, JSON.stringify(arrAllObjects));
  };

  buttonBlock.append(buttonDone, buttonDelete);
  item.append(text, buttonBlock);

  return item;
}

export default CreateItem;
