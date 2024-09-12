import { useNavigate } from "react-router-dom";
import { Line2 } from "../assets/importAssets";

function Form() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    // You can also pass query parameters or state if needed
    navigate("/results"); // Navigate to results page
  };

  return (
    <div className="w-[463px] bg-white p-6 rounded-lg shadow-lg relative">
      <img src={Line2} alt="Line 2" className="absolute top-0 right-0" />
      <h3
        className="text-lg flex justify-center bg-[#3F3F3F
] mb-4 absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[30px] bg-white py-2 px-5 font-mcqueen "
      >
        Discover best teeths.
      </h3>
      <h2 className="text-xl font-bold text-gray-700 mb-4 mt-[2rem]">
        Find Best Smile
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 mb-2">Teeth size (min)</label>
          <input
            type="number"
            placeholder="34.4 mm"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Teeth size (max)</label>
          <input
            type="number"
            placeholder="44.4 mm"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 mb-2">Filters</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Red, Blue</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Shapes</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Circle, Square</option>
            <option>Circle, Square</option>
            <option>Circle, Square</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 mb-2">Names</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Seth, Albert</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Position</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Upper, Lower</option>
          </select>
        </div>
      </div>
      <button
        className="w-full bg-blue-500 text-white p-3 rounded-md mt-4"
        onClick={handleSearch} // Trigger navigation on click
      >
        Search
      </button>
    </div>
  );
}

export default Form;
