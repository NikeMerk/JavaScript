import CreateItem from "./js/Create-item.js";
import AppTodo from "./js/App.js";
import CreateTitle from "./js/Create-title.js";
import CreateForm from "./js/Create-form.js";
import CreateList from "./js/Create-list.js";
const $container = document.getElementById("container");
let allLinks = document.querySelectorAll(".nav-link");
let localKey = "Me";

allLinks.forEach((link) => {
  link.onclick = (e) => {
    localKey = e.currentTarget.textContent;
    AppTodo({
      $container,
      CreateList,
      CreateTitle,
      CreateForm,
      CreateItem,
      localKey,
    });
  };
});

AppTodo({
  $container,
  CreateList,
  CreateTitle,
  CreateForm,
  CreateItem,
  localKey,
});
