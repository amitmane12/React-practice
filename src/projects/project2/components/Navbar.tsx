import tomIcon from "../assets/tomIcon.png";
const Navbar = () => {
  return (
    <div className="h-25 bg-gray-400 flex items-center justify-around">
      <div>
        <img src={tomIcon} alt="" className="h-20 rounded-full" />
      </div>
      <div>
        <ul className="flex gap-5 text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
