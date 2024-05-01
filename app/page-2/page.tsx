"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/man-with-robot.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              02
            </span>
            <p className="pb-6 font-medium">
              Ada Lovelace, an English mathematician and writer, is considered
              the world&apos;s first computer programmer. She wrote the
              world&apos;s first algorithm to be processed by a machine,
              specifically for Charles Babbage&apos;s Analytical Engine, which
              is considered the first general-purpose computer
            </p>

            <div className="">
              <a
                href="https://github.com/lucky-chap/kaminari"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-100 dark:text-zinc-800"
              >
                <Button size="xl" className="w-full font-bold" variant="brand">
                  Repo
                </Button>
              </a>{" "}
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden h-screen w-full flex-col items-center justify-center bg-[#e0f5ff] p-9 lg:flex">
        <Image src={manWIthRobot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
