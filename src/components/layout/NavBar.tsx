import { useState } from "react";
import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/paths", label: "Paths" },
  { to: "/daily-query", label: "Daily Query" },
  { to: "/playground", label: "Playground" },
  { to: "/boss-battles", label: "Boss Battles" },
  { to: "/projects", label: "Projects" },
  { to: "/schemas", label: "Schemas" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/mistakes", label: "Review" },
];

function getNavLinkClass(isActive: boolean) {
  return [
    "border-2 px-3 py-2 text-xs font-black uppercase transition-transform",
    "hover:translate-x-1 hover:translate-y-1",
    isActive
      ? "border-cyan-300 bg-cyan-300 text-slate-950 shadow-[3px_3px_0px_#a78bfa]"
      : "border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-300 hover:text-cyan-300",
  ].join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-slate-800 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) =>
            [
              "shrink-0 border-2 px-4 py-3 text-sm font-black uppercase tracking-tight shadow-[4px_4px_0px_#22d3ee]",
              isActive
                ? "border-cyan-300 bg-cyan-300 text-slate-950"
                : "border-slate-100 bg-slate-950 text-white",
            ].join(" ")
          }
        >
          QUERY//QUEST
        </NavLink>

        <div className="hidden items-center gap-2 xl:flex">
          {navItems.slice(1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navbar-menu"
          className="border-2 border-slate-100 bg-slate-900 px-4 py-3 text-xs font-black uppercase text-white shadow-[4px_4px_0px_#a78bfa] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none xl:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-navbar-menu"
          className="border-t-2 border-slate-800 bg-slate-950 px-4 pb-5 xl:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
            {navItems.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "border-2 px-4 py-3 text-sm font-black uppercase transition-transform",
                    "hover:translate-x-1 hover:translate-y-1",
                    isActive
                      ? "border-cyan-300 bg-cyan-300 text-slate-950 shadow-[3px_3px_0px_#a78bfa]"
                      : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-300 hover:text-cyan-300",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
