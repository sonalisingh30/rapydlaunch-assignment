import {
  Image10,
  Image11,
  Image12,
  Image7,
  Image8,
  Image9,
  Line3,
} from "../../assets/importAssets";
import Form from "../../utils/Form";

function Hero() {
  return (
    <div className="h-full w-screen relative py-[2rem] px-[4rem]  ">
      <img
        src={Line3}
        alt="Line 3"
        className="absolute top-[-2rem] z-0 left-0"
      />
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-[3rem]">
        <div className="w-[65%] ">
          {/* Header */}
          <div className="text-start mb-4">
            <h1 className="text-4xl font-bold text-black">
              Discover the Best Fit, Driven by AI Intelligence
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4 justify-center h-full z-10 w-[658px] ">
            <img
              src={Image7}
              alt="Smile 1"
              className="rounded-lg w-[206px]  h-[153.3px] object-cover"
            />
            <img
              src={Image8}
              alt="Smile 2"
              className="rounded-lg w-[206px] h-[153.3px] object-cover"
            />
            <img
              src={Image9}
              alt="Smile 3"
              className="rounded-lg w-[206px] h-[153.3px] object-cover"
            />
            <img
              src={Image10}
              alt="Smile 4"
              className="rounded-lg w-[206px] h-[153.3px]  object-cover"
            />
            <img
              src={Image11}
              alt="Smile 5"
              className="rounded-lg w-[206px] h-[153.3px]  object-cover"
            />
            <img
              src={Image12}
              alt="Smile 6"
              className="rounded-lg w-[206px] h-[153.3px]  object-cover"
            />
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
}

export default Hero;
