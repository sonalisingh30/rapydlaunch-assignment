/* eslint-disable react/prop-types */
import { Rectangle2 } from "../assets/importAssets";

function Card({ card }) {
  const { title, description, vendorName } = card;
  return (
    <div className="relative border flex flex-col justify-between w-[309px] h-[205px] bg-[#F9F9F9] border-gray-300 rounded-lg shadow-md p-4 m-4">
      <div className="flex justify-between">
        <div className="text-gray-300 text-xs font-bold">
          W<br />H
        </div>
        <div className="text-sm text-gray-700">{vendorName}</div>
      </div>

      <div className="flex justify-between items-baseline">
        <div className="mt-4 ">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className=" absolute bottom-1 right-1 h-[21px] w-[19px]">
        <img src={Rectangle2} alt="icon" className="h-full w-full" />
      </div>
    </div>
  );
}

export default Card;
