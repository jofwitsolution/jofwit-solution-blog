import React from "react";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/form/LoginForm";

const Page = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen py-[4rem]">
      <div>
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src="/images/icons/jofwit.png"
              width={50}
              height={40}
              alt="logo"
              className="mb-7"
            />
          </Link>
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
            <span className="font-medium text-[0.9rem]">
              Continue with GitHub
            </span>
            <Image
              src="/images/icons/github.svg"
              width={25}
              height={25}
              alt="github"
              className="invisible"
            />
          </div>

          <div className="w-full flex gap-4 items-center my-4">
            <div className="border-b w-full border-light-border" />
            <span>OR</span>
            <div className="border-b w-full border-light-border" />
          </div>

          <div>
            <LoginForm />
          </div>

          <p className="my-6 max-w-[25rem] mx-auto text-center">
            By signing in, you are agreeing to our{" "}
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

          <div className="border-b w-full border-light-border mb-6" />

          <p className="text-center">
            New to JS Community?{" "}
            <Link
              href="/auth/register"
              className="text-blue-400 hover:underline"
            >
              Create account
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
