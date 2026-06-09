function FilterPanel({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort
}) {
  return (
    <div className="card">

      <input
        type="text"
        placeholder="Search Medicines..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="All">
          All Categories
        </option>

        <option value="Tablet">
          Tablet
        </option>

        <option value="Syrup">
          Syrup
        </option>

        <option value="Injection">
          Injection
        </option>

        <option value="Device">
          Device
        </option>

        <option value="Supplement">
          Supplement
        </option>
      </select>

      <select
        value={sort}
        onChange={(e) =>
          setSort(e.target.value)
        }
      >
        <option value="none">
          Sort By
        </option>

        <option value="low">
          Price Low To High
        </option>

        <option value="high">
          Price High To Low
        </option>
      </select>

    </div>
  );
}

export default FilterPanel;