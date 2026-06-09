export function generateRandomExpiry() {

  const date = new Date();

  const monthsToAdd =
    Math.floor(
      Math.random() * 18
    ) + 6;

  date.setMonth(
    date.getMonth() +
      monthsToAdd
  );

  return date
    .toISOString()
    .split("T")[0];
}

export function checkExpiry(
  expiryDate
) {

  const today =
    new Date();

  const expiry =
    new Date(
      expiryDate
    );

  const difference =
    (expiry - today) /
    (1000 *
      60 *
      60 *
      24);

  if (difference < 0) {
    return "expired";
  }

  if (difference < 30) {
    return "expiring";
  }

  return "valid";
}