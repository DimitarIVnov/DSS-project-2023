import landing from "/src/assets/landing.jpeg";

function LandingImg() {
  return (
    <div className="h-[500px] flex absolute ">
      <img src={landing} alt="Landing Img" className="w-[100%] object-cover " />
    </div>
  );
}

export default LandingImg;
