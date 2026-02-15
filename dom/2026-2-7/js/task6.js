// Task 6
export function handleDeleteItem() {
    const btn = document.querySelector(".content-6 .btn");
    let ul = document.querySelector(".content-6 ul");
    let count = 1;

    btn.style.width = "100%";

    // Add item
    btn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.className = "text";
        li.innerHTML = `item ${count++} <span class="delete">&times</span>`;
        ul.append(li);
    });

    // Delete item
    ul.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest(".delete");
        if (deleteBtn) deleteBtn.closest("li").remove();
    });
}
