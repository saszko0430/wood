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
      </діва>

      <Div style = {{margintop: 40 }}>
        <H2&gt; Дод'яті Новиш 2>
        <Форма onSubmit = {handleaddproduct}>
          <введення
            заповнювач = ""
            значення = {newProduct.Name}
            onchange = {(e) =&gt; setNewProduct ({... newProduct, name: e.target.value })}
            необхідний
          />
          <введення
            заповнювач = ""
            type = "число"
            значення = {newProduct.price}
            onchange = {(e) =&gt; setNewProduct ({... newProduct, ціна: e.target.value })}
            необхідний
          />
          <введення
            stacolder = "зображеня (url)"
            значення = {newProduct.image}
            onchange = {(e) =&gt; setNewProduct ({... newProduct, зображення: e.target.value })}
            необхідний
          />
          <введення
            заповнювач = ""
            значення = {newProduct.description}
            onchange = {(e) =&gt; setNewProduct ({... newProduct, Опис: e.target.value })}
            необхідний
          />
          <тип кнопки = "подати"&gt; Дод'яті >
        </форма>
      </діва>
    </діва>
  );
}
