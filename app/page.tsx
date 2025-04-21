import { Hero } from "./components/HomeComponents/home/Hero";
import { TopBrands } from "./components/HomeComponents/TopBrands";
import { Navbar } from "./components/navbars/Navbar";

// const font = Quicksand({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default function Home() {
  return (
    <div className=" w-full flex flex-col ">
      <Navbar />
      <Hero />
      <TopBrands />
    </div>
  );
}
