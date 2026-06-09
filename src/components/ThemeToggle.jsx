function ThemeToggle() {

  const toggleTheme = () => {

    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background:
          "rgba(255,255,255,0.2)"
      }}
    >
      🌙
    </button>
  );
}

export default ThemeToggle;