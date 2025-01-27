import { ICONS } from "../../assets/assets";
import { useState, useEffect } from "react";

const Nav = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/solutions/feature1", label: "Feature 1" },
    { to: "/solutions/feature2", label: "Feature 2" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    // Check initial scroll position on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-between px-6 py-3 bg-white border-[2px] border-gray-300 rounded-full fixed top-4 left-1/2 -translate-x-1/2 transition-transform duration-300 ${
        isScrolling ? "translate-y-0" : "h-[66px]"
      }`}
    >
      <div className="flex items-center gap-3 text-base">
        <a
          href="/"
          className="text-gray-800 hover:text-violet-500 hover:bg-gray-100 px-4 py-2 rounded-full"
        >
          <img src={ICONS.brandLogo} className="h-6 w-6" alt="brand logo" />
        </a>

        {links.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="text-gray-800 hover:text-violet-500 hover:bg-gray-100 px-4 py-2 rounded-full"
          >
            {link.label}
          </a>
        ))}

        {/* Show additional links after scrolling */}
        {isScrolling && (
          <>
            <button className="btn border-[2px] border-[#6568f2] hover:bg-gray-200 px-6 py-2 rounded-lg cursor-pointer">
              Get a Demo
            </button>
            <button className="btn bg-[#6568f2] hover:border-[2px] border-[#5558f6] text-white px-6 py-2 rounded-lg border-[2px] cursor-pointer">
              Try for free
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
