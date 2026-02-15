// Task 9
const listItem = document.querySelector(".content-9 ul");
const searchInput = document.querySelector(".search input");
const doneInput = document.querySelector(".checkbox input");

function handleFilterTodo() {
    const keyword = searchInput.value.trim().toLowerCase();
    const isChecked = doneInput.checked;
    const items = listItem.querySelectorAll("li");

    items.forEach((item) => {
        const text = item.querySelector("span").textContent.toLowerCase();
        const isMatchSearch = text.includes(keyword);
        const isMatchDone = !isChecked || item.classList.contains("done");

        item.style.display = isMatchSearch && isMatchDone ? "flex" : "none";
    });
}

function handleAction(e) {
    const item = e.target.closest("li");
    if (!item) return;

    if (e.target.classList.contains("btn-done")) {
        item.classList.toggle("done");
        handleFilterTodo();
    }

    if (e.target.classList.contains("btn-delete")) {
        item.remove();
        handleFilterTodo();
    }
}

export function renderTodo() {
    const btn = document.querySelector(".content-9 .btn");
    const input = document.querySelector(".content-9 input");

    // fix first space
    input.addEventListener("input", () => {
        if (input.value.startsWith(" ")) {
            input.value = input.value.trimStart();
            return;
        }
    });

    // Add task
    btn.addEventListener("click", () => {
        const value = input.value.trim();
        if (!value) return;

        const li = document.createElement("li");
        li.className = "text";
        li.style.display = "flex";
        li.style.alignItems = "center";

        li.innerHTML = `<span>${value}</span>
        <div class="action-btn">
            <button class="btn-done">Done</button>
            <button class="btn-delete">Delete</button>
        </div>`;

        listItem.append(li);

        // Reset value
        input.value = "";
        input.focus();
    });
}

listItem.addEventListener("click", handleAction);
searchInput.addEventListener("input", handleFilterTodo);
doneInput.addEventListener("change", handleFilterTodo);
