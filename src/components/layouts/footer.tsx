import Link from "next/link";
import { memo } from "react";
import { Button } from "../ui/button";

export const Footer = memo(function Footer() {
  return (
    <div className="flex items-center justify-center col-start-2 row-start-7 lg:col-start-4">
      <p className="text-xs text-center leading-px lg:text-sm text-muted-foreground">
        Hak cipta&copy; {new Date().getFullYear()} oleh
        <Button variant="link" className="p-0 px-1 text-xs lg:text-sm" asChild>
          <Link
            href="https://github.com/aldiipratama"
            target="_blank"
            rel="noreferrer"
          >
            Aldi Pratama
          </Link>
        </Button>
        dibangun dengan ❤️ menggunakan NextJS.
      </p>
    </div>
  );
});
