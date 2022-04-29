import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export function Header({ onClickCart }) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={"/React-Sneakers/"}>
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="React-Sneakers/img/logo.png"
            alt=""
          />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src="React-Sneakers/img/cart.svg"
            alt="Корзина"
          />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="cu-p mr-20">
          <Link to={"React-Sneakers/favorites"}>
            <img
              width={18}
              height={18}
              src="React-Sneakers/img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <Link to={"React-Sneakers/orders"}>
            <img
              width={18}
              height={18}
              src="React-Sneakers/img/user.svg"
              alt="Пользователь"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
