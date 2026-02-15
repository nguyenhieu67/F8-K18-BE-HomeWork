import { handleAddParagraph } from "./task1.js";
import { handleAddItem } from "./task2.js";
import { handlePrintText } from "./task3.js";
import { handleAddTodo } from "./task4.js";
import { toggleTextColor } from "./task5.js";
import { handleDeleteItem } from "./task6.js";
import { handleToggleComplete } from "./task7.js";
import { handleSelectItem } from "./task8.js";
import { renderTodo } from "./task9.js";

const taskList = [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
];

const header = document.querySelector("#header");
// create navigation
function createNav() {
    const nav = document.createElement("nav");
    nav.className = "nav";
    const ul = document.createElement("ul");
    ul.className = "list";

    taskList.forEach((data) => {
        const li = document.createElement("li");
        li.className = "item";
        li.innerHTML = `<a href="#${data.toLowerCase()}" class="link">${data}</a>`;

        ul.append(li);
    });
    nav.append(ul);
    header.append(nav);
}

createNav();

// Create backToTop
function backToTop() {
    const btn = document.createElement("button");
    btn.className = "to-top-btn";
    btn.innerHTML = `<img class='to-top' src='https://media.istockphoto.com/id/1347743515/fr/photo/t%C3%A9l%C3%A9charger-le-rendu-3d-du-signe-bouton-dinterface-isol%C3%A9-sur-blanc.webp?a=1&b=1&s=612x612&w=0&k=20&c=USdZ63uvvNcqB7DDn46mXFhO6ggTbHvEoVZne27NDzg=' alt='Top'>`;
    document.body.append(btn);

    const toTop = document.querySelector(".to-top-btn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            toTop.classList.add("show");
        } else {
            toTop.classList.remove("show");
        }
    });

    toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        toTop.classList.remove("show");
    });
}

backToTop();

// -----------------------------------------------------------------

handleAddParagraph();
handleAddItem();
handlePrintText();
handleAddTodo();
toggleTextColor();
handleDeleteItem();
handleToggleComplete();
handleSelectItem();
renderTodo();
