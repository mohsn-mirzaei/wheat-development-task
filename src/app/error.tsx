"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={"h-svh w-full"}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">500</h1>
        <p className="text-center text-muted-foreground">
          <span className="font-bold">Sorry</span>! <br /> Please try again or
          contact support.
        </p>

        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => reset?.()}>
            Try again
          </Button>
          <Link href={"/"} replace>
            <Button>Go back home!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
