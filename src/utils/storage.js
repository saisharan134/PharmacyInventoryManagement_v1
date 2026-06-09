export const getData = (
  key,
  defaultValue = null
) => {

  try {

    const data =
      localStorage.getItem(key);

    return data
      ? JSON.parse(data)
      : defaultValue;

  } catch (error) {

    console.error(
      "Error reading localStorage:",
      error
    );

    return defaultValue;
  }
};

export const setData = (
  key,
  value
) => {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.error(
      "Error saving localStorage:",
      error
    );
  }
};

export const removeData = (
  key
) => {

  try {

    localStorage.removeItem(key);

  } catch (error) {

    console.error(
      "Error removing localStorage:",
      error
    );
  }
};

export const clearStorage =
  () => {

    try {

      localStorage.clear();

    } catch (error) {

      console.error(
        "Error clearing localStorage:",
        error
      );
    }
  };