import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav>
      <div className="mx-auto justify-center">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="justify-center">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white aria-[current=page]:bg-gray-700"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/notes"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white aria-[current=page]:bg-gray-700"
                >
                  Posts
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
