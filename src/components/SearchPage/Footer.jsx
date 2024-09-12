import {
  Image,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image3,
  Image4,
  Image5,
  Image6,
} from "../../assets/importAssets";

function Footer() {
  return (
    <div className="delivered flex flex-col items-center justify-center w-[1173.38px] mx-auto">
      <div className="deleivered-meals flex flex-row items-center gap-x-[2rem]">
        <div className="deleivered-imgs flex ">
          <img
            src={Image3}
            alt="Customer 1"
            className="w-10 h-10 rounded-full mr-[-1rem]"
          />
          <img
            src={Image4}
            alt="Customer 2"
            className="w-10 h-10 rounded-full mr-[-1rem]"
          />
          <img
            src={Image5}
            alt="Customer 3"
            className="w-10 h-10 rounded-full mr-[-1rem]"
          />
          <img
            src={Image6}
            alt="Customer 4"
            className="w-10 h-10 rounded-full mr-[-1rem]"
          />
        </div>
        <p className="delivered-text text-lg font-[500]  text-[#3F3F3F]">
          1000+ happy doctors listed here.
        </p>
      </div>

      <footer className=" py-8 ">
        <div className="flex justify-center space-x-8 mb-6">
          <img src={Image13} alt="Logo 1" className="h-10" />
          <img src={Image14} alt="Logo 2" className="h-10" />
          <img src={Image15} alt="Logo 3" className="h-10" />
          <img src={Image16} alt="Logo 4" className="h-10" />
          <img src={Image17} alt="Logo 5" className="h-10" />
          <img src={Image18} alt="Logo 6" className="h-10" />
          <img src={Image} alt="Logo 7" className="h-10" />
          <img src={Image19} alt="Logo 8" className="h-10" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
