import { useState } from "react";

import Header from "../components/Header";
import AdminStats from "../components/AdminStats";

import defaultMedicines from "../data/defaultMedicines";

import {
  generateRandomExpiry
} from "../utils/expiryUtils";

function AdminDashboard({ setPage }) {

  const [medicines, setMedicines] = useState(
    JSON.parse(
      localStorage.getItem("medicines")
    ) || defaultMedicines
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] =
    useState("Tablet");

  const [image, setImage] =
    useState("");

  const sales =
    Number(
      localStorage.getItem("sales")
    ) || 0;

  const addMedicine = () => {

    if (
      !name.trim() ||
      !price ||
      !qty
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    const exists =
      medicines.find(
        (m) =>
          m.name.toLowerCase() ===
          name.toLowerCase()
      );

    if (exists) {
      alert(
        "Medicine already exists"
      );
      return;
    }

    const newMedicine = {
      name,
      price: Number(price),
      qty: Number(qty),
      category,
      expiry:
        generateRandomExpiry(),
      img:
        image ||
        `https://via.placeholder.com/200x130?text=${name}`
    };

    const updatedMedicines = [
      ...medicines,
      newMedicine
    ];

    setMedicines(
      updatedMedicines
    );

    localStorage.setItem(
      "medicines",
      JSON.stringify(
        updatedMedicines
      )
    );

    setName("");
    setPrice("");
    setQty("");
    setCategory("Tablet");
    setImage("");

    alert(
      "Medicine Added Successfully"
    );
  };

  const deleteMedicine = (
    index
  ) => {

    const updatedMedicines =
      medicines.filter(
        (_, i) => i !== index
      );

    setMedicines(
      updatedMedicines
    );

    localStorage.setItem(
      "medicines",
      JSON.stringify(
        updatedMedicines
      )
    );
  };

  return (
    <>
      <Header title="Admin Dashboard" />

      <div className="container">

        <div className="card">

          <h2>
            Add Medicine
          </h2>

          <input
            type="text"
            placeholder="Medicine Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) =>
              setQty(
                e.target.value
              )
            }
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
          >
            <option>
              Tablet
            </option>

            <option>
              Syrup
            </option>

            <option>
              Injection
            </option>

            <option>
              Device
            </option>

            <option>
              Supplement
            </option>

          </select>

          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={image}
            onChange={(e) =>
              setImage(
                e.target.value
              )
            }
          />

          <button
            onClick={
              addMedicine
            }
          >
            Add Medicine
          </button>

        </div>

        <AdminStats
          medicines={medicines}
          sales={sales}
        />

        <div className="card">

          <h2>
            Inventory List
          </h2>

          {medicines.map(
            (
              medicine,
              index
            ) => (

              <div
                key={index}
                style={{
                  padding: "10px",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.1)"
                }}
              >

                <strong>
                  {
                    medicine.name
                  }
                </strong>

                <br />

                ₹
                {
                  medicine.price
                }

                {" | "}

                Qty:
                {
                  medicine.qty
                }

                {" | "}

                {
                  medicine.category
                }

                <br />

                Exp:
                {
                  medicine.expiry
                }

                <br />

                <button
                  style={{
                    marginTop:
                      "8px",
                    background:
                      "red"
                  }}
                  onClick={() =>
                    deleteMedicine(
                      index
                    )
                  }
                >
                  Delete
                </button>

              </div>

            )
          )}

        </div>

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

export default AdminDashboard;