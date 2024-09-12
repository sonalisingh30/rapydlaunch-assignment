/* eslint-disable react/prop-types */
import { Box } from "../../assets/importAssets";
import { filters } from "../../data/card";

function SideBar() {
  return (
    <div className="w-60 pl-[2rem] bg-white">
      {filters?.map((filter, index) => (
        <div key={index} className="mb-6">
          <h3
            className="text-2xl font-semibold mb-3"
            style={{ color: "#161E58" }}
          >
            {filter.headerName}
          </h3>
          <ul>
            {filter.options.map((option, i) => (
              <li key={i} className="mb-2 flex items-center">
                <img src={Box} alt={option} className="mr-2 h-6 w-6" />
                <label
                  htmlFor={`filter-${index}-${i}`}
                  style={{ color: "#FF99FF99" }}
                  className="text-gray-700"
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
