function buildMedicineMap(
  medicines
) {

  const medicineMap =
    new Map();

  medicines.forEach(
    (medicine) => {

      medicineMap.set(
        medicine.name.toLowerCase(),
        medicine
      );

    }
  );

  return medicineMap;
}

export default buildMedicineMap;