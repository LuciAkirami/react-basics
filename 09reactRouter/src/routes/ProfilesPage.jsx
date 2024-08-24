import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function ProfilesPage() {
  let profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2">
        {profiles.map((profile) => {
          return (
            <NavLink
              key={profile}
              //  so when a user clicks, go to this route
              to={`/profiles/${profile}`}
              // this will set the active Profile to Blue Color
              className={({ isActive }) => {
                return isActive ? "text-blue-600" : "";
              }}
            >
              Profile {profile}
            </NavLink>
          );
        })}
      </div>
      {/* The outlet will render the children routes if there are any. Here it will render the
        ProfilePage Component, which is the child route to the ProfilesPage Component */}
      <Outlet />
    </div>
  );
}
