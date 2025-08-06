import { HeaderCategoryProduct } from "./components/HomeComponents/HeaderCategoryProduct";
import { Hero } from "./components/HomeComponents/home/Hero";
import { NewArrival } from "./components/HomeComponents/NewArrival";
import { OurProduct } from "./components/HomeComponents/OurProduct";
import { TopBrands } from "./components/HomeComponents/TopBrands";
import { Navbar } from "./components/navbars/Navbar";

// const font = Quicksand({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default function Home() {
  return (
    <div className=" w-full flex flex-col justify-center h-full items-center ">
      <Navbar />
      <div className=" w-full gap-11 flex-col  flex justify-center items-center">
        <Hero />
        <TopBrands />
        <HeaderCategoryProduct />
        <NewArrival />
        <OurProduct />
      </div>
    </div>
  );
}
