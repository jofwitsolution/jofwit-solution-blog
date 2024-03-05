import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socialLinks } from "@/constants/links";
import { myTags } from "@/lib/data";

const LeftSideMenu = () => {
  return (
    <div className="w-full space-y-8 pb-4">
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
      <div className="flex gap-2 justify-between w-full items-center px-2">
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

      <div className="">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold">My Tags</span>
          <Image src="/images/icons/tag.svg" width={25} height={25} alt="tag" />
        </div>
        <div className="h-[200px] overflow-y-auto">
          <ul>
            {myTags.map((tag) => (
              <li key={tag._id} className="">
                <Link
                  href={`/t/${tag.name}`}
                  className="py-3 px-2 rounded-md inline-flex w-full hover:underline hover:bg-primary-100"
                >
                  #{tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-[14px] space-y-3">
        <p>
          <Link href="/" className="text-primary">
            Jofwit Solution Community
          </Link>{" "}
          A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <p>Jofwit Solution © 2024</p>
      </div>
    </div>
  );
};

export default LeftSideMenu;
