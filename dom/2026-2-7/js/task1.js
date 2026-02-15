// Task 1
export function handleAddParagraph() {
    const content1 = document.querySelector(".content-1");
    const btn = document.querySelector(".content-1 .btn");

    btn.addEventListener("click", () => {
        const p = document.createElement("p");
        p.className = "text";
        p.textContent = "Hello DOM";
        content1.append(p);
    });
}
