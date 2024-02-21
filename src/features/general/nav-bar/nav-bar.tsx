import NavBarLink from "./nav-bar-link";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full border-b border-slate-700 divide-x divide-slate-700">
      <div className="flex-1">
        <div className="p-5 text-xl">VENTION</div>
      </div>
      <div className="flex justify-between text-xl">
        <NavBarLink text="What we do" />
        <NavBarLink text="Portfolio" />
        <NavBarLink text="Insights" />
        <NavBarLink text="About us" />
        <NavBarLink text="Contact us" filled/>
      </div>
    </div>
  );
};

export default Navbar;
