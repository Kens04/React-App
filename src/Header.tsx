import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-slate-900 py-5 px-4">
      <div className="flex justify-between">
        <div>
          <NavLink className="text-white" to="/">
            BLOG
          </NavLink>
        </div>
        <div>
          <NavLink className="text-white" to="/contact">
            お問い合わせ
          </NavLink>
        </div>
      </div>
    </div>
  );
};
