export const createItem = (obj) => {
  const item = document.createElement("li");
  const itemText = document.createElement("p")
  const blockButtons = document.createElement("div");
  const buttonDone = document.createElement("button");
  const buttonDelete = document.createElement("button");

  itemText.textContent = obj.name
  buttonDone.textContent = "done"
  buttonDelete.textContent = "delete"

  blockButtons.append(buttonDone, buttonDelete)
  item.append(itemText, blockButtons)

  return item
}