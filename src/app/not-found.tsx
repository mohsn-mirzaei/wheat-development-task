import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundError() {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Oops. Not found page!</span>
        <p className="text-center text-muted-foreground">
          It look like the page you want <br />
          Its not found or deleted!
        </p>
        <div className="mt-6 flex gap-4">
          <Link href={"/"}>
            <Button>Go back home!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
