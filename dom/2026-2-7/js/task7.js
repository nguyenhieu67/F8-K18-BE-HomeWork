// Task 7
export function handleToggleComplete() {
    const btn = document.querySelector(".content-7 .btn");
    const input = document.querySelector(".content-7 input");
    const ul = document.querySelector(".content-7 ul");

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
        li.innerHTML = `<span>${value}</span> <button class="delete">Delete</button>`;

        ul.append(li);
        // Reset value
        input.value = "";
        input.focus();
    });

    // change state
    ul.addEventListener("click", (e) => {
        const textBtn = e.target.closest("li span");
        if (!textBtn) return;

        if (!e.target.closest(".state")) {
            textBtn.classList.add("state");
        } else {
            textBtn.classList.remove("state");
        }
    });

    // Delete task
    ul.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest(".delete");

        if (deleteBtn) deleteBtn.closest("li").remove();
    });
}
