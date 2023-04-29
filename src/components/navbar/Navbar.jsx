import React from "react";
import NavbarRight from "./NavbarRight";

export default function Navbar() {
  return (
    <div className="w-full] h-[83px] bg-white">
      <div className="flex max-w-[1140px] mx-auto px-4 justify-between h-full items-center">
        <div>
          <img
            className="w-64"
            src="	https://html.design/demo/famms/images/logo.png"
            alt=""
          />
        </div>
        <div className="">
          <NavbarRight />
        </div>
      </div>
    </div>
  );
}
