import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../../Assets/images/logo.png";

export default function Sidebar({ isOpen, onClose }) {
  const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: "material-symbols:dashboard-outline",
  },
  {
    name: "Users",
    path: "/users",
    icon: "material-symbols:group-outline",
  },
  {
    name: "Playlists",
    path: "/playlists",
    icon: "material-symbols:queue-music",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "material-symbols:person-outline",
  },
];

const navigate = useNavigate();


  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 transition-opacity md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-[#111B3C] text-white transition-transform duration-300 ease-in-out md:static md:translate-x-0 border-r border-[#2B7FFF33] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Change the compnay logo on this div */}
          <div className="flex h-25 items-center justify-between px-15 border-b border-[#2B7FFF33]">
            <div className="text-xl font-bold tracking-wider">
              <img src={Logo} alt="Company Logo" className="h-36 w-auto scale-[1.3]" />
            </div>

            <button
              onClick={onClose}
              className="rounded-md p-1 hover:bg-[#1f2d5c] md:hidden"
            >
              <Icon icon="material-symbols:close" width="20" height="20" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-3 overflow-y-auto px-4 py-6">
            {navLinks.map((item) => {
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-xl font-sm transition-colors ${
                      isActive
                        ? "bg-[#2B7FFF] text-white"
                        : "text-gray-300 hover:bg-[#1f2d5c] hover:text-white"
                    }`
                  }
                  onClick={() => {
                    // Close sidebar on mobile when a link is clicked
                    if (window.innerWidth < 768) {
                      onClose();
                    }
                  }}
                >
                  <Icon icon={item.icon} width="26" height="26" />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="border-t border-[#2B7FFF33] p-4">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-xl font-sm text-gray-300 cursor-pointer transition-colors hover:bg-[#1f2d5c] hover:text-white"
            >
              <Icon icon="material-symbols:logout" width="22" height="22" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
