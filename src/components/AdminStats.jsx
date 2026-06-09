import { checkExpiry } from "../utils/expiryUtils";

function AdminStats({
  medicines,
  sales
}) {

  const totalMedicines =
    medicines.length;

  const lowStock =
    medicines.filter(
      (m) => m.qty <= 5
    ).length;

  const expired =
    medicines.filter(
      (m) =>
        checkExpiry(
          m.expiry
        ) === "expired"
    ).length;

  const totalUnits =
    medicines.reduce(
      (sum, medicine) =>
        sum + medicine.qty,
      0
    );

  return (
    <div id="adminStats">

      <div className="stat-item">
        <h3>
          Medicines
        </h3>

        <p>
          {totalMedicines}
        </p>
      </div>

      <div className="stat-item">
        <h3>
          Low Stock
        </h3>

        <p>
          {lowStock}
        </p>
      </div>

      <div className="stat-item">
        <h3>
          Expired
        </h3>

        <p>
          {expired}
        </p>
      </div>

      <div className="stat-item">
        <h3>
          Total Units
        </h3>

        <p>
          {totalUnits}
        </p>
      </div>

      <div className="stat-item">
        <h3>
          Sales
        </h3>

        <p>
          ₹{sales}
        </p>
      </div>

    </div>
  );
}

export default AdminStats;