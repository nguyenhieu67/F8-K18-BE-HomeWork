// Task 2
export function handleAddItem() {
    const btn = document.querySelector(".content-2 .btn");
    const ul = document.querySelector(".content-2 ul");
    let count = 1;

    btn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.className = "text";
        li.innerHTML = `item ${count++}`;

        ul.append(li);
    });
}
