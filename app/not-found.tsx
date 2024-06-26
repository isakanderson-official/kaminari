import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-content-center px-10 text-center">
      <p className="stroked mr-7 w-auto py-2 text-6xl font-black transition-all duration-300 ease-linear md:py-4 md:text-[10rem] md:leading-[200px]">
        Nothing to see here...
      </p>
      <div className="mx-auto mt-8 w-full max-w-lg md:mt-0">
        <Link href="/" className="pb-1 text-zinc-100 dark:text-zinc-800">
          <Button size="xl" className="w-full font-bold" variant="brand">
            Take me home!
          </Button>
        </Link>
      </div>
    </div>
  );
}
