import { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import MedicineCard from "../components/MedicineCard";
import Cart from "../components/Cart";
import OrderHistory from "../components/OrderHistory";
import FilterPanel from "../components/FilterPanel";

import defaultMedicines from "../data/defaultMedicines";

import Stack from "../utils/Stack";
import Queue from "../utils/Queue";

import { checkExpiry } from "../utils/expiryUtils";

function BuyerDashboard({ setPage }) {

  const [medicines, setMedicines] = useState(
    JSON.parse(
      localStorage.getItem("medicines")
    ) || defaultMedicines
  );

  const [cart, setCart] = useState([]);

  const [orders, setOrders] = useState(
    JSON.parse(
      localStorage.getItem("orders")
    ) || []
  );

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("none");

  const cartStack =
    useRef(new Stack());

  const orderQueue =
    useRef(new Queue());

  useEffect(() => {

    if (
      !localStorage.getItem(
        "medicines"
      )
    ) {

      localStorage.setItem(
        "medicines",
        JSON.stringify(
          defaultMedicines
        )
      );

    }

    const savedTheme =
      localStorage.getItem(
        "theme"
      );

    if (
      savedTheme === "dark"
    ) {

      document.body.classList.add(
        "dark"
      );

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "medicines",
      JSON.stringify(
        medicines
      )
    );

  }, [medicines]);

  const addToCart = (medicine) => {

    if (
      checkExpiry(
        medicine.expiry
      ) === "expired"
    ) {

      alert(
        "Medicine Expired"
      );

      return;
    }

    if (
      medicine.qty <= 0
    ) {

      alert(
        "Out Of Stock"
      );

      return;
    }

    const updatedMedicines =
      medicines.map((m) =>
        m.name ===
        medicine.name
          ? {
              ...m,
              qty:
                m.qty - 1
            }
          : m
      );

    setMedicines(
      updatedMedicines
    );

    const item = {
      ...medicine,
      qty: 1
    };

    setCart((prev) => [
      ...prev,
      item
    ]);

    cartStack.current.push(
      item
    );
  };

  const removeCart = (index) => {

    const item =
      cart[index];

    const updatedMedicines =
      medicines.map((m) =>
        m.name ===
        item.name
          ? {
              ...m,
              qty:
                m.qty +
                item.qty
            }
          : m
      );

    setMedicines(
      updatedMedicines
    );

    const updatedCart =
      [...cart];

    updatedCart.splice(
      index,
      1
    );

    setCart(
      updatedCart
    );
  };

  const undoCart = () => {

    const item =
      cartStack.current.pop();

    if (!item) {

      alert(
        "Nothing To Undo"
      );

      return;
    }

    const updatedCart =
      [...cart];

    updatedCart.pop();

    setCart(
      updatedCart
    );

    const updatedMedicines =
      medicines.map((m) =>
        m.name ===
        item.name
          ? {
              ...m,
              qty:
                m.qty + 1
            }
          : m
      );

    setMedicines(
      updatedMedicines
    );
  };

  const total =
    cart.reduce(
      (
        sum,
        item
      ) =>
        sum +
        item.price *
          item.qty,
      0
    );

  const checkout = () => {

    if (
      cart.length === 0
    ) {

      alert(
        "Cart Is Empty"
      );

      return;
    }

    const order = {
      date:
        new Date().toLocaleString(),
      amount:
        total,
      items: cart
    };

    orderQueue.current.enqueue(
      order
    );

    const updatedOrders =
      [
        ...orders,
        order
      ];

    setOrders(
      updatedOrders
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(
        updatedOrders
      )
    );

    let sales =
      Number(
        localStorage.getItem(
          "sales"
        )
      ) || 0;

    sales += total;

    localStorage.setItem(
      "sales",
      sales
    );

    alert(
      "Order Successful"
    );

    setCart([]);
  };

  const filteredMedicines =
    medicines
      .filter(
        (medicine) =>
          (category ===
            "All" ||
            medicine.category ===
              category) &&
          medicine.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      )
      .sort(
        (
          a,
          b
        ) => {

          if (
            sort === "low"
          ) {
            return (
              a.price -
              b.price
            );
          }

          if (
            sort ===
            "high"
          ) {
            return (
              b.price -
              a.price
            );
          }

          return 0;
        }
      );

  return (
    <>
      <Header title="Medical Store" />

      <div className="container">

        <FilterPanel
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        <button
          onClick={undoCart}
          style={{
            marginBottom:
              "20px"
          }}
        >
          Undo Last Add
        </button>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent:
              "center"
          }}
        >

          {filteredMedicines.map(
            (
              medicine,
              index
            ) => (

              <MedicineCard
                key={index}
                medicine={
                  medicine
                }
                addToCart={
                  addToCart
                }
              />

            )
          )}

        </div>

        <Cart
          cart={cart}
          removeCart={
            removeCart
          }
          total={total}
          checkout={
            checkout
          }
        />

        <OrderHistory
          orders={orders}
        />

        <button
  onClick={() => {
    localStorage.removeItem("currentUser");
    setPage("login");
  }}
>
  Logout
</button>

      </div>
    </>
  );
}

export default BuyerDashboard;