const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const logger = (item, id, name, customize) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <p>${id}: ${item.id}</p>
    <p>${name}: ${item.username || item.name}</p>
    <p>${customize}: ${item.role ?? ""}</p>
    `;

    return div;
};

// Task 1:
const loginForm = $(".login-form");
const formMessage = $(".form-message");
const wrapMsg = $(".wrap-msg");

const accounts = [
    { id: 1, username: "admin", role: "ADMIN", password: 123456 },
    { id: 2, username: "duchieu", role: "DUCHIEU", password: 123456 },
    {
        id: 1,
        username: "f8.fullstack",
        role: "F8.FULLSTACK",
        password: 123456,
    },
    { id: 1, username: "javascript", role: "JAVASCRIPT", password: 123456 },
];

const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const isAccount = accounts.find(
            (account) =>
                account.username === username && account.password === password,
        );

        setTimeout(() => {
            if (isAccount) resolve(isAccount);
            else reject("Incorrect username or password");
        }, 2000);
    });
};

const handelLogin = () => {
    let isLogin = false;

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isLogin) return;
        isLogin = true;

        formMessage.textContent = "Sending login request...";

        const usernameInput = e.target.elements.username.value;
        const passwordInput = +e.target.elements.password.value;

        const loginP = login(usernameInput, passwordInput);

        loginP
            .then((user) => {
                formMessage.textContent = `Login successful ${user.role}:`;
                wrapMsg.replaceChildren(logger(user, "Id", "Username", "Role"));
                isLogin = false;
            })
            .catch((error) => {
                formMessage.textContent = error;
                isLogin = false;
            });
    });
};

handelLogin();

// Task 2
const productForm = $(".product-form");
const wrapProductMsg = $(".wrap-product-msg");
const productMessage = $(".product-message");

const products = [
    { id: 1, name: "iPhone 15 Pro", price: 999, stock: 1 },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 1199, stock: 1 },
    { id: 3, name: "Google Pixel 8 Pro", price: 899, stock: 1 },
    { id: 4, name: "Xiaomi 14", price: 749, stock: 1 },
    { id: 5, name: "OnePlus 12", price: 799, stock: 1 },
    { id: 6, name: "Oppo Find X7 Ultra", price: 950, stock: 1 },
    { id: 7, name: "Sony Xperia 1 V", price: 1299, stock: 1 },
];

let orderTimeout;
let isOrdering = true;

const getProduct = (productId) => {
    const matchProduct = products.find((product) => product.id === productId);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (matchProduct) resolve(matchProduct);
            else reject("Product not available");
        }, 1000);
    });
};

const processPayment = (product) => {
    productMessage.textContent = "In stock valid, Checkout in progress...";
    const currentStock = product.stock;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (currentStock > 0)
                resolve({ ...product, stock: currentStock - 1 });
            else reject(((wrapProductMsg.innerHTML = ""), "Out of stock"));
        }, 1500);
    });
};

const createOrder = (product) => {
    productMessage.textContent =
        "Payment successful, Order creation in progress...";
    const productIdx = products.findIndex(
        (inventoryProduct) => inventoryProduct.id === product.id,
    );
    products[productIdx].stock = product.stock;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product);
        }, 2000);
    });
};

const handleProductSystem = () => {
    productForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = e.target.elements.product.value;
        if (!value) return;

        if (isOrdering) {
            productMessage.textContent = "Checking inventory...";
            if (!orderTimeout) {
                orderTimeout = setTimeout(() => {
                    orderTimeout = null;
                }, 1000);
            }
        }

        const productId = +value;

        const orderFlowP = getProduct(productId);
        orderFlowP
            .then(processPayment)
            .then(createOrder)
            .then((product) => {
                productMessage.textContent = "Order placed successfully!";
                wrapProductMsg.replaceChildren(
                    logger(
                        product,
                        "OrderId",
                        "productName",
                        `status: "SUCCESS"`,
                    ),
                );
            })
            .catch((error) => {
                productMessage.textContent = error;
            });
    });
};

handleProductSystem();

// Task 3
const startCountdown = () => {
    const countdownForm = $(".countdown-form");
    const countdownMsg = $(".countdown-message");

    let interval;

    countdownForm.addEventListener("submit", (e) => {
        e.preventDefault();

        clearInterval(interval);

        const value = +e.target.elements.countdown.value;
        if (!value) return;

        let count = value;

        interval = setInterval(() => {
            countdownMsg.textContent = count;

            if (count === 0) {
                countdownMsg.textContent = "Time's up!";
                clearInterval(interval);
            }

            count--;
        }, 1000);
    });
};

startCountdown();
