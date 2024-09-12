import { Line4, Line5, Line6 } from "../../assets/importAssets";

function Hero() {
  return (
    <div className="w-full h-96 relative flex flex-col justify-center items-center bg-gray-50 overflow-hidden">
      <img src={Line4} className="absolute top-0 right-0" alt="Line 4" />
      <div className="absolute  left-[2rem] top-[-10rem] flex gap-x-[2rem]">
        <img src={Line5} alt="Line 5" className="mt-[28rem]" />
        <img src={Line6} alt="Line 6" />
      </div>
      <h1 className="text-3xl text-[#161E58]  font-bold mb-4">All Items</h1>
      <p className="text-lg text-[#00000080] text-gray-500">
        Discover top searches here
      </p>
    </div>
    
  );
}

export default Hero;
