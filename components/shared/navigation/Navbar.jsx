import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import SearchPost from "../SearchPost";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-width h-[3.6rem] flex justify-between items-center">
        <div className="flex items-center gap-4 flex-1">
          <div>
            <Image
              src="/images/icons/jofwit.png"
              width={50}
              height={40}
              alt="logo"
            />{" "}
          </div>
          <div className="w-[35%]">
            <SearchPost />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/search" className="text-[27px] md:hidden">
            <FiSearch />
          </Link>
          <Link href="/new" className="hidden md:inline-block">
            <button className="border border-primary rounded-md py-2 px-3 hover:bg-primary hover:text-white text-primary font-medium hover:underline">
              Create Post
            </button>
          </Link>
          <span className="text-[27px] cursor-pointer">
            <IoMdNotificationsOutline />
          </span>
          <span className="text-[36px] cursor-pointer">
            <FaCircleUser />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
