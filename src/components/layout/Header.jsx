import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Photo from "../../Assets/images/cartoon-boy.png";
import Favicon from "../../Assets/images/favicon.png"; 

export default function Header({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-white border-b border-gray-200 px-4 md:px-6 shadow-sm">
      
      {/* Left (Menu) */}
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="rounded-md p-1 hover:bg-gray-100 md:hidden"
        >
          <Icon icon="material-symbols:menu" width="24" />
        </button>
      </div>

      {/* Center Title (Responsive) */}
      <div className="flex items-center justify-center gap-3 flex-1">
        {/* Left Wave – hide on small */}
        <img
          src={Favicon}
          alt="wave left"
          className="hidden md:block h-[2.2em] w-auto"
        />

        {/* Text */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center whitespace-nowrap">
          SOUNDTRACK MY NIGHT
        </h1>

        {/* Right Wave – hide on small */}
        <img
          src={Favicon}
          alt="wave right"
          className="hidden md:block h-[2.2em] w-auto scale-x-[-1]"
        />
      </div>

      {/* Right Profile */}
      <div className="relative flex items-center" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100 transition"
        >
          {/* Avatar */}
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#2B7FFF] to-purple-500 overflow-hidden">
            <img
              src={Photo}
              alt="Admin"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name & Email – hide on small */}
          <div className="hidden lg:flex flex-col text-left leading-tight">
            <span className="text-sm font-semibold text-gray-900">
              Admin
            </span>
            <span className="text-xs text-gray-500">
              admin@playlistquiz.com
            </span>
          </div>

          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            width={22}
            className={`text-gray-400 transition ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-40 rounded-lg bg-white py-2 text-gray-700 shadow-xl border border-gray-200 z-20">
            <button
              onClick={() => {
                setOpen(false);
                navigate("/profile");
              }}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
            >
              <Icon icon="material-symbols:person-outline" width={18} />
              My Profile
            </button>

            <div className="my-1 h-px bg-gray-200" />

            <button
              onClick={() => {
                setOpen(false);
                navigate("/login");
              }}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <Icon icon="material-symbols:logout" width={18} />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
