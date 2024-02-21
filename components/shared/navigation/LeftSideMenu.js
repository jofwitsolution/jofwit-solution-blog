import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/links";

const LeftSideMenu = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex gap-2 w-full items-center px-2 py-3 hover:bg-primary-100 hover:underline rounded-md"
          >
            <Image src={item.icon} width={20} height={17} alt={item.label} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideMenu;
