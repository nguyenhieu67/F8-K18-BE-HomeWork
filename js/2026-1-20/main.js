// const products = [
//     { id: 1, name: "iPhone", price: 2000 },
//     { id: 2, name: "Samsung", price: 1500 },
//     { id: 3, name: "Xiaomi", price: 1000 },
//     { id: 4, name: "Oppo", price: 1200 },
// ];

// const orders = [
//     {
//         id: 1,
//         items: [
//             { productId: 1, quantity: 2 },
//             { productId: 2, quantity: 1 },
//         ],
//     },
//     {
//         id: 2,
//         items: [
//             { productId: 1, quantity: 1 },
//             { productId: 3, quantity: 3 },
//         ],
//     },
//     {
//         id: 3,
//         items: [
//             { productId: 2, quantity: 2 },
//             { productId: 4, quantity: 1 },
//         ],
//     },
// ];

// const createHashMap = (arr) => {
//     if (!Array.isArray(arr)) return console.error("Invalid input");
//     const map = {};
//     arr.forEach(item => map[item.id] = item)
//     return map;
// };

// const findTopRevenue = (arr, orders) => {
//     if (!Array.isArray(arr) || !Array.isArray(orders)) {
//         return "Invalid input";
//     }
//     if (arr.length === 0 || orders.length === 0) {
//         return "Invalid input";
//     }

//     const productMap = createHashMap(arr);
//     const revenueMap = {};
//     let topRevenue = 0;
//     let topProductId = null;

//     for (const order of orders) {
//         for (const item of order.items) {
//             const { productId, quantity } = item;
//             const product = productMap[productId];
//             if (!product) return;

//             if (!revenueMap[productId]) {
//                 revenueMap[productId] = 0;
//             }

//             revenueMap[productId] += product.price * quantity;
//             if (revenueMap[productId] > topRevenue) {
//                 topRevenue = revenueMap[productId];
//                 topProductId = productId;
//             }
//         }
//     }

//     return productMap[topProductId];
// };

// console.log(findTopRevenue(products, orders));

const products = [
    { id: 1, name: "iPhone", price: 2000, quantity: 10 },
    { id: 2, name: "Samsung", price: 1500, quantity: 10 },
    { id: 3, name: "Xiaomi", price: 1000, quantity: 10 },
    { id: 4, name: "Oppo", price: 1200, quantity: 10 },
    { id: 5, name: "Vertu", price: 5000, quantity: 10 },
];
const orders = [];
const createHashMap = (arr) => {
    if (!Array.isArray(arr)) return;
    const map = {};

    // Before
    // for (let i = 0; i < arr.length; i++) {
    //     const item = arr[i];
    //     map[item.id] = item;
    // }

    // After
    arr.forEach((item) => (map[item.id] = item));
    return map;
};
const createOrder = (productId, orderQuantity) => {
    if (
        typeof productId !== "number" ||
        (isNaN(productId) && typeof orderQuantity !== "number") ||
        isNaN(orderQuantity)
    )
        return console.log("Please enter a valid number.");
    const productMap = createHashMap(products);
    const product = productMap[productId];
    if (!product) return console.error("Product not found");
    if (product.quantity < orderQuantity) return console.error("Out of stock");
    let nextId = 1;
    const newOrder = {
        id:
            orders.length === 0
                ? nextId
                : (nextId = orders[orders.length - 1].id + 1),
        productId,
        orderQuantity,
    };
    orders.push(newOrder);
    product.quantity -= orderQuantity;
};
const updateOrder = (orderId, quantity) => {
    if (
        typeof orderId !== "number" ||
        typeof quantity !== "number" ||
        isNaN(orderId) ||
        isNaN(quantity)
    ) {
        return console.error("Please enter a valid number.");
    }
    if (quantity < 0)
        return console.error("Please enter a quantity greater than 0.");

    const orderMap = createHashMap(orders);
    const order = orderMap[orderId];
    if (!order) return console.error("Order not found");

    const productMap = createHashMap(products);
    const product = productMap[order.productId];
    if (!product) return console.error("Product not found");

    const oldQuantity = order.orderQuantity;
    const newQuantity = quantity - oldQuantity;

    if (newQuantity > 0) {
        if (product.quantity < newQuantity)
            return console.error("Out of stock");
        product.quantity -= newQuantity;
    }
    if (newQuantity < 0) product.quantity += -newQuantity;
    order.orderQuantity = quantity;
};
const deleteOrder = (orderId) => {
    if (typeof orderId !== "number" || isNaN(orderId)) {
        return console.error("Please enter a valid number.");
    }
    const orderMap = createHashMap(orders);
    const order = orderMap[orderId];
    if (!order) return console.error("Order not found");

    // Before
    // for (let i = 0; i < orders.length; i++) {
    //     const item = orders[i];
    //     if (item.id === orderId) {
    //         orders.splice(i, 1);
    //         break;
    //     }
    // }

    // After
    const findId = orders.indexOf(order);
    orders.splice(findId, 1);

    const productMap = createHashMap(products);
    const product = productMap[order.productId];
    if (!product) return console.error("Product not found");
    product.quantity += order.orderQuantity;
};

createOrder(1, 3);
// [ { id: 1, productId: 1, orderQuantity: 3 } ]
//   { id: 1, name: 'iPhone', price: 2000, quantity: 7 }
createOrder(4, 2);
// [{ id: 1, productId: 1, orderQuantity: 3 },
//  { id: 2, productId: 4, orderQuantity: 2 } ]
//  { id: 1, name: 'iPhone', price: 2000, quantity: 7 },
//  { id: 4, name: 'Oppo', price: 1200, quantity: 8 },
createOrder(3, 2);
// [ { id: 1, productId: 1, orderQuantity: 3 },
//   { id: 2, productId: 4, orderQuantity: 2 },
//   { id: 3, productId: 3, orderQuantity: 2 }]
//   { id: 1, name: 'iPhone', price: 2000, quantity: 7 },
//   { id: 3, name: 'Xiaomi', price: 1000, quantity: 8 },
//   { id: 4, name: 'Oppo', price: 1200, quantity: 8 },
createOrder(6, 2);
// Product not found
updateOrder(1, 1);
// { id: 1, productId: 1, orderQuantity: 1 },
// { id: 1, name: 'iPhone', price: 2000, quantity: 9 },
updateOrder(2, 3);
// { id: 2, productId: 4, orderQuantity: 3 },
// { id: 4, name: 'Oppo', price: 1200, quantity: 7 },
updateOrder(5, 5);
// Order not found
deleteOrder(1);
// [ { id: 2, productId: 4, orderQuantity: 3 },
//   { id: 3, productId: 3, orderQuantity: 2 }]
//   { id: 1, name: 'iPhone', price: 2000, quantity: 10 },
deleteOrder(2);
// [ { id: 3, productId: 3, orderQuantity: 2 } ]
//   { id: 2, name: 'Samsung', price: 1500, quantity: 10 },
deleteOrder(6);
// Order not found
// console.log(orders, products);
