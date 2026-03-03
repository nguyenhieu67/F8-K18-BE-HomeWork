// Task 9
const taskList = document.querySelector(".content-9 ul");
const btn = document.querySelector(".content-9 .btn");
const input = document.querySelector(".content-9 input");
const searchInput = document.querySelector(".search input");
const doneInput = document.querySelector(".checkbox input");

function handleFilterTask() {
    const keyword = searchInput.value.trim().toLowerCase();
    const isChecked = doneInput.checked;
    const items = taskList.querySelectorAll("li");

    items.forEach((item) => {
        const text = item.textContent.toLowerCase();
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
        handleFilterTask();
    }

    if (e.target.classList.contains("btn-delete")) {
        if (
            confirm(
                `Are you sure you want to delete ${item.childNodes[0].childNodes[0].data}?`,
            )
        ) {
            item.remove();
            handleFilterTask();
        }
    }
}

// Add task
function addTask() {
    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement("li");
    li.className = "text";
    Object.assign(li.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    });

    const span = document.createElement("span");
    span.textContent = value;

    // create button
    const div = document.createElement("div");
    div.className = "action-btn";
    div.innerHTML = `
            <button class="btn-done">Done</button>
            <button class="btn-delete">Delete</button>`;

    li.append(span, div);
    taskList.append(li);
}

export function renderTask() {
    // fix first space
    input.addEventListener("input", () => {
        if (input.value.startsWith(" ")) {
            input.value = input.value.trimStart();
            return;
        }
    });

    btn.addEventListener("click", () => {
        addTask();
        // Reset value
        input.value = "";
        input.focus();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTask();
            // Reset value
            input.value = "";
            input.focus();
        }
    });
}

taskList.addEventListener("click", handleAction);
searchInput.addEventListener("input", handleFilterTask);
doneInput.addEventListener("change", handleFilterTask);
