import Image from "next/image";

import Mainsection from "./components/Landing/Mainsection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
<div>
  <Navbar/>
  <Mainsection/>
</div>
  );
}
