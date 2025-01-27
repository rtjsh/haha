import { ICONS } from "../../assets/assets";
const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
      <div className="flex items-center gap-1">
        <button>
          <img src={ICONS.brandLogo} className="size-6" alt="brand logo" />
        </button>
        <span className="font-normal text-lg">Solutions</span>
      </div>
    </div>
  );
};

export default Nav;
