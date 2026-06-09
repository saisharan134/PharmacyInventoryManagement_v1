import { checkExpiry } from "../utils/expiryUtils";

function MedicineCard({
  medicine,
  addToCart
}) {

  const status = checkExpiry(
    medicine.expiry
  );

  const badgeClass =
    status === "expired"
      ? "expired"
      : status === "expiring"
      ? "expiring"
      : "valid";

  return (
    <div className="medicine">

      <img
        src={medicine.img}
        alt={medicine.name}
      />

      <h3>
        {medicine.name}
      </h3>

      <p>
        ₹{medicine.price}
      </p>

      <p>
        Category: {medicine.category}
      </p>

      <p>
        Stock: {medicine.qty}
      </p>

      <p>
        Expiry: {medicine.expiry}
      </p>

      <div
        className={`badge ${badgeClass}`}
        style={{
          display: "inline-block",
          marginBottom: "10px"
        }}
      >
        {status.toUpperCase()}
      </div>

      {medicine.qty <= 5 &&
        medicine.qty > 0 && (
          <p
            style={{
              color: "orange",
              fontWeight: "bold"
            }}
          >
            ⚠ Low Stock
          </p>
        )}

      {medicine.qty === 0 && (
        <p
          style={{
            color: "red",
            fontWeight: "bold"
          }}
        >
          ❌ Out Of Stock
        </p>
      )}

      {status === "expired" && (
        <p
          style={{
            color: "red",
            fontWeight: "bold"
          }}
        >
          Expired Medicine
        </p>
      )}

      {medicine.qty > 0 &&
        status !== "expired" && (
          <button
            onClick={() =>
              addToCart(medicine)
            }
          >
            Add To Cart
          </button>
        )}

    </div>
  );
}

export default MedicineCard;