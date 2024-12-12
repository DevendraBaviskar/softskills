import {} from "react";
import "./Home.css";
import AI from "../../assets/AI.png";
const Home = () => {
  return (
    <div>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${AI})`, // Correct usage
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures it covers the entire space
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Covers the full viewport height
          width: "100%", // Covers the full width
        }}
      ></div>
    </div>
  );
};

export default Home;
