import React from "react";

const LoginBar: React.FC = () => (
  <div className="flex items-center gap-6">
    <button className="text-[#F0EFE8]/70 font-sans text-xs tracking-widest hover:text-[#F5C842] transition-colors uppercase">
      Log in
    </button>
    <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-label font-bold px-6 py-2 rounded-lg scale-95 active:duration-100 transition-all shadow-lg shadow-primary/10">
      Join
    </button>
    <span
      className="material-symbols-outlined text-[#F5C842] cursor-pointer"
      data-icon="crossed_swords"
    >
      swords
    </span>
  </div>
);

export default LoginBar;
