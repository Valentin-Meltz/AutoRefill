// Get all products
export async function getProducts() {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    return data;
}

// Get a single product by ID
export async function getProduct(id) {
    const res = await fetch(`http://localhost:8080/products/${id}`);
    const data = await res.json();
    return data;
}