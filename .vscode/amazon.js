// Sample product data
const products = [
    { name: "Product 1", price: "$19.99", imageUrl: "product1.jpg" },
    { name: "Product 2", price: "$29.99", imageUrl: "product2.jpg" },
    { name: "Product 3", price: "$39.99", imageUrl: "product3.jpg" },
    // Add more products
];

// Function to create product cards and display them on the page
function displayProducts() {
    const productList = document.querySelector(".product-list");

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

// Call the function to display products
displayProducts();
