import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";

import Logo from "../../../public/favicons/logo.svg";

function Header() {
  return (
    <header className="h-[100px] w-full">
      <div className="layout-standard flex items-center justify-between h-full">
        <Image
          src={Logo}
          alt="Central Trademark Revival"
          priority
          className="w-[200px]"
        />

        <Button className="h-[55px] px-8 font-medium hover:bg-primary-hover text-base rounded-[0.5rem] bg-primary">
          Revive Trademark
        </Button>
      </div>
    </header>
  );
}

export default Header;
