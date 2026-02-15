// Task 5
export function toggleTextColor() {
    const btn = document.querySelector(".content-5 .btn");
    const ul = document.querySelector(".content-5 ul");
    let count = 1;

    btn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.className = "text";
        li.innerHTML = `item ${count++}`;
        li.style.cursor = "pointer";
        li.style.userSelect = "none";

        li.onclick = () => {
            let color = li.style.color;

            color !== "red"
                ? (li.style.color = "red")
                : (li.style.color = "black");
        };
        ul.append(li);
    });
}
