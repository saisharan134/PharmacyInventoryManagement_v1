function Header({ title }) {

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
    <header>

      <div style={{ width: "40px" }}></div>

      <h2>
        ✚ {title}
      </h2>

      <button
        onClick={toggleTheme}
        style={{
          background:
            "rgba(255,255,255,0.2)"
        }}
      >
        🌙
      </button>

    </header>
  );
}

export default Header;