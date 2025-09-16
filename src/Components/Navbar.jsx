import React from "react";

const Navbar = ({ tokens }) => {
  return (
    <nav className="flex items-center justify-between bg-[#d28eea] px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-white cursor-pointer drop-shadow-[0_0_10px_#ec4899] transition">
        FLUXOR
      </h1>
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-[#d660c2] text-white hover:bg-[#9d408d] transition cursor-pointer">
          Add Expense
        </button>
        <button className="px-4 py-2 rounded-lg bg-[#646060] text-white hover:bg-[#302c2d] transition cursor-pointer">
          {tokens}🪙
        </button>
        <button className="p-2 rounded-full bg-[#eac5f1] hover:bg-[#a687a0] transition cursor-pointer">
          👤
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
