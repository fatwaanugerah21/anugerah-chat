import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar m-f-c">
      <div className="logo">F.A</div>
      <nav className="m-f-c">
        <img className="nav-icon active-nav" src="/icons/chat.svg" alt="" />
        <img className="nav-icon" src="/icons/calendar.svg" alt="" />
        <img className="nav-icon" src="/icons/chat.svg" alt="" />
        <img className="nav-icon" src="/icons/chat.svg" alt="" />
      </nav>
    </div>
  );
};
export default Navbar;
