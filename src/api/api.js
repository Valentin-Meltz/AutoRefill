import env from "env";

const API_URL = env.BACKEND_API_URL;


// Get all products
export async function getProducts() {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    return data;
}

// Get a single product by ID
export async function getProduct(id) {
    const res = await fetch(`${API_URL}/products/${id}`);
    const data = await res.json();
    return data;
}

// Create new user account
export async function createUser({firstName, lastName, email, password, address, postalCode, city, phone}) {
    const res = await fetch(`${API_URL}/user/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({firstName, lastName, email, password, address, postalCode, city, phone})
    });
    const data = await res.json();
    return data;
}

// Get user details by ID
export async function getUser(id) {
    const res = await fetch (`${API_URL}/user/${id}`);
    const data = await res.json();
    return data;
}

// Update user details by ID


// Check user login credentials
export async function checkLogin({ email, password }) {
  const res = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const message = (data && (data.error || data.message)) || `Erreur ${res.status}`;
    throw new Error(message);
  }

  return data;
}