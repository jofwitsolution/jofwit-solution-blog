import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socialLinks } from "@/constants/links";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-[2000] h-screen">
      <div className="w-[80%] space-y-8 pt-2 pb-4 bg-white h-screen text-[1.2rem]">
        <div className="w-full px-4">
          <div className="mb-10 flex justify-between items-center">
            <span className="text-[1.3rem] font-semibold">JS Community</span>
            <span onClick={closeSidebar}>
              <Image
                src="/images/icons/close.svg"
                width={25}
                height={25}
                alt="close"
              />
            </span>
          </div>
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
        <div className="flex gap-2 justify-between w-max items-center px-2">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="p-2 rounded-md hover:bg-primary-100"
            >
              <Image src={item.icon} width={25} height={25} alt={item.label} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
