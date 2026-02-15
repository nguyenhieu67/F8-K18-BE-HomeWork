const products = [
    { id: 1, name: "iPhone", price: 2000 },
    { id: 2, name: "Samsung", price: 1500 },
    { id: 3, name: "Xiaomi", price: 1000 },
    { id: 4, name: "Oppo", price: 1200 },
];

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 },
        ],
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 },
        ],
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 },
        ],
    },
];

const findTopRevenue = (arr, orders) => {
    if (!Array.isArray(arr) || !Array.isArray(orders)) {
        return "Invalid input";
    }
    if (arr.length === 0 || orders.length === 0) {
        return "Invalid input";
    }

    const productPriceMap = {};
    const productRevenueMap = {};
    const revenueMap = {};
    let topRevenue = 0;
    let topProductId = null;

    for (const product of products) {
        productPriceMap[product.id] = product.price;
        productRevenueMap[product.id] = product;
    }

    for (const order of orders) {
        for (const item of order.items) {
            const { productId, quantity } = item;
            const price = productPriceMap[productId];

            if (revenueMap[productId] === undefined) revenueMap[productId] = 0;

            revenueMap[productId] += price * quantity;
        }
    }

    for (const id in revenueMap) {
        let currentRevenue = revenueMap[id];

        if (currentRevenue > topRevenue) {
            topRevenue = currentRevenue;
            topProductId = id;
        }
    }

    return productRevenueMap[topProductId];
};

console.log(findTopRevenue(products, orders));

// After consulting the optimization method from chatgpt
// for (const order of orders) {
//     for (const item of order.items) {
//         const { productId, quantity } = item;
//         const price = productPriceMap[productId];

//         if (revenueMap[productId] === undefined) revenueMap[productId] = 0;

//         revenueMap[productId] += price * quantity;
//         if (revenueMap[productId] > topRevenue) {
//             topRevenue = revenueMap[productId];
//             topProductId = productId;
//         }
//     }
// }
