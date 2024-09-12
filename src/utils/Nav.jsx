import { Image } from "../assets/importAssets";

function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md w-screen">
      <div className="flex space-x-8">
        <a href="/about" className="text-base text-black">
          About us
        </a>
        <a href="/contact" className="text-base text-black">
          Contact us
        </a>
      </div>

      <div className="text-center">
        <img src={Image} alt="Logo" className="h-10" />
      </div>

      <div className="ml-autoflex space-x-4">
        <a href="/login" className="text-base text-black hover:underline">
          Login
        </a>
        <a
          href="/signup"
          className="px-8 py-3 text-white bg-black rounded-full hover:bg-slate-gray"
        >
          Signup
        </a>
      </div>
    </nav>
  );
}

export default Nav;
