import {
  createContext,
  useContext,
  useState
} from "react";

const PharmacyContext =
  createContext();

export const PharmacyProvider = ({
  children
}) => {

  const [medicines, setMedicines] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "medicines"
        )
      ) || []
    );

  const [cart, setCart] =
    useState([]);

  const [orders, setOrders] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || []
    );

  const [users, setUsers] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || []
    );

  const [sales, setSales] =
    useState(
      Number(
        localStorage.getItem(
          "sales"
        )
      ) || 0
    );

  return (
    <PharmacyContext.Provider
      value={{
        medicines,
        setMedicines,
        cart,
        setCart,
        orders,
        setOrders,
        users,
        setUsers,
        sales,
        setSales
      }}
    >
      {children}
    </PharmacyContext.Provider>
  );
};

export const usePharmacy = () =>
  useContext(
    PharmacyContext
  );

export default PharmacyContext;