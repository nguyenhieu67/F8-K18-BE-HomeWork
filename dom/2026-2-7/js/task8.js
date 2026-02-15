// Task 8
export function handleSelectItem() {
    const btn = document.querySelector(".content-8 .btn");
    const ul = document.querySelector(".content-8 ul");
    let count = 1;

    btn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.className = "text";
        li.innerHTML = `item ${count++}`;
        li.style.cursor = "pointer";
        li.style.userSelect = "none";

        ul.append(li);

        const listItems = document.querySelectorAll(".content-8 ul li");

        listItems.forEach((item) => {
            item.onclick = () => {
                if (item.classList.contains("active")) {
                    item.classList.remove("active");
                    return;
                }

                listItems.forEach((li) => li.classList.remove("active"));

                item.classList.add("active");
            };
        });
    });
}
