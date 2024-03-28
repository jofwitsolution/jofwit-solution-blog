import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/icons/jofwit.png"
            width={50}
            height={40}
            alt="logo"
            className="mb-7"
          />
          <h1 className="font-semibold text-[1.5rem] mb-1">
            Join the JS Community
          </h1>
          <p>JS Community is a community of 1,380,451 amazing developers</p>
        </div>

        <div className="max-w-[44rem] flex flex-col gap-3 mt-6">
          <div className="w-full flex cursor-pointer hover:bg-slate-200 justify-between gap-8 border border-[rgba(0,0,0,0.15)] p-4 rounded-md">
            <Image
              src="/images/icons/github.svg"
              width={25}
              height={25}
              alt="github"
            />
            <span className="font-medium">GitHub</span>
            <Image
              src="/images/icons/github.svg"
              width={25}
              height={25}
              alt="github"
              className="invisible"
            />
          </div>
          <Link
            href="/auth/register/email"
            className="w-full flex cursor-pointer hover:bg-slate-200 justify-between gap-8 border border-[rgba(0,0,0,0.15)] p-4 rounded-md"
          >
            <Image
              src="/images/icons/email.svg"
              width={25}
              height={25}
              alt="email"
            />
            <span className="font-medium">Email</span>
            <Image
              src="/images/icons/email.svg"
              width={25}
              height={25}
              alt="email"
              className="invisible"
            />
          </Link>

          <p className="my-6 max-w-[25rem] mx-auto text-center">
            By signing up, you are agreeing to our{" "}
            <Link href="/privacy" className="text-blue-400 hover:underline">
              privacy policy
            </Link>
            ,{" "}
            <Link href="/terms" className="text-blue-400 hover:underline">
              terms of use
            </Link>{" "}
            and{" "}
            <Link
              href="/code-of-conduct"
              className="text-blue-400 hover:underline"
            >
              code of conduct
            </Link>
            .
          </p>

          <div className="border-b w-full border-[rgba(0,0,0,0.15)] mb-6" />

          <p className="text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-400 hover:underline">
              Log in
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
