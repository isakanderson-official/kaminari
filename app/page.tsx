"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";

import envelope from "@/public/images/envelope.png";
import { VerifyEmailInputAndButton } from "@/components/ui/inputWithButton";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              About
            </span>
            <p className="pb-6 font-medium">
              {`AppVerify is a cutting-edge disposable email detector and
              validator, powered by a robust API. It's designed to protect your
              online platforms from temporary or junk email addresses, ensuring
              only valid and long-term users gain access. With AppVerify, you
              can maintain the integrity of your user base, improve data
              quality, and enhance security. Developed with a focus on
              reliability and efficiency, AppVerify is your go-to solution for
              disposable email detection and validation.`}
            </p>

            <div className="">
              <VerifyEmailInputAndButton />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="p-29 hidden h-screen w-full flex-col items-center justify-center bg-[#d6ebe9] lg:flex">
        <Image
          src={envelope}
          alt="Happy envelope 3d model"
          style={{ width: "60%" }}
        />
      </section>
    </section>
  );
}
