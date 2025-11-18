let products = [
    { name: "Laptop", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "Camera", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Jacket", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Book", category: "books" },
    { name: "Notebook", category: "books" },
    { name: "Fan", category: "electronics" },
    { name: "T-Shirt", category: "clothing" }
];

let list = document.getElementById("productList");

function showProducts(items) {
    list.innerHTML = "";
    items.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item.name + " (" + item.category + ")";
        list.appendChild(li);
    });
}

showProducts(products); // show all by default

// Filter by category
document.getElementById("allBtn").addEventListener("click", function () {
    showProducts(products);
});

document.getElementById("elecBtn").addEventListener("click", function () {
    let result = products.filter(function (p) {
        return p.category === "electronics";
    });
    showProducts(result);
});

document.getElementById("clothBtn").addEventListener("click", function () {
    let result = products.filter(function (p) {
        return p.category === "clothing";
    });
    showProducts(result);
});

// Bonus: Search box
document.getElementById("searchBox").addEventListener("input", function () {
    let text = this.value.toLowerCase();

    let result = products.filter(function (p) {
        return p.name.toLowerCase().includes(text);
    });

    showProducts(result);
});
