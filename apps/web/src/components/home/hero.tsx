import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import lottie from "@/assets/animations/assets.json";
import lottie1 from "@/assets/animations/assets2.json";
import lottie2 from "@/assets/animations/assets3.json";
export default function Hero() {
  return (
    <>
      <Button>DASH BORD</Button>
      <h1>LANDING PAGE</h1>
      <Link to="/dashboard">DASHBOARD</Link>
      <Lottie
        animationData={lottie}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
      <Lottie
        animationData={lottie1}
        loop={true}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Lottie
        animationData={lottie2}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </>
  );
}
