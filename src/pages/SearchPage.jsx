import Nav from "../utils/Nav";
import Footer from "../components/SearchPage/Footer";
import Hero from "../components/SearchPage/Hero";

function SearchPage() {
  return (
    <div className="bg-custom-radial flex h-screen w-screen flex-col justify-between items-center overflow-hidden">
      <div className="h-[10vh]">
        <Nav />
      </div>
      <div className="h-[70vh] ">
        <Hero />
      </div>
      <div className="h-[20vh]  py-5">
        <Footer />
      </div>
    </div>
  );
}

export default SearchPage;
