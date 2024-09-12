import { useState } from "react";

function ResultAndSort() {
  const [sortOption, setSortOption] = useState("name");
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  return (
    <div className="flex justify-between">
      <div className="text-gray-700">Showing results 1-16 of 113 results</div>

      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-gray-700">
          Sort by
        </label>
        <select
          id="sort-by"
          value={sortOption}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700"
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="Date">Date</option>
        </select>
      </div>
    </div>
  );
}

export default ResultAndSort;
