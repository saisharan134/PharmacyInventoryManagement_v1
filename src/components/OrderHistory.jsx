function OrderHistory({ orders }) {

  return (
    <div className="card">

      <h3>📋 Recent Orders</h3>

      {orders.length === 0 ? (

        <p>
          No Orders Yet
        </p>

      ) : (

        orders
          .slice()
          .reverse()
          .map((order, index) => (

            <div
              key={index}
              style={{
                padding: "10px",
                borderBottom:
                  "1px solid rgba(255,255,255,0.1)"
              }}
            >

              <p>
                <strong>
                  Date:
                </strong>{" "}
                {order.date}
              </p>

              <p>
                <strong>
                  Amount:
                </strong>{" "}
                ₹{order.amount}
              </p>

              {order.items &&
                order.items.length > 0 && (

                  <div
                    style={{
                      marginTop: "5px"
                    }}
                  >
                    <strong>
                      Items:
                    </strong>

                    <ul
                      style={{
                        marginLeft: "20px"
                      }}
                    >
                      {order.items.map(
                        (
                          item,
                          itemIndex
                        ) => (
                          <li
                            key={itemIndex}
                          >
                            {item.name}
                            {" "}
                            ×
                            {" "}
                            {item.qty}
                          </li>
                        )
                      )}
                    </ul>

                  </div>

                )}

            </div>

          ))

      )}

    </div>
  );
}

export default OrderHistory;