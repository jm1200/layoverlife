// components/Navbar.tsx

import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className=" p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Layover Life Logo"
            width={60}
            height={60}
          />
          <div className="font-bold text-xl">Layover Life</div>
        </div>
        <div className="space-x-4">
          {/* <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Cities
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a> */}
        </div>
        <div className="space-x-4">
          <LoginLink
            className={buttonVariants({
              size: "sm",
            })}
          >
            Admin
          </LoginLink>

          {/* <RegisterLink
            className={buttonVariants({
              size: "sm",
            })}
          >
            Sign up
          </RegisterLink> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
