function Cart({
  cart,
  removeCart,
  total,
  checkout
}) {

  return (
    <div className="card">

      <h3>🛒 Your Cart</h3>

      {cart.length === 0 ? (
        <p>
          Cart is Empty
        </p>
      ) : (
        <div id="cart">

          {cart.map(
            (item, index) => (

              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems:
                    "center",
                  padding: "10px",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.1)"
                }}
              >

                <div>

                  <strong>
                    {item.name}
                  </strong>

                  <br />

                  Qty:
                  {" "}
                  {item.qty}

                  <br />

                  ₹
                  {item.price}

                </div>

                <button
                  onClick={() =>
                    removeCart(index)
                  }
                  style={{
                    background:
                      "red"
                  }}
                >
                  Remove
                </button>

              </div>

            )
          )}

        </div>
      )}

      <div
        style={{
          marginTop: "15px",
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >
        Total: ₹{total}
      </div>

      <button
        onClick={checkout}
        style={{
          width: "100%",
          marginTop: "15px"
        }}
      >
        Checkout
      </button>

    </div>
  );
}

export default Cart;