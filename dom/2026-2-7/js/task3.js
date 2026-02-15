// Task 3
export function handlePrintText() {
    const content3 = document.querySelector(".content-3");
    const btn = document.querySelector(".content-3 .btn");
    const input = document.querySelector(".content-3 input");
    const wrapper = document.createElement("div");

    btn.addEventListener("click", () => {
        const value = input.value.trim();
        if (!value) return;
        const p = document.createElement("p");
        p.className = "text";
        p.textContent = value;

        wrapper.append(p);
        // Reset value
        input.value = "";
        input.focus();
    });

    content3.append(wrapper);
}
