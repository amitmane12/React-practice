const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-around p-10 gap-4">
      <h4 className="px-10 py-4 flex items-center justify-center text-center text-[10px] uppercase rounded-full bg-black text-white tracking-wider lg:px-8 lg:py-4 lg:text-[1.2rem]">
        target audience
      </h4>
      <button className="px-2 py-2 text-[10px]  rounded-full lg:px-8 lg:py-4 border  tracking-[0.2em]  lg:text-[1.1rem]">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
