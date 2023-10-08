function CreateForm() {
  let form = document.createElement("form");
  let formInput = document.createElement("input");
  let formButton = document.createElement("button");

  form.classList.add("form", "flex");
  formInput.classList.add("form-input");
  formButton.classList.add("button", "button-push");
  formButton.id = "button-push";
  formInput.setAttribute("type", "text");
  formButton.setAttribute("type", "submit");

  formInput.placeholder = "inner your make";
  formButton.textContent = "push";

  formButton.disabled = true;
  formInput.oninput = () => {
    formInput.value
      ? (formButton.disabled = false)
      : (formButton.disabled = true);
  };

  form.append(formInput, formButton);

  return {
    form,
    formInput,
    formButton,
  };
}

export default CreateForm;
