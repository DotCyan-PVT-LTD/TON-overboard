import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
const Navbar = () => {
  return (
    <nav className="bg-red-300 flex justify-between">
      <div></div>
      <div>
        <TonConnectButton />
      </div>
    </nav>
  );
};

export default Navbar;
