
// Câu 1

function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2
const products = [
  new Product(1, "iPhone 17 Promax", 32000000, 10, "Phones", true),
  new Product(2, "Samsung S24", 28000000, 0, "Phones", true),
  new Product(3, "AirPods Pro", 6000000, 25, "Accessories", true),
  new Product(4, "Apple Watch", 12000000, 5, "Accessories", false),
  new Product(5, "MacBook Air M2", 35000000, 3, "Laptops", true),
  new Product(6, "Dell XPS 13", 30000000, 0, "Laptops", true)
];


// Câu 3
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", nameAndPrice);


// Câu 4
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);


// Câu 5
const hasExpensiveProduct = products.some(p => p.price > 30000000);
if (hasExpensiveProduct.length > 0) {
  const names = hasExpensiveProduct.map(p => p.name).join(", ");
  console.log("Câu 5: Có");
  console.log("Tên sản phẩm:", names);
} else {
  console.log("Câu 5: Không có");
}

// Câu 6
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log(
  "Câu 6:",
  allAccessoriesAvailable ? "Có" : "Không"
);

// Câu 7
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Câu 7:");
console.log("Tổng giá trị tồn kho:", totalInventoryValue);


// Câu 8: 
console.log("Câu 8:");
for (const p of products) {
  console.log(
    `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
  );
}

// Câu 9:
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(key + ":", products[0][key]);
}

// Câu 10
const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:");
console.log("Tên sản phẩm đang bán và còn hàng:", sellingAndInStockNames);

