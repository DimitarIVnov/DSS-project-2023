import logo from "./imgs/logo-svg-2.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-img">
          <img src={logo} />{" "}
        </div>
        <div className="menu-items-container">
          <div className="menu-item">
            <p>Home</p>
          </div>
          <div className="menu-item">
            <p>FAQ</p>
          </div>
          <div className="menu-item">
            <p>Contacts</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
