// Task 4
export function handleAddTodo() {
    const btn = document.querySelector(".content-4 .btn");
    const input = document.querySelector(".content-4 input");
    const ul = document.querySelector(".content-4 ul");

    input.addEventListener("input", () => {
        if (input.value.startsWith(" ")) {
            input.value = input.value.trimStart();
            return;
        }
    });

    btn.addEventListener("click", () => {
        const value = input.value.trim();
        if (!value) return;
        const li = document.createElement("li");
        li.className = "text";
        li.style.listStyle = "number";
        li.textContent = value;

        ul.append(li);
        // Reset value
        input.value = "";
        input.focus();
    });
}
