import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  console.log(CartItem);
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  // prodcut qty t
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">
                No se han agregado artículos en el carrito
              </h1>
            )}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.000 * {item.qty}
                      <span>${productQty}.000</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"
                          />
                        </svg>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path fill="red" d="M5 11v2h14v-2H5Z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Resumen de la Compra</h2>
            <div className=" d_flex z-flex">
              <h4>Precio Total :</h4>
              <h3> {money.format(totalPrice)}</h3>
              <button className="pink-b">
                <Link to="/ConcludeBuy" style={{ color: "white" }}>
                  Realizar Compra
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
