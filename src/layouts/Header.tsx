import logo from "../assets/logo-big.svg";

function Header() {
  return (
    <div className="flex justify-between items-center h-20 bg-blue-400 text-stone-700 p-4 sticky top-0 z-50 cursor-pointer" >
      <div className="h-[75] w-[10rem]">
        <img className="object-contain h-full w-full transition ease-in  delay-50 hover:scale-110 " src={logo} />{" "}
      </div>
      <div className="flex justify-center items-center gap-4  text-xl font-semibold ">
        <a href="#" className="transition ease-in  delay-50 hover:scale-110">Home</a>
        <a href="#"  className="transition ease-in  delay-50 hover:scale-110">About</a>
        <a href="#"  className="transition ease-in  delay-50 hover:scale-110">QA</a>
      </div>
    </div>
  );
}
export default Header;
