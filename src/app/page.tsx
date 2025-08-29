

import Mainsection from "./components/Landing/Mainsection";
import Navbar from "./components/Navbar";
import HealthServices from "./components/Landing/HealthSearvices";
import TrustSection from "./components/Landing/TrustSection";
import Testimonial from "./components/Landing/Testimonial";

export default function Home() {
  return (
<div>
  <Navbar/>
  <Mainsection/>
    <TrustSection/>
    <Testimonial/>
  <HealthServices/>

</div>
  );
}
