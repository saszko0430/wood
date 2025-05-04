import React, { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Дерев'яна сова",
    price: 450,
    image: "https://via.placeholder.com/200x150.png?text=Сова",
    description: "Ручна робота з дуба. Висота 15 см."
  },
  {
    id: 2,
    name: "Фігурка ведмедя",
    price: 600,
    image: "https://via.placeholder.com/200x150.png?text=Ведмідь",
    description: "Масив сосни. Висота 20 см."
  }
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [orderInfo, setOrderInfo] = useState({ name: "", phone: "" });
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`Замовлення оформлено! Ім'я: ${orderInfo.name}, Телефон: ${orderInfo.phone}`);
    setCart([]);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newId = products.length + 1;
    setProducts([
      ...products,
      { ...newProduct, id: newId, price: Number(newProduct.price) }
    ]);
    setNewProduct({ name: "", price: "", image: "", description: "" });
  };

  return (
    <div className="p-4">
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>Магазин дерев'яних фігур</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: 10, width: 250 }}>
            <img src={product.image} alt={product.name} style={{ width: "100%" }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price} грн</strong>
            <button onClick={() => addToCart(product)}>Додати в кошик</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Кошик</h2>
        {cart.length === 0 ? (
          <p>Ваш кошик порожній.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.name} — {item.price} грн
                </li>
              ))}
            </ul>
            <p>Загалом: {total} грн</p>
            <form onSubmit={handleOrderSubmit}>
              <input
                placeholder="Ім’я"
                value={orderInfo.name}
                onChange={(e) => setOrderInfo({ ...orderInfo, name: e.target.value })}
                required
              />
              <input
                placeholder="Телефон"
                value={orderInfo.phone}
                onChange={(e) => setOrderInfo({ ...orderInfo, phone: e.target.value })}
                required
              />
              <button type="submit">Оформити замовлення</button>
            </form>
          </>
        )}
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Додати новий товар</h2>
        <form onSubmit={handleAddProduct}>
          <input
            placeholder="Назва"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            required
          />
          <input
            placeholder="Ціна"
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            required
          />
          <input
            placeholder="Зображення (URL)"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            required
          />
          <input
            placeholder="Опис"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            required
          />
          <button type="submit">Додати товар</button>
        </form>
      </div>
    </div>
  );
}