import Hero from "../components/AllResultPage/Hero";
import MainSpace from "../components/AllResultPage/MainSpace";
import Nav from "../utils/Nav";
import SideBar from "../components/AllResultPage/SideBar";

function AllResutPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="flex justify-between w-full items-start px-[1.5rem] py-[2rem]">
        <SideBar />
        <MainSpace />
      </div>
    </div>
  );
}

export default AllResutPage;
